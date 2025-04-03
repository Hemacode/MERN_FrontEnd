import React, { useEffect, useState } from 'react'

const Movie = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [editTitle, setEditTitle] = useState("")
  const [editDesc, setEditDesc] = useState("")
  const [editId, setEditId] = useState(-1)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [todos, setTodos] = useState([])
  const apiUrl = "http://localhost:8000"
  const handleSubmit = () => {
    setError("")
    if(title.trim() !== '' && desc.trim() !== ''){
      //Api
        fetch(apiUrl+"/movies", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, desc})
        }).then((res)=> {
          if(res.ok){
            setTodos([...todos, {title, desc}])
            setMessage("Item added successfully")
            setTimeout(() => {
              setMessage("")
            },3000)
          }else {
            setError("Unable to create Todo item")
          }
        }).catch(()=>{
          setError("Unable to create Todo item")
        })
    }
  }

  const getItem = () => {
    fetch(apiUrl+'/movies')
    .then((res) => {
      return res.json()
    }).then((res) => setTodos(res))
  }

  const handleUpdate = (id) => {
    setError("")
    if(editTitle.trim() !== '' && editDesc.trim() !== ''){
      //Api
        fetch(apiUrl+"/movies/"+id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title: editTitle, desc: editDesc})
        }).then((res)=> {
          if(res.ok){
            const updateTodo = todos.map((item) => {
                if(item._id == id){
                  item.title = editTitle;
                  item.desc = editDesc;
                }
                return item
            })
            setTodos(updateTodo)
            setMessage("Item updated successfully")
            setTimeout(() => {
              setMessage("")
            },3000)
            setEditId(-1)
          }else {
            setError("Unable to create Todo item")
          }
        }).catch(()=>{
          setError("Unable to create Todo item")
        })
    }
  }

  const handleEdit = (item) => {
    setEditId(item._id); 
    setEditTitle(item.title); 
    setEditDesc(item.desc)
  }

  const handleEditCancel = () => {
    setEditId(-1)
  }

  const handleDelete = (id) => {
    if(window.confirm('Are you sure want to delete item?')){
      fetch(apiUrl+'/movies/'+id, {
        method: 'DELETE'
      })
      .then(()=> {
       const item =  todos.filter((item) => item._id !== id)
       setTodos(item)
      })
    }
  }

  useEffect(() => {
    getItem();
  },[])

  return (
    <>
        <div className='row p-3 bg-success text-light'>
            <h1>Todo Project for MERN Stack</h1>
        </div>
        <div>
          <h3 className='row mt-3'>Add Item</h3>
          {message && <p className='text-success'>{message}</p>}
          <div className='form-group d-flex gap-2'>
            <input placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title} className='form-control' type='text'/>
            <input placeholder='Desc' onChange={(e) => setDesc(e.target.value)}  value={desc} className='form-control' type='text'/>
            <button className='btn btn-dark' onClick={handleSubmit}>Submit</button>
          </div>
          {error && <p className='text-danger'>{error}</p>} 
        </div>
        <div className='row mt-3'>
          <h3>Tasks</h3>
          <ul className='list-group'>
            {todos.map((item) => {
              return (<li className='list-group-item my-2 bg-info d-flex justify-content-between align-items-center'> 
                <div className='d-flex flex-column me-2 text-start'>
                  {
                    editId == -1 || editId !== item._id ? <>
                      <span className='fw-bold'>{item.title}</span>
                      <span className=''>{item.desc}</span>
                    </> : <>
                    <div className='form-group d-flex gap-2'>
                      <input placeholder='Title' onChange={(e) => setEditTitle(e.target.value)} value={editTitle} className='form-control' type='text'/>
                      <input placeholder='Desc' onChange={(e) => setEditDesc(e.target.value)}  value={editDesc} className='form-control' type='text'/>
                      
                    </div>
                    </>
                  }
                </div>
                <div className='d-flex gap-2'>
                 { 
                    editId == -1 || editId !== item._id ? 
                      <button className='btn btn-warning' onClick={() => handleEdit(item)}>Edit</button> 
                      :
                      <button className='btn btn-warning' onClick={() => handleUpdate(item._id)}>Update</button>
                 }
                  { 
                    editId == -1 || editId !== item._id   ? <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button> :
                    <button className='btn btn-light' onClick={handleEditCancel}>Cancel</button>
                  }
                </div>
              </li>)
            }

            )}
            
          </ul>
        </div>
    </>
  )
}

export default Movie