import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  key: string;
}
