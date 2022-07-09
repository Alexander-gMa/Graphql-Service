import { Module } from '@nestjs/common';
import { AlbumService } from '../albums/services/album.service';
import { ArtistService } from '../artists/services/artist.service';
import { BandService } from '../bands/services/band.service';
import { GenreService } from '../genres/services/genre.service';
import { TrackResolver } from './resolvers/track.resolver';
import { TrackService } from './services/track.service';

@Module({
    providers: [
        TrackService,
        TrackResolver,
        AlbumService,
        ArtistService,
        BandService,
        GenreService
    ],
})
export class TrackModule { }