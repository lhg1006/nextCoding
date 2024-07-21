export default function handler(req, res) {
    console.log(req.query)
    if(req.method === 'POST'){
        return res.status(200).json()
    }
}