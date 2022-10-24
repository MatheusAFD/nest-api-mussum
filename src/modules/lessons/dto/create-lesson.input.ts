import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLessonInput {
  @Field({ nullable: true })
  description: string;
}
