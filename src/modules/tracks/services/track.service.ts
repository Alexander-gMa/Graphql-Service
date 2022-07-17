import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { CreateTrackInput, UpdateTrackInput } from 'src/graphql';

@Injectable()
export class TrackService {
    private trackInstance: AxiosInstance;

    constructor() {
        this.trackInstance = axios.create({ baseURL: 'http://localhost:3006/v1/tracks' });
    }

    async getAllTracks(limit: number, offset: number) {
        const res = await this.trackInstance.get('/', {
            params: { limit, offset }
        })
        return res.data.items
    }

    async getTrackByID(id: string) {
        const res = await this.trackInstance.get(`/${id}`)

        return res.data
    }

    async createTrack(token: string, input: CreateTrackInput,) {
        const res = await this.trackInstance.post(
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

    async updateTrack(id: string, token: string, input: UpdateTrackInput) {
        const res = await this.trackInstance.put(`/${id}`,
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
        const res = await this.trackInstance.delete(`/${id}`,
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data
    }
}
