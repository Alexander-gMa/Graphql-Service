import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { GenreService } from '../services/genre.service';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';


@Resolver('Genre')
export class GenreResolver {
    constructor(private genreService: GenreService) { }

    @Query('genres')
    async getAllGenre(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.genreService.getAllGenres(limit, offset);
    }

    @Query('genre')
    async getGenreByID(@Args('id') id: string) {
        return this.genreService.getGenreByID(id);
    }

    @Mutation('createGenre')
    async create(
        @Args('genre') genre: CreateGenreInput,
        @Context('token') token: string,) {
        return await this.genreService.createGenre(token, genre);

    }

    @Mutation('updateGenre')
    async update(
        @Args('id') id: string,
        @Args('genre') genre: UpdateGenreInput,
        @Context('token') token: string,) {
        return await this.genreService.updateGenre(id, token, genre);
    }
    
    @Mutation('deleteGenre')
    async delete(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return await this.genreService.deleteGenre(id, token);
    }
}
