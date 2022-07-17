import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { TrackService } from '../services/track.service';
import { CreateTrackInput, UpdateTrackInput } from 'src/graphql';
import { AlbumService } from 'src/modules/albums/services/album.service';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { GenreService } from 'src/modules/genres/services/genre.service';

@Resolver('Track')
export class TrackResolver {
    constructor(
        private trackService: TrackService,
        private albumService: AlbumService,
        private artistService: ArtistService,
        private bandService: BandService,
        private genreService: GenreService,
    ) { }

    @Query('tracks')
    async getAllBand(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.trackService.getAllTracks(limit, offset);
    }

    @Query('track')
    async getBandByID(@Args('id') id: string) {
        return this.trackService.getTrackByID(id);
    }

    @Mutation('createTrack')
    async create(
        @Args('track') track: CreateTrackInput,
        @Context('token') token: string,) {
        return await this.trackService.createTrack(token, track);
    }

    @Mutation('updateTrack')
    async update(
        @Args('id') id: string,
        @Args('track') track: UpdateTrackInput,
        @Context('token') token: string,) {
        return await this.trackService.updateTrack(id, token, track);
    }

    @Mutation('deleteTrack')
    async delete(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return await this.trackService.deleteTrack(id, token);
    }

    @ResolveField()
    async id(@Parent() track): Promise<string> {
        return track._id;
    }

    @Resolver()
    @ResolveField()
    async album(
        @Parent() track,
    ) {
        if (!track.albumId) return 'no albums';
        return await this.albumService.getAlbumByID(track.albumId);
    }

    @Resolver()
    @ResolveField()
    async artists(
        @Parent() track,
    ) {
        return await Promise.all(track.artistsIds.map(id => this.artistService.getArtistByID(id)));
    }

    @Resolver()
    @ResolveField()
    async bands(
        @Parent() track,
    ) {
        return await Promise.all(track.bandsIds.map((id) => this.bandService.getBandByID(id)));
    }

    @Resolver()
    @ResolveField()
    async genres(
        @Parent() track,
    ) {
        const { genresIds } = track;
        if (!genresIds) return null;
        const filter = genresIds.filter((el) => el !== 123)
        return await Promise.all(filter.map((id) => this.genreService.getGenreByID(id)));
    }
}
