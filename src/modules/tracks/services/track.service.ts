import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

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
}
