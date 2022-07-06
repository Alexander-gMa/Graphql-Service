import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { UserInput, UserResponse } from '../schemas/user.interface';

@Injectable()
export class UsersService {
    private userInstance: AxiosInstance;

    constructor() {
        this.userInstance = axios.create({ baseURL: 'http://localhost:3004/v1/users' });
    }

    async register(user: UserInput) {
        const res = await this.userInstance.post<UserResponse>(`/register`, user);

        return res.data;
    }

    async getById(id: string) {
        const res = await this.userInstance.get(`/${id}`);

        return res.data;
    }

    async jwt(email: string, password: string) {
        const res = await this.userInstance.post<{ jwt: string }>(`/login`, {
            email,
            password,
        });

        return res.data;
    }
}
