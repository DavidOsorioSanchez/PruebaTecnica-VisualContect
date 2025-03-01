"use client";
import useApiPost from '@/hook/useApiPost';
import axios from 'axios';
import { use, useEffect, useRef, useState } from 'react';

export default function FormularioCliente(){
    const [generatedTime, setGeneratedTime] = useState(String);
    const inputRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    
    useEffect(()=>{
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
    // 2025-12-24T23:21:49.618	ejemplo

        setGeneratedTime(`${year}-${month}-${day}T${hours}:${minutes}`);
    },[])
    

    
    const handleSubmit = async () => {
        const nombre: string = inputRef.current?.value || "";
        const fecha: string = dateRef.current?.value || "";

        // useApiPost({urlResponse: "http://localhost:5000/api/Cliente" /*process.env.DATA_URL_CLIENTE || ""*/, information: {nombre, tiempo}});
        try {
            const response = await axios.post("http://localhost:5000/api/Cliente", {
                nombre: nombre,
                fecha: fecha
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.warn('Error:', error);
        };
        
    };

    return(
        <form className="flex flex-col w-9/12" onSubmit={handleSubmit}>
            <label htmlFor="nombre" className="text-lg">Nombre:</label>
            <input ref={inputRef} type="text" id="nombre" className="w-full p-2 mb-2 border border-black/50 rounded-md" required/>
            <label htmlFor="tiempo" className="text-lg">Tiempo:</label>
            <input type="datetime-local" ref={dateRef} defaultValue={generatedTime} id="tiempo" className="w-full p-2 mb-2 border border-black/50 rounded-md" required/>
            <button type="submit"  className="w-full p-2 bg-indigo-600/90 text-white rounded-md">Agregar</button>
        </form>
    )
}