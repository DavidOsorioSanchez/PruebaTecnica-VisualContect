"use client";

import useApiPost from '@/hook/useApiPost';
import axios from 'axios';
import { useRef } from 'react';

enum Status {
    Disponible = 0,
    EnLlamada = 1,
    Ocupado = 2,
    Inactivo = 3
}

export default function FormularioAgente(){
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);
    const handleSubmit = async () => {
        const nombre: string = inputRef.current?.value || "";
        const estado: number = parseInt(selectRef.current?.value || "3");
        // useApiPost({urlResponse: "https://localhost:7001/api/Agente"/*process.env.DATA_URL_AGENTE || ""*/, information: {nombre, estado}});

        try {
            const response = await axios.post("https://localhost:7001/api/Agente", {
                nombre: nombre,
                estado: estado
            });
            console.log('Response:', response.data);
        } catch (error) {
            console.warn('Error:', error);
        }
        ;
    };
    return(
        <form className="flex flex-col w-9/12" onSubmit={handleSubmit} >
            <label htmlFor="nombre" className="text-lg">Nombre:</label>
            <input ref={inputRef} type="text" id="nombre" className="w-full p-2 mb-2 border border-black/50 rounded-md" required/>
            <label htmlFor="estado" className="text-lg">Estado:</label>
            <select ref={selectRef} id="estado" className="w-full p-2 mb-2 border border-black/50 rounded-md" required>
                <option value={Status.Disponible}>Disponible</option>
                <option value={Status.EnLlamada}>En Llamada</option>
                <option value={Status.Ocupado}>Ocupado</option>
                <option value={Status.Inactivo}>Inactivo</option>
            </select>
            <button type="submit" className="w-full p-2 bg-indigo-600/90 text-white rounded-md">Agregar</button>
        </form>
    );
}