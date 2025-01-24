import axios from 'axios'

export default axios.create({
    baseURL: 'https://smartmizbackend.onrender.com',
    // baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})

