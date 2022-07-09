import { Args, Mutation, Resolver, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { TrackService } from '../services/track.service';
import { CreateTrackInput, UpdateTrackInput } from 'src/graphql';

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

    @Mutation('createTrack')
    async create(
        @Args('track') track: CreateTrackInput,
        @Context('token') token: string,) {
        return await this.trackService.createTrack(token, track);
    }

    @Mutation('updateTrack')
    async update(
        @Args('id') id: string,
        @Args('track') track: UpdateTrackInput,
        @Context('token') token: string,) {
        return await this.trackService.updateTrack(id, token, track);
    }

    @Mutation('deleteTrack')
    async delete(
        @Args('id') id: string,
        @Context('token') token: string,) {
        return await this.trackService.deleteTrack(id, token);
    }

    @ResolveField()
    async id(@Parent() track): Promise<string> {
      return track._id;
    }

}
