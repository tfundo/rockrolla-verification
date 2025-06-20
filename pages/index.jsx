import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      <img
        src="/assets/banner-verificacion.png"
        alt="Panel de verificación Rock&Rolla"
        className="w-full max-w-4xl rounded-2xl shadow-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4 text-center text-cyan-400">Verifícate para conseguir tu rol con insignia</h1>
      <p className="text-center max-w-xl mb-6 text-gray-300">
        Al verificarte, obtendrás acceso a sorteos, contenido exclusivo y canales privados dentro del servidor <strong>Rock&Rolla</strong>.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/api/auth/discord" className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-2xl shadow">
          ✅ Verificar con Discord
        </a>
        <a href="/api/auth/twitch" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-2xl shadow">
          🟣 Verificar con Twitch
        </a>
      </div>
      <footer className="mt-12 text-gray-500 text-sm text-center">
        © 2025 Tfundo • Comunidad Rock&Rolla
      </footer>
    </div>
  );
}
