import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/entities/question.entity';
import { ChoiceModule } from '../choice/choice.module';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), ChoiceModule],
  exports: [QuestionService],
  providers: [QuestionResolver, QuestionService],
})
export class QuestionModule {}
