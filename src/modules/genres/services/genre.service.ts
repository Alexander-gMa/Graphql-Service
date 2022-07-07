import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenreService {
    private genreInstance: AxiosInstance;

    constructor() {
        this.genreInstance = axios.create({ baseURL: 'http://localhost:3001/v1/genres' });
    }

    async getAllGenres(limit: number, offset: number) {
        const res = await this.genreInstance.get('/', {
            params: { limit, offset }
        })
        return res.data.items
    }

    async getGenreByID(id: string) {
        const res = await this.genreInstance.get(`/${id}`)

        return res.data
    }
}
