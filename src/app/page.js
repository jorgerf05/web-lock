"use client";

import Image from "next/image";
import Card from "./components/Card";
import { LineChart } from "@mui/x-charts/LineChart";
import { mangoFusionPalette } from "@mui/x-charts";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full p-5 bg-slate-100 space-y-10">
      <div className="text-black mt-8 flex flex-row items-start h-fit">
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
      </div>

      <div className="flex space-x-5">
        {/*Cards section*/}
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
      </div>
    </main>
  );
}
