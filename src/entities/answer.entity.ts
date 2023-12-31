import {
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Survey } from './survey.entity';
import { Choice } from './choice.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Answer {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @ManyToOne(() => Survey)
  @Field(() => Survey)
  survey: Survey;

  @ManyToMany(() => Choice)
  @JoinTable()
  @Field(() => [Choice])
  choices: Choice[];
}
