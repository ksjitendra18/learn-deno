import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <main class="bg-[#0f0f0f] text-[#f0f0f0]  flex flex-col justify-center items-center w-[100vw] h-[100vh]">
        <h2 className="text-3xl font-bold">Todos App</h2>

        <a
          href="/todos"
          class="bg-transparent border-2 border-white rounded-xl mt-5 px-5 py-2"
        >
          Create Todos
        </a>
      </main>
    </>
  );
}
