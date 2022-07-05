import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';
import { ArtistService } from '../services/artist.service';


@Resolver('Artist')
export class ArtistResolver {
    constructor(private artistService: ArtistService) { }

    @Query('artists')
    async getAllArtist(@Args('limit') limit: number, @Args('offset') offset: number) {
        return this.artistService.getAllArtist(limit, offset);
    }

    @Query('artist')
    async getArtistByID(@Args('id') id: string) {
        return this.artistService.getArtistByID(id);
    }

}
