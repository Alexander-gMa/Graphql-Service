import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BandService {
    private bandInstance: AxiosInstance;

    constructor() {
        this.bandInstance = axios.create({ baseURL: 'http://localhost:3003/v1/bands' });
    }

    async getAllBands(limit: number, offset: number) {
        const res = await this.bandInstance.get('/', {
            params: { limit, offset }
        })
        return res.data.items
    }

    async getBandByID(id: string) {
        const res = await this.bandInstance.get(`/${id}`)

        return res.data
    }
}
