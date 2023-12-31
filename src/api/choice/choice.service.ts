import { Injectable } from '@nestjs/common';
import { CreateChoiceInput } from './dto/create-choice.input';
import { UpdateChoiceInput } from './dto/update-choice.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Choice } from 'src/entities/choice.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectRepository(Choice)
    private readonly choiceRepository: Repository<Choice>,
  ) {}

  create(createChoiceInput: CreateChoiceInput) {
    const choice = this.choiceRepository.create(createChoiceInput);

    return this.choiceRepository.save(choice);
  }

  findAll(condition: FindOptionsWhere<Choice>) {
    return this.choiceRepository.find({
      relations: { question: true },
      where: condition,
    });
  }

  findOne(id: number) {
    return this.choiceRepository.findOne({
      relations: { question: true },
      where: { id },
    });
  }

  async update(id: number, updateChoiceInput: UpdateChoiceInput) {
    const choice = await this.choiceRepository.findOneByOrFail({ id });
    return this.choiceRepository.save({ ...choice, ...updateChoiceInput });
  }

  async remove(id: number) {
    const choice = await this.choiceRepository.findOneByOrFail({ id });
    await this.choiceRepository.delete(id);
    return choice;
  }
}
