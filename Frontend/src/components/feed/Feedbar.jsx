import { useContext, useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
// import {Posts} from "../../dummyData";
import "./feed.css"
import axios from "axios";
import {AuthContext} from "../../context/AuthContext"
export default function Feedbar({username}) {
  const [posts,setPosts]=useState([]);
  const {user}=useContext(AuthContext);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = username ?
         await axios.get("/posts/profile/"+username)
        : await axios.get("/posts/timeline/"+user._id);
        // console.log(res.data);
        setPosts(res.data.sort((p1,p2)=>{
          return new Date(p2.createdAt)-new Date(p1.createdAt);
        }));
      } catch (error) {
        // Handle errors here
        console.error("Error fetching posts:", error);
      }
    };
    fetchPost();
  }, [username,user._id]);  
  return (
    <div className="feedbar">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>(
        <Post key={p._id} post={p}/>
        ))}
      </div>
    </div>
  )
}
