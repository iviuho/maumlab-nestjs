import { InputType, Field } from '@nestjs/graphql';
import { CreateChoiceInput } from 'src/api/choice/dto/create-choice.input';

@InputType()
export class CreateQuestionInput {
  @Field()
  content: string;

  @Field(() => [CreateChoiceInput])
  choices: CreateChoiceInput[];
}
