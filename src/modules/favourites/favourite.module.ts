import { Module } from '@nestjs/common';
import { ArtistService } from '../artists/services/artist.service';
import { BandService } from '../bands/services/band.service';
import { GenreService } from '../genres/services/genre.service';
import { TrackService } from '../tracks/services/track.service';
import { FavouriteResolver } from './resolvers/favourite.resolve';
import { FavouriteService } from './services/favourites.service';

@Module({
    providers: [
        FavouriteService,
        FavouriteResolver,
        TrackService,
        ArtistService,
        BandService,
        GenreService],
})
export class FavouriteModule { }