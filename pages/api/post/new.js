import {connectDB} from "../../../util/database";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    if( session ){
        req.body.author = session.user.email
    }
    console.log(req.body)

    if (req.method === 'POST') {
        console.log(req.body)

        const reqBody = req.body

        if(reqBody.title === ''){
            return res.status(500).json('너 제목 왜 안씀')
        }
        const db = (await connectDB).db('forum');
        let result = await db.collection('post').insertOne(req.body)

        return res.status(200).redirect("/list")
    }

}