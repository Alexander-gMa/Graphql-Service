import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { BandService } from '../services/band.service';
import { CreateBandInput, MemberInput, UpdateBandInput } from 'src/graphql';
import { GenreService } from 'src/modules/genres/services/genre.service';
import { ArtistService } from 'src/modules/artists/services/artist.service';

@Resolver('Band')
export class BandResolver {
    constructor(
        private bandService: BandService,
        private genreService: GenreService,
        private artistService: ArtistService) { }

    @Query('bands')
    async getAllBand(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.bandService.getAllBands(limit, offset);
    }

    @Query('band')
    async getBandByID(@Args('id') id: string) {
        return this.bandService.getBandByID(id);
    }

    @Mutation('createBand')
    async create(
        @Args('band') band: CreateBandInput,
        @Context('token') token: string,) {
        return await this.bandService.createBand(token, band);

    }

    @Mutation('updateBand')
    async update(
        @Args('id') id: string,
        @Args('band') band: UpdateBandInput,
        @Context('token') token: string,) {
        return await this.bandService.updateBand(id, token, band);
    }

    @Mutation('deleteBand')
    async delete(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return await this.bandService.deleteBand(id, token);
    }

    @ResolveField()
    async id(@Parent() band): Promise<string> {
        return band._id;
    }

    @Resolver()
    @ResolveField()
    async genres(
        @Parent() band,
    ) {
        const { genresIds } = band;
        if (!genresIds) return null;
        const filter = genresIds.filter((el) => el !== 123)
        return await Promise.all(filter.map((id) => this.genreService.getGenreByID(id)));
    }

    @ResolveField()
    async members(
        @Parent() band,
    ) {
        const { members } = band;
        if(!members.artistId) return [];
        return (
            await Promise.all(
                members.map((member: MemberInput) => this.artistService.getArtistByID(member.artistId)),
            )
        ).map((artist, i) => {
            return {
                ...artist,
                instrument: members[i].instrument,
                years: members[i].years,
                id: members[i].artist,
            }
        });
    }

}
