import { InputType, Field, ID } from '@nestjs/graphql';
import { Choice } from 'src/entities/choice.entity';
import { Survey } from 'src/entities/survey.entity';

@InputType()
export class CreateAnswerInput {
  @Field(() => ID)
  survey: Survey;

  @Field(() => [ID])
  choices: Choice[];
}
