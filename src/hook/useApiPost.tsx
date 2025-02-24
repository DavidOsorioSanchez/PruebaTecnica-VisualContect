"use client";

import axios from 'axios';


const useApiPost = async({ urlResponse = "", information = {} }: { urlResponse: string, information: Object}) => {

    try {
        const response = await axios.post(urlResponse, information);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
    ;
};

export default useApiPost;