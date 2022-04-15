// Get one blog from database
import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneBlog, deleteBlog } from '../services/blogs-api'
import '../custom.css'

export default function OneBlog() {
    // Object destructuring
    const { id } = useParams()
    const nav = useNavigate()

    const [oneBlog, setOneBlog] = useState({})
    const [comments, setComments] = useState([])

    const [readMore,setReadMore]=useState(false);

   

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
     const bdy = (oneBlog.body || '')
    // console.log("oneBlog body slice : ", bdy)
    //  console.log("oneBlog body slice: ", bdy.slice(1,150))

    const extraContent=<div>
    <p className="extra-content"> 
         {oneBlog.body}
    </p>
    </div>

    const lessContent=<div>
    <p className="extra-content"> 
        {bdy.slice(1,150)}
    </p>
    </div>

    const linkName=readMore?'Read Less << ':'Read More >> '



    const deleteTheBlog = () => {
        deleteBlog(id)
        nav('/')
    }
    console.log("comments: ", oneBlog.comments)
    return(
        <div> 
            <h1>Title: {oneBlog.title}</h1>
            {/* <h4> {oneBlog.body}</h4> */}

            <div className="App">
                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                {readMore && extraContent}
                {!readMore && lessContent}
              
            </div>
            

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