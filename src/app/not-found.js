import Link from "next/link";

export default function notFound(){
    return (
        <div>
        <h1 className="">Not found this page does not exist</h1>
        <Link href={'/'}>Home</Link>
        </div>
        

    )
}