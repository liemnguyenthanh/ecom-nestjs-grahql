import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe ' })
export class User {
  @Field(type => ID)
  _id: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  password: string;
}