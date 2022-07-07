import { Module } from '@nestjs/common';
import { AlbumResolver } from './resolvers/album.resolver';
import { AlbumService } from './services/album.service';

@Module({
    providers: [AlbumService, AlbumResolver],
})
export class AlbumModule { }