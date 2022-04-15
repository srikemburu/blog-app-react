
import { getBlogs} from '../services/blogs-api.js'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NewBlog from './NewBlog'
import '../custom.css'

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [readMore,setReadMore]=useState(false);

    useEffect(() => {
        getBlogs()
        .then(res => res.json())
        .then(res => setBlogs(res))

    },[])

    console.log(blogs)

    
   
    const linkName=readMore?'Read Less << ':'Read More >> '

    return (
        <div>
            <h1>Blogs List</h1>
            <ul className='responsive'>
                {blogs.map((blog,index) => {
                    return (
                        <react>
                            <Link to={"/" + blog._id}>
                                <h3>Title: {blog.title}</h3>
                                

                                <h4> {blog.body}</h4>
                                {blog.comments.map((comment,index) => {
                                    return (
                                        <div className='commentGrid'>
                                        <h4>User Name: {comment.cName} </h4>
                                        <h4>comments: {comment.cMessage} </h4>
                                        </div>
                                    )
                                })}


                            </Link>
                        </react>
                    )
                })}
            </ul>
            <NewBlog />  
        </div>
    )
}



//  {/* </Link> */}

//                                 {/* const extraContent=<div>
//                                 <p className="extra-content"> {blog.body} </p>
//                                 </div> */}

//                                 {/* <div className="App">
//                                     <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
//                                     {readMore &&  blog.body}

//                                 </div> */}