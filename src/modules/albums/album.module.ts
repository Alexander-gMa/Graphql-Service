import { Module } from '@nestjs/common';
import { ArtistService } from '../artists/services/artist.service';
import { BandService } from '../bands/services/band.service';
import { GenreService } from '../genres/services/genre.service';
import { TrackService } from '../tracks/services/track.service';
import { AlbumResolver } from './resolvers/album.resolver';
import { AlbumService } from './services/album.service';

@Module({
    providers: [AlbumService, AlbumResolver, ArtistService, BandService, TrackService, GenreService],
})
export class AlbumModule { }