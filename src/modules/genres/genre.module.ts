import { Module } from '@nestjs/common';
import { GenreResolver } from './resolvers/genre.resolver';
import { GenreService } from './services/genre.service';

@Module({
    providers: [GenreResolver, GenreService],
})
export class GenreModule { }