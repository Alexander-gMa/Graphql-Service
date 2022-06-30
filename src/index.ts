import { ApolloServer } from 'apollo-server';
import { envConfig } from './common/config';
import TracksApi from './modules/tracks/services/track.service';

import TracksResolver from './modules/tracks/resolvers/track.resolver';

import TracksQL from './modules/tracks/schemas/track'
import AlbumQL from './modules/albums/schemas/album'
import ArtistQl from './modules/artists/schemas/artist'
import BandQL from './modules/bands/schemas/band'
import FavouritesQL from './modules/favourites/schemas/favourites'
import GenreQL from './modules/genres/schemas/genres'
import MemberQL from './modules/members/schemas/members'

const port = envConfig.APOLLO_PORT;

const datasource = {
    tracksApi: new TracksApi(),
}

const resolvers = [TracksResolver];

const typeDefs = [TracksQL, AlbumQL, ArtistQl, BandQL, FavouritesQL, GenreQL, MemberQL]

const server = new ApolloServer({
    csrfPrevention: true,
    dataSources: () => datasource,
    resolvers,
    typeDefs,
});

// The `listen` method launches a web server.
server.listen(port, () => {
    console.info(`Apollo server running on ${port} port`);
});