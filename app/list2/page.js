import {connectDB} from "../../util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export const revalidate = 60
export const dynamic = 'force-dynamic'

export default  async function List() {
    const db = (await connectDB).db('forum');
    const posts = await db.collection('post').find().toArray();

    let result;
    result = [...posts]

    return (
        <div className="list-bg">
           <ListItem result={result}/>
        </div>
    );
}