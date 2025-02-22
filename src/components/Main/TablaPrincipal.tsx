// import useApiRequest from "@/hook/useApiRequest";
import Filas from "@comp/UI/Filas";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import { dataURL } from "@utils/magicvalues";

interface Props{
    Pagina: "Cliente" | "Agente";
}

export default function TablaPrincipal({Pagina}:Props) {

    const data = [
        {
            // "Disponible" | "En Llamada" | "Ocupado" | "Inactivo"
            id: 1,
            name: "John Doe",
            status: "Disponible",
            waitingTime: "5 minutes"
        },
        {
            id: 2,
            name: "Jane Doe",
            status: "Ocupado",
            waitingTime: "10 minutes"
        },
        {
            id: 3,
            name: "John Smith",
            status: "En Llamada",
            waitingTime: "15 minutes"
        }
    ];

    // if(Pagina === "Cliente"){
    //     const dataURL = process.env.DATA_URL + Pagina || "";
    // }
    // if(Pagina === "Agente"){
    //     const dataURL = process.env.DATA_URL + Pagina || "";
    // }

    // if (!dataURL || dataURL === "") {
    //     throw new Error("DATA_URL is not defined");
    // }
    // const { data, loading, error } = useApiRequest({ url: dataURL });

    // if (error) return <div>Error: </div>;

    // if (loading) return(<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"><CircularProgress /></Box>);


    return (
        <tbody>
            {data && Pagina === "Cliente" ? (
                data.map((user: any) => (
                    <Filas 
                        key={user.id}
                        id={user.id}
                        nombre={user.name}
                        estado={user.status}
                        tiempo={user.waitingTime}
                        Pagina={Pagina}
                    />
                ))
            ) : data && Pagina === "Agente" ? (
                data.map((user: any) => (
                    <Filas 
                        key={user.id}
                        id={user.id}
                        nombre={user.name}
                        tiempo={user.waitingTime}
                        Pagina={Pagina}
                    />
                ))
            ):(
                <tr>
                    <td className="h-10 border-black/20 border-b-[0.5px] text-center " colSpan={3}>No hay registros</td>
                </tr>
            )}
        </tbody>
    );
}