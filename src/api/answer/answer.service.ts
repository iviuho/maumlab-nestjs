import { Injectable } from '@nestjs/common';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from 'src/entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  create(createAnswerInput: CreateAnswerInput) {
    return this.answerRepository.save(createAnswerInput);
  }

  findAll() {
    return this.answerRepository.find();
  }

  findOne(id: number) {
    return this.answerRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateAnswerInput: UpdateAnswerInput) {
    const answer = await this.answerRepository.findOneByOrFail({ id });
    return this.answerRepository.save({ ...answer, ...updateAnswerInput });
  }

  async remove(id: number) {
    const answer = await this.answerRepository.findOneByOrFail({ id });
    await this.answerRepository.delete(id);
    return answer;
  }
}
