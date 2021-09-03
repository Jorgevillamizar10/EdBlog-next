import { useState, useEffect } from "react"
import Axios from "axios"

export default function Comments({ id }){
  const [ comments, setComments] = useState()
  const [ number, setNumber ] = useState(0)

  useEffect(() => {
    if(number > 0){
      Axios.get(`${process.env.API_BLOG}/posts/${id}/comments`)
        .then( resp => {
          setComments(resp.data)
        })
    }
  }, [number])

  if(!comments) return (
    <div>
      <a  onClick={() => setNumber(number + 1)}>Cargar comentarios</a> 
    </div>
  )
  
  return (
    <div>
      <h2>Comentarios</h2>
      {
        comments.map((auxCom) => (
          <div key={auxCom.id}>
            <h3>{auxCom.email}</h3>
            <p>{auxCom.body}</p>
          </div>
        ))
      }
    </div>
  )
}