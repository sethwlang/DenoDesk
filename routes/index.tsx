import {Header} from "../components/Header.tsx"

export default function Home() {
  return (
    <main>
      <Header />
      <div class="flex flex-col ">
        <div class="flex flex-row w-full h-full">
          <div class="flex bg-red w-1/2 justify-center">1</div>
          <div class="flex bg-blue w-1/2 justify-center">2</div>
        </div>
        <div class="flex bg-green justify-center w-full h-full">3</div>
        <div class="flex flex-row w-full h-full ml-auto mr-auto">
          <div class="flex bg-red w-1/2 justify-center">4</div>
          <div class="flex bg-blue w-1/2 justify-center">5</div>
        </div>
      </div>
    </main>

  );
}
