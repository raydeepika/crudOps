import EditTopicForm from "@/components/EditTopicForm";

export default function EditTopic() {
    return (
        <form className="flex flex-col gap-3">
           <input className="border border-slate-500 px-8 py-2" type="text" placeholder="title"/>
           <input className="border border-slate-500 px-8 py-2" type="text" placeholder="description"/>
           <button>Update Topic</button>
        </form>
    );
}