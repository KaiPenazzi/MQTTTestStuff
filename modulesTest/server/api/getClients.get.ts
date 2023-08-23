

export default defineEventHandler(async (event) => {
    let ids = [];
    
    for(let i = 0; i < broker.clients.length; i ++) {
        ids[i] = broker.clients[i].id;
    }
    
    return ids;
})