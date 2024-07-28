'use client'
import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Search from "@/components/search/Search";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-around gap-24 min-h-screen flex-col bg-gradient-to-b from-slate-950 to-blue-900 pt-20">
        <header className="w-full flex justify-between items-center p-6 bg-slate-950 fixed top-0 z-10">
          <h1 className="text-white font-bold text-xl select-none">Movie <span className="text-cyan-400 font-bold text-xl">Discover</span></h1>

          <div className="flex gap-4">
            <Link className="text-white no-underline text-sm md:text-lg" href='#popular'>Popular now</Link>
            <Link className="text-white no-underline text-sm md:text-lg" href='#about'>About</Link>
          </div>

          <Search/>
        </header>

        <div id="popular">
          <Banner/>
        </div>

        <div id="about">
          <About/>
        </div>
    </main>
  );
}
