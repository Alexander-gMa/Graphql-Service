import { ApolloServer } from 'apollo-server';
import { envConfig } from './common/config';

const port = envConfig.APOLLO_PORT;

const server = new ApolloServer({
    csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen(port, () => {
    console.info(`Apollo server running on ${port} port`);
});