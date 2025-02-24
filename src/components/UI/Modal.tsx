"use client";

import FormularioAgente from "../logic/FormularioAgente";
import FormularioCliente from "../logic/FormularioCliente";

interface Props {
    isOpen: () => void;
    Pagina: "Cliente" | "Agente";
    titulo: string;
}

export default function Modal( {isOpen, Pagina}: Props){
    
    return(
        <div className="absolute top-0 left-0 z-50 w-screen h-screen transition-all animate-fadeIn">
            <button onClick={isOpen} className="Absolute top-0 left-0 z-40 w-screen h-screen bg-black/50">
                
            </button>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-lg gap-6 items-center justify-center h-auto w-2/5  p-4 bg-white/90">
                <h2 className="text-2xl">{Pagina}</h2>
                {Pagina === "Agente" &&(
                    <FormularioAgente/>
                )}
                {Pagina === "Cliente" &&(
                    <FormularioCliente/>
                )}
                
            </div>
        </div>
    );
}