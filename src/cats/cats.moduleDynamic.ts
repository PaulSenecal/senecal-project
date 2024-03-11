/*This module an exmple for dynamic module who can include in this project but
not uses because no usage can be find currently*/
import { DynamicModule, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {
  static forFeature(options: { maxCats: number }): DynamicModule {
    return {
      module: CatsModule,
      providers: [{
        provide: 'MAX_CATS',
        useValue: options.maxCats,
      }],
    };
  }
}