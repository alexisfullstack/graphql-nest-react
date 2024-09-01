import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field()
  name: string;

  @Field()
  year: number;
}
