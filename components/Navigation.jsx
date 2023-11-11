import Link from "next/link";

export default function Navigation() {
  return (
    <div className="col-span-2">
      <div className="flex flex-wrap justify-between mx-1 my-2 p-4 uppercase font-medium">
        <div className="">
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
    </div>
  );
}
