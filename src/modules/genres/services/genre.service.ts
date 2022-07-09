import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';

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

    async createGenre(token: string, input: CreateGenreInput,) {
        const res = await this.genreInstance.post(
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

    async updateGenre(id: string, token: string, input: UpdateGenreInput) {
        const res = await this.genreInstance.put(`/${id}`,
            { ...input },
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data
    }

    async deleteGenre(id: string, token: string) {
        const res = await this.genreInstance.delete(`/${id}`,
            {
                headers: {
                    Authorization: token,
                },
            },
        );

        return res.data
    }
}
