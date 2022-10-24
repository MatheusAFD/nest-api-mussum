import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { PrimaryColumn } from 'typeorm';

@ObjectType()
export class BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  deletedAt: Date;
}
