
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbumInput {
    released?: Nullable<number>;
    image?: Nullable<string>;
    name: string;
    artistsIds?: Nullable<string[]>;
    bandsIds?: Nullable<string[]>;
    trackIds?: Nullable<string[]>;
    genresIds?: Nullable<string[]>;
}

export interface UpdateAlbumInput {
    released?: Nullable<number>;
    image?: Nullable<string>;
    name?: Nullable<string>;
    artistsIds?: Nullable<string[]>;
    bandsIds?: Nullable<string[]>;
    trackIds?: Nullable<string[]>;
    genresIds?: Nullable<string[]>;
}

export interface CreateArtistInput {
    firstName: string;
    secondName: string;
    country: string;
    instruments?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
}

export interface CreateBandInput {
    origin?: Nullable<string>;
    website?: Nullable<string>;
    name: string;
    members?: Nullable<MemberInput[]>;
    genresIds?: Nullable<string[]>;
}

export interface UpdateBandInput {
    origin?: Nullable<string>;
    website?: Nullable<string>;
    name?: Nullable<string>;
    members?: Nullable<MemberInput[]>;
    genresIds?: Nullable<string[]>;
}

export interface CreateGenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<string>;
}

export interface MemberInput {
    instrument?: Nullable<string>;
    years?: Nullable<number[]>;
    artistId: string;
}

export interface CreateTrackInput {
    title: string;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    albumId?: Nullable<string>;
    bandsIds?: Nullable<string[]>;
    artistsIds?: Nullable<string[]>;
    genresIds?: Nullable<string[]>;
}

export interface UpdateTrackInput {
    title?: Nullable<string>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    albumId?: Nullable<string>;
    bandsIds?: Nullable<string[]>;
    artistsIds?: Nullable<string[]>;
    genresIds?: Nullable<string[]>;
}

export interface UserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Album {
    _id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createAlbum(album: CreateAlbumInput): Nullable<Album> | Promise<Nullable<Album>>;
    updateAlbum(id: string, album: UpdateAlbumInput): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<DEL> | Promise<Nullable<DEL>>;
    createArtist(artist: CreateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;
    updateArtist(id: string, artist: UpdateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<DEL> | Promise<Nullable<DEL>>;
    createBand(band?: Nullable<CreateBandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, band?: Nullable<UpdateBandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DEL> | Promise<Nullable<DEL>>;
    createGenre(genre?: Nullable<CreateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    updateGenre(id: string, genre?: Nullable<UpdateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DEL> | Promise<Nullable<DEL>>;
    createTrack(track: CreateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;
    updateTrack(id: string, track: UpdateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DEL> | Promise<Nullable<DEL>>;
    register(user: UserInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    _id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface DEL {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface Band {
    _id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Genre {
    _id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}

export interface Track {
    _id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface User {
    _id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export interface JWT {
    jwt?: Nullable<string>;
}

type Nullable<T> = T | null;
