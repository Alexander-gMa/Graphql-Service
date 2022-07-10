import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';


@Injectable()
export class FavouriteService {
    private favouriteInstance: AxiosInstance;

    constructor() {
        this.favouriteInstance = axios.create({ baseURL: 'http://localhost:3007/v1/favourites' });
    }

    async getAllFavourites(token) {
        const res = await this.favouriteInstance.get('/', {
            headers: {
                Authorization: token,
            },
        })
        console.log(res);
        return res.data
    }

    async add(type: string, id: string, token: any) {
        const res = await this.favouriteInstance.put(`/add`,
            { type: type, id },
            {
                headers: {
                    Authorization: token,
                },
            },
        );
        return res.data
    }

    async remove(type: string, id: string, token: any) {
        const res = await this.favouriteInstance.put(`/remove`,
            { type: type, id },
            {
                headers: {
                    Authorization: token,
                },
            },
        );
        return res.data
    }

}