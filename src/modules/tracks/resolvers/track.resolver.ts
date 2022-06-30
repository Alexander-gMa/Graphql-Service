
const resolvers = {
    Query: {
        async traks(limit: any, offset: any, { dataSources }: any) {
            return dataSources.tracksApi.getTracks(limit, offset);
        }
    }
}

export default resolvers;