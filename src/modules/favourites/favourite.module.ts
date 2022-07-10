import { Module } from '@nestjs/common';
import { FavouriteResolver } from './resolvers/favourite.resolve';
import { FavouriteService } from './services/favourites.service';

@Module({
    providers: [FavouriteService, FavouriteResolver],
})
export class FavouriteModule { }