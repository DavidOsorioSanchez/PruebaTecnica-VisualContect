import TablaPrincipal from "@comp/Main/TarjetaPrincipal";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-start justify-center py-12">
      <div className="w-11/12 flex flex-col gap-10 p-8 border-solid border-slate-900/20 border-[0.5px] rounded-lg">
        <h1 className="text-3xl font-semibold animate-fadeIn">Pagina de usuarios</h1>
        <TablaPrincipal />
      </div>
    </main>
  );
}
