import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';
import { BandService } from '../services/band.service';



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

}
