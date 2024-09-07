import axios from 'axios'

export default axios.create({
    // baseURL: 'https://smartwebsite-2dd5c535c591.herokuapp.com',
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})

