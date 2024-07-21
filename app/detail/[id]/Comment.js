'use client'

import {useEffect, useState} from "react";

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

    useEffect(()=>{
        fetch(`/api/comment/list?id=${props._id}`).then(r=>r.json())
            .then((result)=>{
                setData(result)
            })

    },[])
    return (
        <div>
            <div>댓글목록</div>
            <div>
                {data.length > 0 ? (
                    data.map((item, idx) => (
                        <p key={idx}>{item.content}</p>
                    ))
                ) : (
                    <p>No comments found.</p>
                )}
            </div>
            <input onChange={(e)=>{ setComment(e.target.value) }}/>
            <button onClick={()=>{
                console.log(comment)
                fetch('/api/comment/new', {
                    method: 'POST',
                    body : JSON.stringify({
                        comment: comment,
                        _id: props._id})
                })
            }}>댓글전송</button>
        </div>
    )
}