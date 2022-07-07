import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumService {
    private albumInstance: AxiosInstance;

    constructor() {
        this.albumInstance = axios.create({ baseURL: 'http://localhost:3005/v1/albums' });
    }

    async getAllAlbums(limit: number, offset: number) {
        const res = await this.albumInstance.get('/', {
            params: { limit, offset }
        })
        return res.data.items
    }

    async getAlbumByID(id: string) {
        const res = await this.albumInstance.get(`/${id}`)

        return res.data
    }
}
