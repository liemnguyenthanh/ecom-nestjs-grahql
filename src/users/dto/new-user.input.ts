import { Field, InputType } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @Length(6, 30)
  username: string;

  @Field()
  @Length(6, 255)
  password: string;
}