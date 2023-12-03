import { Module } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { ChoiceResolver } from './choice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from 'src/entities/choice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Choice])],
  exports: [ChoiceService],
  providers: [ChoiceResolver, ChoiceService],
})
export class ChoiceModule {}
