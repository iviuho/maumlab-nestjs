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
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Answer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @ManyToOne(() => Survey, { eager: true })
  @Field(() => Survey)
  survey: Survey;

  @ManyToMany(() => Choice, { eager: true })
  @JoinTable()
  @Field(() => [Choice])
  choices: Choice[];
}
