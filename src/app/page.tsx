import Nav from "./Nav";
import Poems from "./Poems";

export default function Home() {
  return (
    <div className="bg-[#423E3A]">
      <div className="flex flex-col h-screen justify-between">
        <Nav />
        <Poems />
      </div>
    </div>
  );
}
