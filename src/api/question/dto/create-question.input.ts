import { InputType, Field } from '@nestjs/graphql';
import { CreateChoiceInput } from 'src/api/choice/dto/create-choice.input';
import { Choice } from 'src/entities/choice.entity';

@InputType()
export class CreateQuestionInput {
  @Field()
  content: string;

  @Field(() => [CreateChoiceInput])
  choices: Choice[];
}
