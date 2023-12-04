import { Injectable } from '@nestjs/common';
import { CreateSurveyInput } from './dto/create-survey.input';
import { UpdateSurveyInput } from './dto/update-survey.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from 'src/entities/survey.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { QuestionService } from '../question/question.service';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
    private readonly questionService: QuestionService,
  ) {}

  async create(createSurveyInput: CreateSurveyInput) {
    const survey = this.surveyRepository.create(createSurveyInput);
    survey.questions = await Promise.all(
      createSurveyInput.question.map((q) => this.questionService.create(q)),
    );

    return this.surveyRepository.save(survey);
  }

  findAll(condition: FindOptionsWhere<Survey>) {
    return this.surveyRepository.findBy(condition);
  }

  findOne(id: number) {
    return this.surveyRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateSurveyInput: UpdateSurveyInput) {
    const survey = await this.surveyRepository.findOneByOrFail({ id });
    return this.surveyRepository.save({ ...survey, ...updateSurveyInput });
  }

  async remove(id: number) {
    const survey = await this.surveyRepository.findOneByOrFail({ id });
    await this.surveyRepository.delete(id);
    return survey;
  }
}
