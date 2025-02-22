import TarjetaPrincipal from "@comp/Main/TarjetaPrincipal";
import Footer from "@comp/UI/Footer";

export default function Agente() {
    return (
        <>
            <main className="w-screen h-screen flex items-start justify-center py-12 ">
                <div className="w-10/12 flex flex-col gap-10 p-8 border-solid border-slate-900/20 border-[0.5px] rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold animate-fadeIn">Pagina de agentes</h1>
                    <TarjetaPrincipal Pagina="Agente"/>
                </div>
            </main>
            <Footer
                url="/"
                textoBoton="Eres un Cliente?"
            />
        </>
    );
}