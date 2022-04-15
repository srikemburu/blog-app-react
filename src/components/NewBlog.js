import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../services/blogs-api'

export default function NewBlog() {
const nav = useNavigate()

const newBlog = e => {
    const blog = {title: document.querySelector('#title').value,
        body: document.querySelector('#body').value,
        cName: "",
        cMessage: ""}
        // cName: document.querySelector('#cname').value,
        // cMessage: document.querySelector('#cmsg').value}
        createBlog(blog)
        nav('/')
}

return (
    <div>
        <h1> Create Blog</h1>
        <form onSubmit={newBlog}>
            <input type='text' name='title' id='title' placeholder='Blog Title' required/><br/>
            <input type='text' name='body' id='body' placeholder='Blog Body' required/> <br/>
            {/* <input type='text' name='comments.cName' id='cname' placeholder='User Name' /> <br/>
            <input type='text' name='comments.cMessage' id='cmsg' placeholder='User Comment' /><br/>            */}
            <input type='Submit' />
        </form>
    </div>
)

}