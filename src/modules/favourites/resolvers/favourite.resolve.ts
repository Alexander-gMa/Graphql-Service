import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';
import { FavouriteService } from '../services/favourites.service';


@Resolver('Favourite')
export class FavouriteResolver {
    constructor(private favouriteService: FavouriteService) { }

    @Query('favourites')
    async getAllGenre(
        @Context('token') token: string,) {
        console.log(token);
        return this.favouriteService.getAllFavourites(token);
    }
}