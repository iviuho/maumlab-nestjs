import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Choice {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Question, (question) => question.choices, {
    onDelete: 'CASCADE',
  })
  @Field(() => Question)
  question: Question;

  @Column()
  @Field()
  content: string;

  @Column()
  @Field(() => Float)
  point: number;
}
