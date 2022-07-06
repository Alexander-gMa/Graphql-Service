import { Module } from '@nestjs/common';
import { BandResolver } from './resolvers/band.resolver';
import { BandService } from './services/band.service';

@Module({
    providers: [BandService, BandResolver],
})
export class BandModule { }