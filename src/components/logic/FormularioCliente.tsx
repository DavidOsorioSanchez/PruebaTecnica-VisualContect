"use client";
import useApiPost from '@/hook/useApiPost';

export default function FormularioCliente(){
    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.getMonth() + 1}/${currentDateTime.getDate()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const nombre = (event.target as any).nombre.value;
        const tiempo = (event.target as any).tiempo.value;

        useApiPost({urlResponse: process.env.DATA_URL_CLIENTE || "", information: {nombre, tiempo}});
    };

    return(
        <form className="flex flex-col w-9/12">
            <label htmlFor="nombre" className="text-lg">Nombre:</label>
            <input type="text" id="nombre" className="w-full p-2 mb-2 border border-black/50 rounded-md" required/>
            <label htmlFor="tiempo" className="text-lg">Tiempo:</label>
            <input type="text" defaultValue={formattedDateTime} id="tiempo" className="w-full p-2 mb-2 border border-black/50 rounded-md" required/>
            <button type="submit" onSubmit={handleSubmit} className="w-full p-2 bg-black/50 text-white rounded-md">Agregar</button>
        </form>
    )
}