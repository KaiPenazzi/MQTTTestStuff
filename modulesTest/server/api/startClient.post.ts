
export default defineEventHandler(async (event) => {
    const device = await readBody(event)

    //console.log(device);

    broker.addClient({
        id: device.id,
        username: device.username + "",
        device_id: device.device_id + "",
        key: device.key + ""
    })
})