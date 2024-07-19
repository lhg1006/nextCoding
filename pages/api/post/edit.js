import {connectDB} from "../../../util/database";
import {ObjectId} from "mongodb";

export default async function handler(req, res){
    if(req.method === 'POST'){
        const db = (await connectDB).db('forum');
        console.log(req.body)

        let updateParam = { title: req.body.title, content: req.body.content}

        let result = await db.collection('post').updateOne(
            {_id: new ObjectId(req.body._id)},
            {$set : updateParam}
        )

        res.status(200).redirect('/list')
    }
}