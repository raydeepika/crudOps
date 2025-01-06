import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 text-white">
            <Link href="/">Home</Link>
            <Link href="/addTopic" className="bg-white p-2 text-black">Add Topic</Link>
        </nav>
    );
}