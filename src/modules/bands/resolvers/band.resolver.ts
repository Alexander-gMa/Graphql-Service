import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { BandService } from '../services/band.service';
import { CreateBandInput, UpdateBandInput } from 'src/graphql';

@Resolver('Band')
export class BandResolver {
    constructor(private bandService: BandService) { }

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

}
