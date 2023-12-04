import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Survey } from './survey.entity';
import { Choice } from './choice.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Question {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Survey, (survey) => survey.questions, {
    onDelete: 'CASCADE',
  })
  @Field(() => Survey)
  survey: Survey;

  @Column()
  @Field()
  content: string;

  @OneToMany(() => Choice, (choice) => choice.question, { cascade: true })
  @Field(() => [Choice])
  choices: Choice[];
}
