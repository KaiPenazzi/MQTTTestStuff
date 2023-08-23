

export default defineEventHandler(async (event) => {
    
    let client = broker.getClient(1)

    return client?.latestMSG;
})