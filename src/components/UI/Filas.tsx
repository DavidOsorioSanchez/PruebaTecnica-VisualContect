interface Props{
    id: number;
    nombre: string;
    estado?: "Disponible" | "En Llamada" | "Ocupado" | "Inactivo";
    tiempo: string;
    Pagina: "Cliente" | "Agente";
}

export default function Filas({id, nombre, estado, tiempo, Pagina}: Props){
    return(
        <tr className="h-12 border-black/20 border-b-[0.5px] transition-all hover:bg-black/5" key={id}>
                <td className="px-3 text-lg">{nombre}</td>
                {Pagina == "Cliente" && (<td className="px-3"><p className={`w-fit min-w-24 text-center text-white ${estado == "Disponible" ? "bg-green-600" : estado == "En Llamada" ? "bg-red-600" : estado == "Ocupado" ? "bg-yellow-600" : "bg-gray-600"} rounded-full px-2 py-1`}>{estado}</p></td>)}
                <td className="px-3">{tiempo}</td>
        </tr>
    );
}