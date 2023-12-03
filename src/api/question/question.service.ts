import { Injectable } from '@nestjs/common';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entities/question.entity';
import { Repository } from 'typeorm';
import { ChoiceService } from '../choice/choice.service';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    private readonly choiceService: ChoiceService,
  ) {}

  async create(createQuestionInput: CreateQuestionInput) {
    const question = this.questionRepository.create(createQuestionInput);
    question.choices = await Promise.all(
      createQuestionInput.choices.map((c) => this.choiceService.create(c)),
    );

    return this.questionRepository.save(question);
  }

  findAll() {
    return this.questionRepository.find();
  }

  findOne(id: number) {
    return this.questionRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateQuestionInput: UpdateQuestionInput) {
    const question = await this.questionRepository.findOneByOrFail({ id });
    return this.questionRepository.save({
      ...question,
      ...updateQuestionInput,
    });
  }

  async remove(id: number) {
    const question = await this.questionRepository.findOneByOrFail({ id });
    await this.questionRepository.delete(id);
    return question;
  }
}
