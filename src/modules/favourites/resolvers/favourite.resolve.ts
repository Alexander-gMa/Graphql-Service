import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { TrackService } from 'src/modules/tracks/services/track.service';
import { FavouriteService } from '../services/favourites.service';


@Resolver('Favourites')
export class FavouriteResolver {
    constructor(
        private favouriteService: FavouriteService,
        private trackService: TrackService,
        private artistService: ArtistService,
        private bandService: BandService,
        private genreService: GenreService,
    ) { }

    @Query('favourites')
    async getAllGenre(
        @Context('token') token: string,) {
        return this.favouriteService.getAllFavourites(token);
    }

    @Resolver()
    @ResolveField()
    async tracks(@Parent() favourites) {
        const { tracksIds } = favourites;
        if (!tracksIds) return [];
        return tracksIds.map((id) => this.trackService.getTrackByID(id));
    }

    @Resolver()
    @ResolveField()
    async artists(@Parent() favourites) {
        const { artistsIds } = favourites;
        if (!artistsIds) return [];
        return artistsIds.map((id) => this.artistService.getArtistByID(id));
    }

    @Resolver()
    @ResolveField()
    async bands(@Parent() favourites) {
        const { bandsIds } = favourites;
        if (!bandsIds) return [];
        return bandsIds.map((id) => this.bandService.getBandByID(id));
    }

    @Resolver()
    @ResolveField()
    async genres(@Parent() favourites) {
        const { genresIds } = favourites;
        if (!genresIds) return [];
        return genresIds.map((id) => this.genreService.getGenreByID(id));
    }

    @Mutation('addTrackToFavourites')
    addTrackToFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.add('tracks', id, token);
    }

    @Mutation('addBandToFavourites')
    addBandToFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.add('bands', id, token);
    }

    @Mutation('addArtistToFavourites')
    addArtistToFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.add('artists', id, token);
    }

    @Mutation('addGenreToFavourites')
    addGenreToFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.add('genres', id, token);
    }
    @Mutation('removeTrackFromFavourites')
    removeTrackFromFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.remove('tracks', id, token);
    }

    @Mutation('removeBandFromFavourites')
    removeBandFromFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.remove('bands', id, token);
    }

    @Mutation('removeArtistFromFavourites')
    removeArtistFromFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.remove('artists', id, token);
    }

    @Mutation('removeGenreFromFavourites')
    removeGenreFromFavourites(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return this.favouriteService.remove('genres', id, token);
    }
}