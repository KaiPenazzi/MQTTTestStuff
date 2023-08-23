<script setup>

const router = useRouter()

setInterval(() => {
    router.go(0)
}, 5000)

let { data } = await useFetch("/api/getData")
let devData = JSON.parse(data.value)

let payload = devData.uplink_message.decoded_payload;


function formatDate(timestamp) {
    let date = new Date(timestamp)
    return date.toLocaleString('de')
}

</script>


<template>
    <div class="card">
        <div class="card-header">
            <h1>Device | {{ formatDate(devData.received_at) }}</h1>
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