import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { UsersModule } from './modules/users/user.module';
import { ArtistModule } from './modules/artists/artist.module';
import { BandModule } from './modules/bands/band.module';
import { GenreModule } from './modules/genres/genre.module';
import { TrackModule } from './modules/tracks/track.module';
import { AlbumModule } from './modules/albums/album.module';
import { FavouriteModule } from './modules/favourites/favourite.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./*/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }: IReq) => {
        const token = req.headers.authorization || '';
        return { token };
      },
    }),
    UsersModule,
    ArtistModule,
    BandModule,
    GenreModule,
    TrackModule,
    AlbumModule,
    FavouriteModule,
  ],
})
export class AppModule { }
