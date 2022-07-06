import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';
import { BandService } from '../services/band.service';



@Resolver('Band')
export class BandResolver {
    constructor(private bandService: BandService) { }

    @Query('bands')
    async getAllArtist(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.bandService.getAllBand(limit, offset);
    }

    @Query('band')
    async getArtistByID(@Args('id') id: string) {
        return this.bandService.getBandByID(id);
    }

}
