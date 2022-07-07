import { Args, Mutation, Resolver, Query, } from '@nestjs/graphql';
import { TrackService } from '../services/track.service';

@Resolver('Track')
export class TrackResolver {
    constructor(private trackService: TrackService) { }

    @Query('tracks')
    async getAllBand(
        @Args('limit', { defaultValue: 5 }) limit: number,
        @Args('offset', { defaultValue: 0 }) offset: number) {
        return this.trackService.getAllTracks(limit, offset);
    }

    @Query('track')
    async getBandByID(@Args('id') id: string) {
        return this.trackService.getTrackByID(id);
    }

}
