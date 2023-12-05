import { Injectable } from '@nestjs/common';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Answer } from 'src/entities/answer.entity';
import { SurveyService } from '../survey/survey.service';
import { ChoiceService } from '../choice/choice.service';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
    private readonly surveyService: SurveyService,
    private readonly choiceService: ChoiceService,
  ) {}

  async create(createAnswerInput: CreateAnswerInput) {
    const answer = this.answerRepository.create();
    answer.survey = await this.surveyService.findOne(createAnswerInput.survey);
    answer.choices = await Promise.all(
      createAnswerInput.choices.map((c) => this.choiceService.findOne(c)),
    );

    return this.answerRepository.save(answer);
  }

  findAll(condition: FindOptionsWhere<Answer>) {
    return this.answerRepository.find({
      relations: { survey: true, choices: true },
      where: condition,
    });
  }

  findOne(id: number) {
    return this.answerRepository.findOne({
      relations: { survey: true, choices: true },
      where: { id },
    });
  }

  async update(id: number, updateAnswerInput: UpdateAnswerInput) {
    const answer = await this.answerRepository.findOneByOrFail({ id });
    answer.survey = await this.surveyService.findOne(updateAnswerInput.survey);
    answer.choices = await Promise.all(
      updateAnswerInput.choices.map((c) => this.choiceService.findOne(c)),
    );

    return this.answerRepository.save(answer);
  }

  async remove(id: number) {
    const answer = await this.answerRepository.findOneByOrFail({ id });
    await this.answerRepository.delete(id);
    return answer;
  }
}
