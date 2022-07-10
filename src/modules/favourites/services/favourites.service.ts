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
}