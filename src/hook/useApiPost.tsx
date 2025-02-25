"use client";

import axios from 'axios';

interface useApiPostProps {
    urlResponse: string;
    information: Object;
}

const useApiPost = async({ urlResponse = "", information = {} }:useApiPostProps) => {

    try {
        const response = await axios.post(urlResponse, information);
        console.log('Response:', response.data);
    } catch (error) {
        console.warn('Error:', error);
    }
    ;
};

export default useApiPost;