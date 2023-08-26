const axios = require('axios');

const url = 'http://localhost:3000/api/sendData';
const text = 'x'.repeat(10000); // 1000 bytes text

async function sendData() {
  try {
    await axios.post(url, { data: text });
    console.log('Data sent successfully');
  } catch (error) {
    console.error('Error sending data:', error.message);
  }
}

// Send data every 500 milliseconds (2 times per second)
setInterval(sendData, 500);
