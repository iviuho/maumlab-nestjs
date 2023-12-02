import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Survey } from './survey.entity';
import { Choice } from './choice.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Question {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ManyToOne(() => Survey, (survey) => survey.questions)
  @Field(() => Survey)
  survey: Survey;

  @Column()
  @Field()
  content: string;

  @OneToMany(() => Choice, (choice) => choice.question)
  @Field(() => [Choice])
  choices: Choice[];
}
