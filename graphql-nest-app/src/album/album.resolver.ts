import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Album } from './album.type';
import { CreateAlbumInput } from './create-album-input.type';

@Resolver()
export class AlbumResolver {
  private albumList: Album[] = [
    { id: 1, name: 'Summer Time', year: 2023 },
    { id: 2, name: 'Infinity Space', year: 2024 },
    { id: 3, name: 'Fortune', year: 2022 },
  ];

  @Query(returns => [Album])
  albums(): Album[] {
    return this.albumList;
  }

  @Mutation(returns => Album)
  createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput): Album {
    const newAlbum = {
      id: this.albumList.length + 1,
      ...createAlbumInput,
    }

    this.albumList.push(newAlbum);

    return newAlbum;
  }
}
