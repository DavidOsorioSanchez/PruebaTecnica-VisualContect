"use client";

import useApiDelete from "@/hook/useApiDelete";
import useApiGetAll from "@/hook/useApiGetAll";
import { Button } from "@mui/material";

export default function TablaCliente(){
    const dataURLCliente: string = process.env.DATA_URL_CLIENTE || "";
    const { data, loading, error } = useApiGetAll({urlRequest: dataURLCliente });


    
    const agentData = Array.isArray(data) ? data : [];
    const handleDelete = async (id: number) => {
        useApiDelete({urlResponse: dataURLCliente, id: id});
    };
    return (
        <tbody>
            {agentData.map((user: any) => (
                    <tr className="h-12 border-black/20 border-b-[0.5px] transition-all hover:bg-black/5" key={user.id}>
                        <td className="px-3 text-lg">{user.nombre}</td>
                        <td className="px-3">{user.tiempo}</td>
                        <td className="px-3"><Button variant="outlined" color="error" onClick={async () => await handleDelete(user.id)}>Eliminar</Button></td>
                    </tr>
                ))
            }
        </tbody>
    );
}