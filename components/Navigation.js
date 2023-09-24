import Link from "next/link";

export default function Navigation() {
  return (
    <div className="py-4 mx-4 border-b-2 flex flex-wrap border-black justify-between">
      <div className="font-bold">
        <Link href="/">Title</Link>
      </div>

      <div className="flex flex-wrap">
        <div className="">
          <Link href="/stories">Past Stories</Link>
        </div>
        <div className="pl-4">
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
