import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rock&Rolla Verificación</title>
      </Head>
      <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
        <img src="/assets/banner-verificacion.png" alt="Rock&Rolla" className="mb-8 w-80" />
        <h1 className="text-3xl font-bold mb-4">¡Verifica tu cuenta!</h1>
        <p className="text-center max-w-md mb-6">
          Para acceder a los canales y recibir tu insignia especial en Discord, verifica tu cuenta con Discord o Twitch.
        </p>
        <div className="flex gap-4">
          <a href="/api/auth/discord" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold">
            ✅ Verificar con Discord
          </a>
          <a href="/api/auth/twitch" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-bold">
            🟣 Verificar con Twitch
          </a>
        </div>
      </main>
    </>
  );
}
