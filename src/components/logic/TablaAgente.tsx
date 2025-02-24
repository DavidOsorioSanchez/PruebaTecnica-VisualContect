"use client";

import useApiDelete from "@/hook/useApiDelete";
import useApiGetAll from "@/hook/useApiGetAll";
import { Button } from "@mui/material";


export default function TablaAgente() {

    const dataURLAgente: string = process.env.DATA_URL_AGENTE || "";
    const { data, loading, error } = useApiGetAll({ urlRequest: dataURLAgente });
    const agentData = Array.isArray(data) ? data : [];
    const handleDelete = async (id: number) => {
        useApiDelete({urlResponse: dataURLAgente, id: id});
    };
    // if (loading) return(<tr>cargando...</tr>);
    // if (error) return <></>;

    return (
        <tbody>
                {agentData.map((user: any) => (
                    <tr className="h-12 border-black/20 border-b-[0.5px] transition-all hover:bg-black/5" key={user.id}>
                            <td className="px-3 text-lg">{user.nombre}</td>
                            <td className="px-3"><p className={`w-fit min-w-24 text-center text-white ${user.estado == "Disponible" ? "bg-green-600" : user.estado == "EnLlamada" ? "bg-red-600" : user.estado == "Ocupado" ? "bg-yellow-600" : "bg-gray-600"} rounded-full px-2 py-1`}>{user.estado}</p></td>
                            <td className="px-3"><Button variant="outlined" color="error" onClick={async () => await handleDelete(user.id)}>Eliminar</Button></td>
                    </tr>
                ))}
        </tbody>
    );
}