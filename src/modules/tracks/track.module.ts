import { Module } from '@nestjs/common';
import { TrackResolver } from './resolvers/track.resolver';
import { TrackService } from './services/track.service';

@Module({
    providers: [TrackService, TrackResolver],
})
export class TrackModule { }