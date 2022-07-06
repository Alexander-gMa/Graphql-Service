import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';
import { GenreService } from '../services/genre.service';


@Resolver('Genre')
export class GenreResolver {
    constructor(private genreService: GenreService) { }

    @Query('genres')
    async getAllGenre(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.genreService.getAllGenre(limit, offset);
    }

    @Query('genre')
    async getGenreByID(@Args('id') id: string) {
        return this.genreService.getGenreByID(id);
    }

}
