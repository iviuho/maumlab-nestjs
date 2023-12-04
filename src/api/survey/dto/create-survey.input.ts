import { InputType, Field } from '@nestjs/graphql';
import { CreateQuestionInput } from 'src/api/question/dto/create-question.input';

@InputType()
export class CreateSurveyInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  extraMessage?: string;

  @Field(() => [CreateQuestionInput])
  question: CreateQuestionInput[];
}
