import { User } from "@nextui-org/react";
import CommenteElement from "./comment.element";
import icon4 from "../assets/icon (4).png";
import { useEffect, useState } from "react";
import axios from "axios"

export default function CommentList() {

  const [data,setData] = useState([])
  const [User,setUser] = useState([])
  useEffect(()=>
  {
    setInterval(listecoms,30)
  },[])

  const listecoms=async()=>
  {
    const coms = await axios.get(`http://localhost:5000/api/commentaire`)
    const comment = coms.data.commentaire
    const user = coms.data.users
    console.log("Utilisateur",user)
    console.log(comment)
    setData(comment)
    setUser(user)
  }

  return (
    <div className="h-48 overflow-y-auto overflow-x-hidden bg-gray-100 px-2">
      {
        data.map((item,i)=>
        {
          return(
            <div key={i}>
              <CommenteElement img={icon4} author={`${User.username}`} comment={`${item.text}`}/>
            </div>
          )
        })
      }
    </div>
  );
}
