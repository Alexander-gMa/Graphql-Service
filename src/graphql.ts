
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface JWT {
    jwt?: Nullable<string>;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    login(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
    abc(): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    register(user: UserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
