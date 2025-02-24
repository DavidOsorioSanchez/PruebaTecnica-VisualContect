"use client";

import axios from 'axios';


const useApiDelete = async({ urlResponse = "", id }: { urlResponse: string, id: number}) => {

    try {
        const response = await axios.delete(`${urlResponse}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
    ;
};

export default useApiDelete;