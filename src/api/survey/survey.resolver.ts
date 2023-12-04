import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { SurveyService } from './survey.service';
import { CreateSurveyInput } from './dto/create-survey.input';
import { UpdateSurveyInput } from './dto/update-survey.input';
import { Survey } from 'src/entities/survey.entity';
import { QuestionService } from '../question/question.service';

@Resolver(() => Survey)
export class SurveyResolver {
  constructor(
    private readonly surveyService: SurveyService,
    private readonly questionService: QuestionService,
  ) {}

  @ResolveField()
  questions(@Parent() survey: Survey) {
    const { id } = survey;
    return this.questionService.findAll({ survey: { id } });
  }

  @Mutation(() => Survey)
  createSurvey(
    @Args('createSurveyInput') createSurveyInput: CreateSurveyInput,
  ) {
    return this.surveyService.create(createSurveyInput);
  }

  @Query(() => [Survey], { name: 'surveys' })
  findAll() {
    return this.surveyService.findAll({});
  }

  @Query(() => Survey, { name: 'survey' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.surveyService.findOne(id);
  }

  @Mutation(() => Survey)
  updateSurvey(
    @Args('updateSurveyInput') updateSurveyInput: UpdateSurveyInput,
  ) {
    return this.surveyService.update(updateSurveyInput.id, updateSurveyInput);
  }

  @Mutation(() => Survey)
  removeSurvey(@Args('id', { type: () => Int }) id: number) {
    return this.surveyService.remove(id);
  }
}
