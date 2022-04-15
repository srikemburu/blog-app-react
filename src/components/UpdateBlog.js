// Update Blog
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneBlog, updateBlog } from'../services/blogs-api'

export default function UpdateBlog() {
    const { id } = useParams()
    const nav = useNavigate()
    const [blog,setBlog] = useState({})

    useEffect(() => {
        getOneBlog(id)
        .then(res => res.json())
        .then(res => setBlog(res))
    },[])

    const updateTheBlog = e => {
        e.preventDefault()
        const updatedBlog = {title: e.target.title.value, body: e.target.body.value}
        updateBlog(updatedBlog,id)
        nav(`/${id}`)
    }

    return(
        <div>
            <h1>Edit Blog</h1>
            <form onSubmit={updateTheBlog}>
                <input type='text' name='title' defaultValue={blog.title} required/><br/>
                <input type='text' name='body' defaultValue={blog.body} required/><br/>
                <input type='Submit' />
            </form>
        </div>
    )
}