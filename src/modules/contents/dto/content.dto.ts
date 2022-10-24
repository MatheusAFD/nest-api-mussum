import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Column } from 'typeorm';

@ObjectType('Content')
export class ContentDTO extends BaseEntity {
  @FilterableField()
  description: string;

  @FilterableField()
  linkContent: string;
}
