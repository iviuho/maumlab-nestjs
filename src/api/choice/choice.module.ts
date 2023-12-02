import { Module } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { ChoiceResolver } from './choice.resolver';

@Module({
  providers: [ChoiceResolver, ChoiceService],
})
export class ChoiceModule {}
