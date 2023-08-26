

export default defineEventHandler(async (event) => {
    let ret = ""
    let client = broker.getClient(1)

    if (client != null && client?.latestMSG != null) {
        ret = client.latestMSG;
    }

    return ret;
})