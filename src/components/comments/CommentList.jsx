import React , {useState, useEffect} from 'react'
import Comment from "./Comment"

const CommentList = () => {

const [title , setTitle] = useState("")
const [commentText , setCommentText] = useState("")
const [comments , setComments] = useState([])



const commentsArr = 
    [{
        title : "Nelson Mandela",
        commentText : "The greatest glory in living lies not in never falling, but in rising every time we fall."

    },
    { 
        title : "Lao Tzu",
        commentText : "The journey of a thousand miles begins with one step."

    }
    ]
    const getComments = (commentsArr) => {setComments(commentsArr)}


    const handleClick = (e) => {
        e.preventDefault();
        let userComment = {
            title : title,
            commentText : commentText
    
        }
        commentsArr.push(userComment);
        getComments(commentsArr);
    }

    const handleDelete = (val) => {

       let filteredArr =  commentsArr.filter(comment => comment.commentText !==val)
       getComments(filteredArr);
    

    }



    useEffect(()=>{
        getComments(commentsArr)
    },[ ])


    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 container"  >
            <h3 className="fw-normal mb-5 px-5  fs-1">Comments</h3>

            {
                comments?comments.map((comment,idx) => {
                    return  <Comment title={comment.title} commentText={comment.commentText} key={idx} handleDelete = {handleDelete}/>
                }):<p>Yorum bulunmamakta</p>
            }



           
            
            
            <form className="d-flex flex-column w-100 mt-5">
            <input type="text" placeholder="Nickname" className="mb-2 form-control col-12" onChange={(e)=>{setTitle(e.target.value)}} />
            <textarea className="mb-4 form-control" name="comment" id="comment col-12"  placeholder="Leave a comment..." onChange={(e)=>{setCommentText(e.target.value)}}></textarea>
            <button type="submit" className="btn btn-primary" onClick={handleClick} >Send</button>
        
        </form>
        </div>
    )
}

export default CommentList