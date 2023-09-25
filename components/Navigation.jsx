import Link from "next/link";

export default function Navigation() {
  return (
    <div className="py-4 mx-4 border-b-2 flex flex-wrap border-black justify-between">
      <div className="font-bold">
        <Link href="/">Positive Futures</Link>
      </div>

      <div className="flex flex-wrap">
        <div className="">
          <Link href="/stories">Stories</Link>
        </div>
        <div className="pl-4">
          <Link href="/poems">Poems</Link>
        </div>
        <div className="pl-4">
          <Link href="https://madefor.earth/about">
            About <span className="font-mono">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
