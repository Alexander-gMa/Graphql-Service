import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { CreateArtistInput, UpdateArtistInput } from 'src/graphql';
import { BandService } from 'src/modules/bands/services/band.service';
import { ArtistService } from '../services/artist.service';


@Resolver('Artist')
export class ArtistResolver {
    constructor(
        private artistService: ArtistService,
        private bandService: BandService,
    ) { }

    @Query('artists')
    async getAllArtist(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.artistService.getAllArtists(limit, offset);
    }

    @Query('artist')
    async getArtistByID(@Args('id') id: string) {
        return this.artistService.getArtistByID(id);
    }

    @Mutation('createArtist')
    async create(
        @Args('artist') artist: CreateArtistInput,
        @Context('token') token: string,) {
        return await this.artistService.createArtist(token, artist);
    }

    @Mutation('updateArtist')
    async update(
        @Args('id') id: string,
        @Args('artist') artist: UpdateArtistInput,
        @Context('token') token: string,) {
        return await this.artistService.updateArtist(id, token, artist);
    }

    @Mutation('deleteArtist')
    async delete(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return await this.artistService.deleteArtist(id, token);
    }

    @ResolveField()
    async id(@Parent() artist): Promise<string> {
        return artist._id;
    }

    @Resolver()
    @ResolveField()
    async bands(
        @Parent() artist,
    ) {
        return await Promise.all(artist.bandsIds.map((id) => this.bandService.getBandByID(id)));
    }

    @ResolveField()
    async instruments(@Parent() artist): Promise<string> {
        return await artist.instruments.join(', ');
    }

}
