import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerResolver } from './answer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from 'src/entities/answer.entity';
import { SurveyModule } from '../survey/survey.module';
import { ChoiceModule } from '../choice/choice.module';

@Module({
  imports: [TypeOrmModule.forFeature([Answer]), SurveyModule, ChoiceModule],
  providers: [AnswerResolver, AnswerService],
})
export class AnswerModule {}
