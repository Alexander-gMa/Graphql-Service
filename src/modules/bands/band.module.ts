import { Module } from '@nestjs/common';
import { GenreService } from '../genres/services/genre.service';
import { BandResolver } from './resolvers/band.resolver';
import { BandService } from './services/band.service';

@Module({
    providers: [BandService, BandResolver, GenreService],
})
export class BandModule { }