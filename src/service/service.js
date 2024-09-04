'use server';
import axios from './api'; // Ensure axios is properly configured with base URL

const loginReq = async (username, password) => {
    try {
        const response = await axios.post('/login', { username, password });
        return response.data; // Assuming the backend sends back the token
    } catch (error) {
        // Better error handling for debugging
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Backend returned an error:', error.response.data);
            throw new Error(`Login failed: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            throw new Error('Login failed: No response from server');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
            throw new Error('Login failed: Error setting up request');
        }
    }
};
const getPrices = async () => {
    try {
        const response = await axios.get('/prices');
        return response.data; // Assuming the backend sends back the prices
    } catch (error) {
        // Better error handling for debugging
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Backend returned an error:', error.response.data);
            throw new Error(`Failed to fetch prices: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            throw new Error('Failed to fetch prices: No response from server');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request')
        }
    }
}
const addNewCourse = async (courseName, coursePrice, courseTime, courseType, imageLink) => {
    try {
        const res = await axios.post('/prices', {
            courseName,
            coursePrice,
            courseTime,
            courseType,
            image: imageLink,
        });
        return res.data;
    } catch (error) {
        // Improved error handling for better debugging
        if (error.response) {
            console.error('Backend returned an error:', error.response.data);
            throw new Error(`Failed to save course: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('Failed to save course: No response from server');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
};

const updateCourseDetails = async (id,
    updatedCourseName,
    updatedCoursePrice,
    updatedCourseTime,
    updatedCourseImage,
    updatedCourseType) => {
    try {
        const res = await axios.put(`/prices/${id}`, {
            courseName: updatedCourseName,
            coursePrice: updatedCoursePrice,
            courseTime: updatedCourseTime,
            courseType: updatedCourseType,
            image: updatedCourseImage,
        });
        return res.data;
    } catch (error) {
        // Improved error handling for better debugging
        if (error.response) {
            console.error('Backend returned an error:', error.response.data);
            throw new Error(`Failed to update course: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('Failed to update course: No response from server');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
}

const deleteCourse = async (id) => {
    try {
        await axios.delete(`/prices/${id}`);
        return "Course deleted successfully";
    } catch (error) {
        // Improved error handling for better debugging
        if (error.response) {
            console.error('Backend returned an error:', error.response.data);
            throw new Error(`Failed to delete course: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('Failed to delete course: No response from server');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
}
const findById = (id) => {
    try {
        const response = axios.get(`/prices/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed to find course:', error.message);
        throw new Error('Failed to find course');
    }
}

export { loginReq, getPrices, addNewCourse, updateCourseDetails, deleteCourse, findById };
