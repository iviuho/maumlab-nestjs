import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Survey {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  extraMessage?: string;

  @OneToMany(() => Question, (question) => question.survey, { cascade: true })
  @Field(() => [Question])
  questions: Question[];
}
