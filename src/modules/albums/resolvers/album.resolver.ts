import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { AlbumService } from '../services/album.service';
import { CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';
import { ArtistService } from 'src/modules/artists/services/artist.service';
import { BandService } from 'src/modules/bands/services/band.service';
import { TrackService } from 'src/modules/tracks/services/track.service';
import { GenreService } from 'src/modules/genres/services/genre.service';

@Resolver('Album')
export class AlbumResolver {
    constructor(
        private albumService: AlbumService,
        private artistService: ArtistService,
        private bandService: BandService,
        private trackService: TrackService,
        private genreService: GenreService,
        ) { }

    @Query('albums')
    async getAllArtist(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.albumService.getAllAlbums(limit, offset);
    }

    @Query('album')
    async getArtistByID(@Args('id') id: string) {
        return this.albumService.getAlbumByID(id);
    }

    @Mutation('createAlbum')
    async create(
        @Args('album') album: CreateAlbumInput,
        @Context('token') token: string,) {
        return await this.albumService.createTrack(token, album);
    }

    @Mutation('updateAlbum')
    async update(
        @Args('id') id: string,
        @Args('album') album: UpdateAlbumInput,
        @Context('token') token: string,) {
        return await this.albumService.updateTrack(id, token, album);
    }

    @Mutation('deleteAlbum')
    async delete(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return await this.albumService.deleteTrack(id, token);
    }

    @ResolveField()
    async id(@Parent() album): Promise<string> {
        return album._id;
    }

    @Resolver()
    @ResolveField()
    async artists(
        @Parent() album,
    ) {
        return await Promise.all(album.artistsIds.map(id => this.artistService.getArtistByID(id)));
    }

    @Resolver()
    @ResolveField()
    async bands(
        @Parent() album,
    ) {
        return await Promise.all(album.bandsIds.map((id) => this.bandService.getBandByID(id)));
    }

    @Resolver()
    @ResolveField()
    async tracks(
        @Parent() album,
    ) {
        return await Promise.all(album.trackIds.map((id) => this.trackService.getTrackByID(id)));
    }

    @Resolver()
    @ResolveField()
    async genres(
        @Parent() album,
    ) {
        const { genresIds } = album;
        const filter = genresIds.filter((el)=> el!== 123)
        return await Promise.all(filter.map((id) => this.genreService.getGenreByID(id)));
    }

}
