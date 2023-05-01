import Link from "next/link";
export default function Nav() {
  return (
    <div className="p-2">
      <div className="p-5 bg-[#EEEDE6] rounded flex justify-between">
        <Link
          href="/"
          className="hover:underline hover:underline-offset-2 hover:decoration-2"
        >
          <span className="font-bold uppercase">Poems</span>
        </Link>
        <Link
          href="#"
          className="hover:underline hover:underline-offset-2 hover:decoration-2"
        >
          newletter
        </Link>
      </div>
    </div>
  );
}
