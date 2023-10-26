import Link from "next/link";

export default function Navigation() {
  return (
    <div className="bg-dark dark:bg-light fixed top-0 left-0 right-0 z-50">
      <div className="bg-light dark:bg-dark rounded flex flex-wrap justify-between mx-1 my-2 p-4">
        <div className="font-bold uppercase">
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
