"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

interface Props{
    Pagina: "Cliente" | "Agente";
    titulo: string;
}

export default function Agregar({Pagina, titulo}:Props){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if(open)
            setOpen(false);
        else
            setOpen(true);

    }

    return(
        <>
            <button onClick={handleClick} className="absolute !w-fit !h-fit bottom-20 right-20 rounded-full cursor-pointer animate-fadeIn400 hover:animate-pulse" >
                <Image src="/addprofile.svg" className="object-cover aspect-square" width={60} height={60} alt="Agregar"/>
            </button>
            
            { open &&(
                <Modal isOpen={handleClick} Pagina={Pagina} titulo={titulo}/>
            )}            
        </>
    );
}