import TablaPrincipal from "./TablaPrincipal";

//este componente se encarga de mostrar la tabla principal
//donde se ubican los datos y se consultan para poder conectarlos con la base de datos
export default function TarjetaPrincipal() {
    return (
        <table className="mx-2 border-solid border-black/20 border-x-[0.5px] border-t-[0.5px] p-2 animate-fadeIn200">
            <thead className="border-black/20 border-b-[0.5px] ">
                <tr className="h-16 text-xl font-semibold text-black/50 p-6  transition-all hover:bg-black/10 ">
                    <th className="text-start p-2">Nombre</th>
                    <th className="text-start p-2">Estatus</th>
                    <th className="text-start p-2">Tiempo de Espera</th>
                </tr>
            </thead>
            <TablaPrincipal />
        </table>
    );
}