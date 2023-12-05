import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field(() => ID)
  survey: number;

  @Field(() => [ID])
  choices: number[];
}
