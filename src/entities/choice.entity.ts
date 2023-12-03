import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Choice {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
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
  @Field()
  point: number;
}
