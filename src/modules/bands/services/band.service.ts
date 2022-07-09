import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { CreateBandInput, UpdateBandInput } from 'src/graphql';

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

    async createBand(token: string, input: CreateBandInput,) {
        const res = await this.bandInstance.post(
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

    async updateBand(id: string, token: string, input: UpdateBandInput) {
        const res = await this.bandInstance.put(`/${id}`,
            { ...input },
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data
    }

    async deleteBand(id: string, token: string) {
        const res = await this.bandInstance.delete(`/${id}`,
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data
    }
}
