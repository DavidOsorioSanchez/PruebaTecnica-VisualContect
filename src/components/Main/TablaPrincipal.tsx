

// import useApiRequest from "@/hook/useApiRequest";
import Filas from "@comp/UI/Filas";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

export default function TablaPrincipal() {

    const data = [
        {
            id: 1,
            name: "John Doe",
            status: "Activo",
            waitingTime: "5 minutes"
        },
        {
            id: 2,
            name: "Jane Doe",
            status: "Inactivo",
            waitingTime: "10 minutes"
        },
        {
            id: 3,
            name: "John Smith",
            status: "Pendiente",
            waitingTime: "15 minutes"
        }
    ];

    // const dataURL: string = process.env.DATA_URL || "";

    // if (!dataURL || dataURL === "") {
    //     throw new Error("DATA_URL is not defined");
    // }
    // const { data, loading, error } = useApiRequest({ url: dataURL });

    // if (error) return <div>Error: </div>;

    // if (loading) return(<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"><CircularProgress /></Box>);


    return (
        <tbody>
            {data && data.map((user: any) => (
                <Filas 
                    key={user.id}
                    id={user.id}
                    nombre={user.name}
                    estado={user.status}
                    tiempo={user.waitingTime}
                />
            ))}
        </tbody>
    );
}