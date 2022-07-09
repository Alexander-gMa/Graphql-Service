import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { AlbumService } from '../services/album.service';
import { CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';

@Resolver('Album')
export class AlbumResolver {
    constructor(private albumService: AlbumService) { }

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

}
