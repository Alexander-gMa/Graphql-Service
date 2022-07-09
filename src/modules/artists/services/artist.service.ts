import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { CreateArtist } from 'src/graphql';

@Injectable()
export class ArtistService {
    private artistInstance: AxiosInstance;

    constructor() {
        this.artistInstance = axios.create({ baseURL: 'http://localhost:3002/v1/artists' });
    }

    async getAllArtists(limit: number, offset: number) {
        const res = await this.artistInstance.get('/', {
            params: { limit, offset }
        })
        return res.data.items
    }

    async getArtistByID(id: string) {
        const res = await this.artistInstance.get(`/${id}`)

        return res.data
    }

    async createArtist(
        token: string,
        input: CreateArtist,
    ) {
        const res = await this.artistInstance.post(
            '/',
            { ...input },
            {
                headers: {
                    Authorization: token,
                },
            },
        );
        return res.data
    }

}
