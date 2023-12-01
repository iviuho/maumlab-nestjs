import { Module } from '@nestjs/common';
import { SurveyModule } from './survey/survey.module';
import { QuestionModule } from './question/question.module';
import { ChoiceModule } from './choice/choice.module';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [SurveyModule, QuestionModule, ChoiceModule, ResponseModule],
})
export class ApiModule {}
