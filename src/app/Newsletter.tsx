import Nav from "./Nav";
import Poems from "./Poems";

export default function Home() {
  return (
    <div className="bg-[#423E3A]">
      <Nav />
      <main className="flex flex-wrap min-h-screen min-w-full">
        <Poems />
      </main>
    </div>
  );
}
