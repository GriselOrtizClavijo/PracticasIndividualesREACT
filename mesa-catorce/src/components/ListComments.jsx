import React, { useEffect, useState } from 'react'
import Form from './Form'

const ListComments = () => {
    const [comments, setComments] = useState([{
        postId: '',
        id: '',
        name: '',
        email: '',
        body: '',
    }])
    const [newComments, setNewComments] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/comments'

    useEffect(() => {
        fetch(url)
            .then(response =>response.json())
            .then(data => setComments(data))
            console.log('Se montó el componente');
    }, [])


    // const handleAdd = () => {
    //     fetch(url, {
    //       method: 'POST',
    //       body: JSON.stringify(newComments),
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setNewComments([data.comments])
    //       })
         
    //     ;
    //   }

    //  useEffect(() => {
    //     handleAdd()
    // console.log('formulario enviado')
    //   }, [])

  return (
    <div >
        <h1>Listado de Comentarios</h1>
        <ul>
        {comments.map(comment => {
            return (
            <li key={comment.id}>
                <Form comment = {comment} />  
            </li>)
        })}
        </ul>
        <button /*onClick={() => {handleAdd}}*/>Enviar Comentarios</button>
    </div>
  )
}

export default ListComments