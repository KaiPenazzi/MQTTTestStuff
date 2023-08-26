<script setup>

let devData = ref({
    received_at: 0,
    uplink_message: {
        decoded_payload: {}
    }
})
let payload = ref({})

const refreshData = async () => {
    let { data } = await useFetch("/api/getData")
    if (data.value != "") {
        devData.value = JSON.parse(data.value)
        payload.value = devData.value.uplink_message.decoded_payload
    }
}

function formatDate(timestamp) {
    let date = new Date(timestamp)
    return date.toLocaleString('de')
}

refreshData()

// Periodic data refresh every 5 seconds
setInterval(refreshData, 5000)

</script>


<template>
    <div class="card">
        <div class="card-header">
            <h1>Device |  {{ formatDate(devData.received_at) }}</h1>
        </div>
        <div class="card-body">
            <ul>
                <li v-for="(value, key) in payload" :key="key">
                    {{ key }}: {{ value }}
                </li>
            </ul>
        </div>
    </div>
</template>
  