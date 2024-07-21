import {connectDB} from "../../../util/database";
import {ObjectId} from "mongodb";
import Comment from "@/app/detail/[id]/Comment";

export default async function Detail(props) {
    const db = (await connectDB).db('forum');
    const post = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});

    let postData;
    postData = post

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{postData._id.toString()}</h4>
            <h4>{postData.title}</h4>
            <h4>{postData.content}</h4>
            <Comment _id={postData._id.toString()}/>
        </div>
    )
}