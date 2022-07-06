
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateArtist {
    firstName: string;
    secondName: string;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtist {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
}

export interface UserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface Artists {
    items?: Nullable<Nullable<Artist>[]>;
}

export interface IQuery {
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Artists> | Promise<Nullable<Artists>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    regNewArtist(newArtist: CreateArtist): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateExistingArtist(id: string, artist: UpdateArtist): Nullable<Artist> | Promise<Nullable<Artist>>;
    register(user: UserInput): Nullable<User> | Promise<Nullable<User>>;
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

type Nullable<T> = T | null;
