import axios from 'axios'

export default axios.create({
    baseURL: 'https://smartmiz-2462bfd28095.herokuapp.com',
    // baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})

