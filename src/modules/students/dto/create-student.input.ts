import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  name: String;

  @Field()
  key?: string;
}
