"use client";

import Image from "next/image";
import Card from "./components/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import { mangoFusionPalette } from "@mui/x-charts";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  //Para acceder a informacion dentro de un contexto tenemos que crear un provider
  //Error: [next-auth]: `useSession` must be wrapped in a <SessionProvider />
  //Se necesita un componente que contenga esa informacion
  //El provider tiene que encerrar a todo, <SessionProvider><Sidebar></Sidebar>{children}<ProfileBar></ProfileBar></SessionProvider>
  return (
    <main className="flex flex-col h-screen w-full p-5 bg-slate-100 space-y-10">
      {/**<div className="text-black mt-8 flex flex-row items-start h-fit">
        <div className="h-fit mr-24 text-left self-center text-cyan-500 text-3xl font-medium">
          Hello, Jorge
          <div className="text-xl text-gray-500">
            Here you can manage your locks
          </div>
        </div>

        <input
          className="text-black rounded-full justify-self-center p-5 bg-white shadow-md"
          placeholder="Search:"
        />
  </div>*/}

      {/**<div className="flex space-x-5">
        Cards section
        <Card title={"12"} text={"Locks registered"} />
        <Card title={"81"} text={"Unlocks this week"} />
        <Card title={"12"} text={"Locks registered"} />
        <Card title={"12"} text={"Locks registered"} />
      </div>
      <div className="flex flex-col w-full items-center justify-start align-top bg-white shadow-lg rounded-lg p-5">
        <div className="text-gray-500 font-medium text-center text-2xl">
          Unlock chart
        </div>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 13, 14] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5, 2, 5, 4],
              area: true,
            },
          ]}
          width={900}
          height={600}
          colors={mangoFusionPalette}
        />
        </div>*/}
      {session?.user ? (
        <div>
          <p className="font-semibold text-gray-600">
            Hola, {session.user.name}
          </p>
          <button
            className="font-semibold text-gray-700 rounded bg-sky-600 px-3 py-2"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <p className="font-semibold text-gray-600">Log In</p>
          <button
            className="font-semibold text-gray-700 rounded bg-sky-600 px-3 py-2"
            onClick={() => signIn()}
          >
            Sign in with Google
          </button>
        </div>
      )}
    </main>
  );
}
