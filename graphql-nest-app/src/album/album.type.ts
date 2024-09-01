import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Album {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field(type => Int)
  year: number;
}