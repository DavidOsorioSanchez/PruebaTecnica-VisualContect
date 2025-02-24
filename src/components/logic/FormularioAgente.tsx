"use client";

import useApiPost from '@/hook/useApiPost';

export default function FormularioAgente(){

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const nombre = (event.target as any).nombre.value;
        const estado = (event.target as any).estado.value;

        useApiPost({urlResponse: process.env.DATA_URL_AGENTE || "", information: {nombre, estado}});
    };
    return(
        <form className="flex flex-col w-9/12">
            <label htmlFor="nombre" className="text-lg">Nombre:</label>
            <input type="text" id="nombre" className="w-full p-2 mb-2 border border-black/50 rounded-md" required/>
            <label htmlFor="estado" className="text-lg">Estado:</label>
            <select id="estado" className="w-full p-2 mb-2 border border-black/50 rounded-md" required>
                <option value="0">Disponible</option>
                <option value="1">En Llamada</option>
                <option value="2">Ocupado</option>
                <option value="3">Inactivo</option>
            </select>
            <button type="submit" onSubmit={handleSubmit} className="w-full p-2 bg-black/50 text-white rounded-md">Agregar</button>
        </form>
    );
}