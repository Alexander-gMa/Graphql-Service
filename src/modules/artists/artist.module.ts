import { Module } from '@nestjs/common';
import { ArtistResolver } from './resolvers/artist.resolver';
import { ArtistService } from './services/artist.service';

@Module({
    providers: [ArtistService, ArtistResolver],
})
export class ArtistModule { }