import Link from "next/link";
import RemoveBtn from "@/components/RemoveBtn"
import {HiPencilAlt} from 'react-icons/hi'
export default function topicsList() {
    return (
       
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
            <div>
            <h2 className="font-bold">Topic title</h2>
        <div>description</div>
        </div>
        <div>
           <RemoveBtn /> 
           <Link href={"edit/123"}>
           <HiPencilAlt size={24}/>
           </Link>
           </div>
        </div>
    );
}