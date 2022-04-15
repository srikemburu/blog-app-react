// Delete a blog
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneBlog, deleteBlog } from '../services/blogs-api'

export default function DeleteBlog() {
    const nav = useNavigate()
    const { id } = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {getOneBlog(id)
        .then (res => res.json())
        .then (res => setBlog(res))
    },[])

    const deleteTheBlog = () => {
        deleteBlog(id)
        nav('/')
    }

    return(
        <div>
            <h1> Blog: </h1>
            <h3>{blog.title}</h3>
            <button onClick={deleteTheBlog}>Delete</button>
        </div>
    )
}