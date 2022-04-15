// Get one blog from database
import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneBlog, deleteBlog } from '../services/blogs-api'
// import '../custom.css'

export default function OneBlog() {
    // Object destructuring
    const { id } = useParams()
    const nav = useNavigate()

    const [oneBlog, setOneBlog] = useState({})
    const [comments, setComments] = useState([])

    console.log("id: ", id)
    // console.log("one blog: ", OneBlog)

    useEffect(() => {
        getOneBlog(id)
        .then(res => res.json())
        .then(res => {
            setOneBlog(res)
            setComments(res.comments)
        }) 
    },[])

    console.log("oneBlog : ", oneBlog)

    const deleteTheBlog = () => {
        deleteBlog(id)
        nav('/')
    }
    console.log("comments: ", oneBlog.comments)
    return(
        <div> 
            <h3>Title: {oneBlog.title}</h3>
            <h4> {oneBlog.body}</h4>
            

            {comments.map((comment,index) => {
                return (
                    <div >
                    <h4>User Name: {comment.cName}  </h4>
                    <h4>Comment: {comment.cMessage}  </h4>
                    </div>
                )
            })}
            
            <br/>
            <button onClick={() => {nav("/")}}>Blogs Lists</button>
            <br/><br/>
            <button onClick={() => {nav(`/${id}/update`)}}>Edit</button>
            <button onClick={deleteTheBlog}>Delete</button>

        </div>
    )
}