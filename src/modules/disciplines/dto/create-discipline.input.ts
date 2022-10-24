import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDisciplineInput {
  @Field({ nullable: true })
  name: string;
}
