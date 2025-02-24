
interface Props{
    derechos?: string;
}

export default function Footer({ derechos = "© 2025 Todos los derechos reservados"}: Props){
    return(
        <footer className="sticky bottom-0 w-full h-fit bg-black/10 flex items-center justify-evenly py-2">
            <p className="text-sm text-black/50">{derechos}</p>
        </footer>
    );
}