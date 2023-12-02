import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './utils/database/database.module';
import { GraphqlModule } from './utils/graphql/graphql.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [DatabaseModule, GraphqlModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
