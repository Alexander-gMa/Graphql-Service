import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArtistService {
    private artistInstance: AxiosInstance;

    constructor() {
        this.artistInstance = axios.create({ baseURL: process.env.ARTIST_URL });
    }

    async getAllArtist(limit: number, offset: number) {
        const res = await this.artistInstance.get('/', {
            params: { limit, offset }
        })

        return res.data.items
    }

    async getArtistByID(id: string) {
        const res = await this.artistInstance.get(`/${id}`)

        return res.data
    }
}
