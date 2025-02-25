"use client";

import useApiDelete from "@/hook/useApiDelete";
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import React from "react";
import { useState } from "react";

interface ParametrosGetCliente {
    id: number;
    nombre: string;
    estado: Status;
}

enum Status {
    Disponible = 0,
    EnLlamada = 1,
    Ocupado = 2,
    Inactivo = 3
}

export default function TablaAgente() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const dataURLAgente: string = process.env.DATA_URL_AGENTE || "";
    const dataURLAgente: string = "https://localhost:7001/api/Agente";


    const fetchPosts = async () => {
        try {
            const response = await axios.get(dataURLAgente);
            setData(response.data);
        } catch (error) {
            console.warn("Se a precentado el error: " + error);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchPosts();
    }, [])

    const handleActualizador = () => {
        fetchPosts();
    }

    const handleDelete = async (id: number) => {
        useApiDelete({ urlResponse: dataURLAgente, id: id });
        handleActualizador();
    };

    if (loading) return (
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
            {((data.length > 0) == true) ? (data.map((user: ParametrosGetCliente) => (
                <tr className="h-12 border-black/20 border-b-[0.5px] transition-all animate-fadeIn hover:bg-black/5" key={user.id}>
                    <td className="px-3 text-lg">{user.nombre}</td>
                    <td className="px-3"><p className={`w-fit min-w-24 text-center text-white ${user.estado == 0 ? "bg-green-600" : user.estado == 1 ? "bg-red-600" : user.estado == 2 ? "bg-yellow-600" : "bg-gray-600"} rounded-full px-2 py-1`}>{Status[user.estado]}</p></td>
                    <td className="px-3"><Button variant="outlined" color="error" onClick={async () => await handleDelete(user.id)}>Eliminar</Button></td>
                </tr>
            ))) : (
                <tr className="h-12 border-black/20 border-b-[0.5px] transition-all hover:bg-black/5">
                    <td colSpan={3} className="text-center">No hay datos</td>
                </tr>
            )}
        </tbody>
    );
}

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
