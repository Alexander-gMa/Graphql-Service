import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';

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

    async createTrack(token: string, input: CreateAlbumInput,) {
        const res = await this.albumInstance.post(
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

    async updateTrack(id: string, token: string, input: UpdateAlbumInput) {
        const res = await this.albumInstance.put(`/${id}`,
            { ...input },
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data
    }

    async deleteTrack(id: string, token: string) {
        const res = await this.albumInstance.delete(`/${id}`,
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data
    }
}
