import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { UsersModule } from './modules/users/user.module';
import { ArtistModule } from './modules/artists/artist.module';
import { BandModule } from './modules/bands/band.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./*/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }) => {
        const token = req.headers.authorization || '';
        return { token, req };
      },
    }),
    UsersModule,
    ArtistModule,
    BandModule,
  ],
})
export class AppModule { }
