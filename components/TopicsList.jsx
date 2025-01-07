import Link from "next/link";
import RemoveBtn from "@/components/RemoveBtn"
import {HiPencilAlt} from 'react-icons/hi'

const getTopics=async()=>{
    try{
        const res= await fetch('http://localhost:3000/api/topics',{cache:"no-store"});
    
    if(!res.ok){
        throw new Error("failed to fetch")
    }
    return res.json();
}
    catch(error){
        console.log(error)
    }
}
export default async function topicsList() {
    const {topics} = await getTopics();
    return (
       <>
       {topics.map((item)=>(
        <div key ={item._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
            <div>
            <h2 className="font-bold">{item.title}</h2>
        <div>{item.description}</div>
        </div>
        <div>
           <RemoveBtn id={item._id}/> 
           <Link href={`/editTopic/${item._id}`}>
           <HiPencilAlt size={24}/>
           </Link>
           </div>
        </div>
        ))}
        </>
    );
}