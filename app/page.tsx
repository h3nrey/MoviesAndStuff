import Image from "next/image";
import { movies } from "./data";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1 className="text-[3rem] font-rennie">
        Sim Luana, eu assisti outras coisas além de animes e filmes de heróis. Tais como:
      </h1>
      <ul className="flex flex-col gap-2 mt-8">
        {movies.map((movie, i) => (
          <li 
            key={i}
            className="font-bold font-rennie text-[2rem] p-1 pl-4 bg-white text-black capitalize -rotate-6 flex"
          >
            <span className="bg-black text-white px-2 mr-4">{i + 1}</span>
            {movie}
          </li>
        ))}
        <p></p>
      </ul>
    </main>
  );
}
