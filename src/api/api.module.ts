import { Module } from '@nestjs/common';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { ChoiceModule } from './choice/choice.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [SurveyModule, QuestionModule, ChoiceModule, AnswerModule],
})
export class ApiModule {}
