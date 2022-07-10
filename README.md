
**How to run microservices read [Readme.md](https://github.com/rolling-scopes-school/node-graphql-service/blob/main/README.md)**

**Connect to GraphQL (dev mode):** `http://localhost:3000/graphql`

## Installation service
1. Clone [this project](https://github.com/Alexander-gMa/Graphql-Service/tree/develop)
2. Move to `develop` branch
3. Enter `npm install` in terminal

## Running service
1. Enter `npm run start` in terminal to start service
2. Open playground by url `http://localhost:PORT/graphql`, where `PORT` is a number which you enter in `.env` (by default is `3000`)

## Queries list
<details>
    <summary>Show queries</summary>
    <ul>
        <li>artist</li>
        <li>artists</li>
        <li>genre</li>
        <li>genres</li>
        <li>track</li>
        <li>tracks</li>
        <li>band</li>
        <li>bands</li>
        <li>album</li>
        <li>albums</li>
        <li>jwt</li>
        <li>user</li>
        <li>favourites (available only for logged in user)</li>
    </ul>
</details>

## Mutations list
<details>
    <summary>Show mutations</summary>
    <ul>
        <li>Artists
            <ul>
                <li>createArtist</li>
                <li>deleteArtist</li>
                <li>updateArtist</li>
            </ul>
        </li>
        <li>Genres
            <ul>
                <li>createGenre</li>
                <li>deleteGenre</li>
                <li>updateGenre</li>
            </ul>
        </li>
        <li>Bands
            <ul>
                <li>createBand</li>
                <li>deleteBand</li>
                <li>updateBand</li>
            </ul>
        </li>
        <li>Tracks
            <ul>
                <li>createTrack</li>
                <li>deleteTrack</li>
                <li>updateTrack</li>
            </ul>
        </li>
        <li>Albums
            <ul>
                <li>createAlbum</li>
                <li>deleteAlbum</li>
                <li>updateAlbum</li>
            </ul>
        </li>
        <li>Users
            <ul>
                <li>register</li>
            </ul>
        </li>
        <li>Favourites
            <ul>
                <li>addTrackToFavourites</li>
                <li>addBandToFavourites</li>
                <li>addArtistToFavourites</li>
                <li>addGenreToFavourites</li>
            </ul>
        </li>
    </ul>
</details>

## Requests example

1. Get all artists 
```graphql
query {
    artists(limit: 10, offset: 0) {
        items {
            id
            firstName
            secondName
            country
            bands {
                id
                name
                genres {
                    id
                    country
                    description
                    year
                }
            }
        }
    }
}
```
2. Get one album by `id`
```graphql
query {
    album(id: "id") {
        name
        released
        tracks {
            id
            title
            duration
        }
    }
}
```
3. Register new user 
```graphql
mutation {
    register(
        firstName: "firstname", 
        lastName: "lastname", 
        email: "email@mail.com",
        password: "password"
    ) {
        id
        firstName
        lastName
        email
    }
}
```

4. Get JWT
```graphql
query {
    jwt(
        email: "email@mail.com", 
        password: "password"
    ) {
        jwt
    }
}
```

5. Create artist



```graphql
mutation {
    createArtist(
        newArtist: {
            firstName: "firstName"
            secondName: "secondName"
            country: "country"
            bandsIds: ["id1", "id2"]
        }) {
        id
        firstName
        secondName
        bands {
            id
        }
    }
}
```
P.S. 
**Note!** Enter authorization header for all mutations except register

```json
{
  "headers": {
    "authorization": "Bearer JWT"
  }
}
```
