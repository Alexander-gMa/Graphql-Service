import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { UserInput, UserResponse } from '../schemas/user.interface';

@Injectable()
export class UsersService {
    private userInstance: AxiosInstance;

    constructor() {
        this.userInstance = axios.create({ baseURL: process.env.USERS_URL });
    }

    async register(user: UserInput) {
        const res = await this.userInstance.post<UserResponse>(`/register`, user);

        return res.data;
    }

    async getById(id: string) {
        const res = await this.userInstance.get(`/${id}`);

        return res.data;
    }

    async login(email: string, password: string) {
        const res = await this.userInstance.post<{ jwt: string }>(`/login`, {
            email,
            password,
        });

        return res.data.jwt;
    }
}
