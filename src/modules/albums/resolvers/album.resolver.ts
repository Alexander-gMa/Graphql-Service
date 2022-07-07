import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';
import { AlbumService } from '../services/album.service';


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

}
