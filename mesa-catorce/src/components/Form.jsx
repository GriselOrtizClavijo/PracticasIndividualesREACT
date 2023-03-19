import React from 'react'

const Form = ({comment}) => {

  // const handleChange = (event) => {
  //   const { postId, value } = event.target
  //   setComments((prevComment) => ({ ...prevComment, [postId]: value }))
  // }


  return (
    <form action="" method="post" style={{display:'flex'}}>
      
        {/* <label >postId</label>
        <input type='number' name='postId'value = {comment.postId} onChange={handleChange}/>

        <label >id</label>
        <input type='number' name='id' value =  {comment.id} onChange={handleChange}/> */}

        <label >Nombre</label>
        <input type='text' name='name' value =  {comment.name} onChange={handleChange}/>

        {/* <label >email</label>
        <input type='email' name='email' value =  {comment.email} onChange={handleChange}/> */}

        <label >Descripción</label>
        <textarea name='body' value =  {comment.body} /*onChange={handleChange}*//>

      
    </form>
  )
}

export default Form