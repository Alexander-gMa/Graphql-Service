import { Module } from '@nestjs/common';
import { BandService } from '../bands/services/band.service';
import { ArtistResolver } from './resolvers/artist.resolver';
import { ArtistService } from './services/artist.service';

@Module({
    providers: [ArtistService, ArtistResolver, BandService],
})
export class ArtistModule { }