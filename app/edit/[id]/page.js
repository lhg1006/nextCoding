import {connectDB} from "../../../util/database";
import {ObjectId} from "mongodb";

export default async function Edit(props) {
    const db = (await connectDB).db('forum');
    const post = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});

    let postData;
    postData = post

    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={postData.title} placeholder="글제목"/>
                <input name="content" defaultValue={postData.content} placeholder="글내용"/>
                <input type={'hidden'} name="_id" defaultValue={postData._id.toString()}/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}