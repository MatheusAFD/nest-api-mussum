import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  linkContent?: string;

  @Field({ nullable: true })
  lessonId?: string;
}
