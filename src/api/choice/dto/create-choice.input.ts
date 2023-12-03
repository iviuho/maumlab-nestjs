import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateChoiceInput {
  @Field()
  content: string;

  @Field(() => Float)
  point: number;
}
