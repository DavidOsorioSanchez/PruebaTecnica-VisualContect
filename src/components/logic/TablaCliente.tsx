"use client";

import useApiDelete from "@/hook/useApiDelete";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface ParametrosGetCliente{
    id: number;
    nombre: string;
    fecha: string;
}

export default function TablaCliente(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const dataURLCliente: string = process.env.DATA_URL_CLIENTE || "";
    const dataURLCliente: string = "https://localhost:7001/api/Cliente";


    const fetchPosts = async () => {
        try{
            const response = await axios.get(dataURLCliente);
            setData(response.data);
        }catch (error) {
            console.warn("Se a precentado el error: " + error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchPosts();
    },[])

    const handleActualizador = () => {
        fetchPosts();
    }
    
    const handleDelete = async (id: number) => {
        useApiDelete({urlResponse: dataURLCliente, id: id});
        handleActualizador();
    };

    if (loading) return(
            <tbody>
                <tr className="h-12 border-black/20 border-b-[0.5px] ">
                    <td colSpan={3} className="flex justify-center items-center py-4">
                        <CircularProgress color="inherit" />
                    </td>
                </tr>
            </tbody>
        );

    return (
        <tbody>
            { ((data.length > 0) == true)?( data.map((show: ParametrosGetCliente) => (
                <tr className="h-12 border-black/20 border-b-[0.5px] transition-all hover:bg-black/5" key={show.id}>
                    <td className="px-3 text-lg">{show.nombre}</td>
                    <td className="px-3">{show.fecha}</td>
                    <td className="px-3"><Button variant="outlined" color="error" onClick={async () => await handleDelete(show.id)}>Eliminar</Button></td>
                </tr>
            ))):(
                <tr className="h-12 border-black/20 border-b-[0.5px] transition-all hover:bg-black/5">
                    <td colSpan={3} className="text-center">No hay datos</td>
                </tr>
            )}            
        </tbody>
    );
}