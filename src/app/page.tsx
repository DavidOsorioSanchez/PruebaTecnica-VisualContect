import Footer from "@comp/UI/Footer";
import TarjetaPrincipal from "@comp/Main/TarjetaPrincipal";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen flex items-start justify-center py-12 ">
        <div className="w-10/12 flex flex-col gap-10 p-8 border-solid border-slate-900/20 border-[0.5px] rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold animate-fadeIn">Pagina de agentes</h1>
          <TarjetaPrincipal Pagina="Cliente"/>
        </div>
      </main>
      <Footer 
        url="/agente" 
        textoBoton="Eres un agente?"
      />
    </>
    
  );
}
