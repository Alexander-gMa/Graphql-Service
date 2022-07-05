import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';
import { ArtistService } from '../services/artist.service';


@Resolver('User')
export class ArtistResolver {
    constructor(private artistService: ArtistService) { }

    @Query('artists')
    async artists(@Args('limit') limit: number, @Args('offset') offset: number) {
        return this.artistService.getAllArtist(limit, offset);
    }

    @Query('artist')
    async artist(@Args('id') id: string) {
        return this.artistService.getArtistByID(id);
    }

}
