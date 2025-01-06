import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    const {id}=params;
    const {newTitle:title,newDescription:description}= request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({message:"updated"},{status:200})
}