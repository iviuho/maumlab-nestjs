import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from 'src/entities/answer.entity';
import { Choice } from 'src/entities/choice.entity';
import { Question } from 'src/entities/question.entity';
import { Survey } from 'src/entities/survey.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Survey, Question, Choice, Answer],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
