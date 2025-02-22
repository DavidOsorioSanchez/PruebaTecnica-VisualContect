import Link from "next/link";

interface Props{
    url: string;
    textoBoton: string;
    derechos?: string;
}

export default function Footer({url, textoBoton, derechos = "© 2025 Todos los derechos reservados"}: Props){
    return(
        <footer className="absolute bottom-0 w-full h-fit bg-black/10 flex items-center justify-evenly py-2">
            <p className="text-sm text-black/50">{derechos}</p>
            <Link href={url} className="text-sm text-black/50 underline transition-all hover:text-blue-600">{textoBoton}</Link>
        </footer>
    );
}