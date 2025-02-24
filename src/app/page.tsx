import Footer from "@comp/UI/Footer";
import TarjetaPrincipal from "@comp/Main/TarjetaPrincipal";
import Agregar from "@/components/UI/Agregar";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <main className="w-screen h-screen flex items-start justify-center py-12 ">
        <div className="w-10/12 relative flex flex-col gap-10 p-8 border-solid border-slate-900/20 border-[0.5px] rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold animate-fadeIn">Pagina de agentes</h1>
          <TarjetaPrincipal Pagina="Cliente"/>
          <footer className="absolute bottom-1 right-4"><Link href="/clientes" className="text-base text-black/50 underline transition-all cursor-pointer hover:text-blue-600">Eres un agente?</Link></footer>
        </div>
      </main>
      <Agregar Pagina="Agente" titulo="Paginas de agentes."/>
      <Footer />
    </>
    
  );
}
