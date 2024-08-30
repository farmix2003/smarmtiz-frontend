import axios from 'axios'

export default axios.create({
    baseURL: 'https://smartmiz-backend.onrender.com',
    // baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})

