import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FormComponent() {
    const [id,setId]=useState("")
    const [data,setData]=useState({
        "ename":"",
        "dname":"",
        "location":""
    })
    const [udata,setUdata]=useState([])
    const handleChange=(e)=>{
        
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const display=()=>{
        axios.get("http://localhost:4000/users")
        .then((res)=>setUdata(res.data))
        
    }
    const delData=(id)=>{
        axios.delete("http://localhost:4000/users/"+id)
        .then((res)=>console.log(res))
        display()
    }
    const editData=(id)=>{
        axios.patch("http://localhost:4000/users/"+id)
        .then((res)=>{
            setData({
                ename:res.data.ename,
                dname:res.data.dname,
                location:res.data.location
            })
            setId(res.data.id)
        })
        
    }
    useEffect(()=>{
        display()
    },[])
    const saveData=(e)=>{
        e.preventDefault()
        if(id !=''){
            axios.put("http://localhost:4000/users/"+id,data)
            .then((res)=>console.log(res))
        }else{
            axios.post("http://localhost:4000/users",data)
            .then((res)=>console.log(res))
        }
        
        display()
        setData({
            "ename":"",
            "dname":"",
            "location":""
        })
    }
  return (
    <>
    <div>
        <div className="container card mt-2 p-3">
        <h1>Employee Data</h1>
        <form action="#" method="post" onSubmit={saveData}>
            <div className='form-group'>
                <label htmlFor="ename">Employee Name</label>
                <input type="text" name="ename" className='form-control' value={data.ename} onChange={handleChange}></input>
            </div>
            <div className='form-group'>
                <label htmlFor="dname">Department Name</label>
                <input type="text" name="dname" className='form-control' value={data.dname} onChange={handleChange}></input>
            </div>
            <div className='form-group'>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" className='form-control' value={data.location} onChange={handleChange}></input>
            </div>
            
            <button type="submit" className='btn btn-primary'>Save</button>
        </form>
        </div>
    </div>
    <table border="1" width="100%">
            <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Department Name</th>
                <th>Location</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            {
                udata.map((i)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.ename}</td>
                            <td>{i.dname}</td>
                            <td>{i.location}</td>
                            <td><button onClick={()=>delData(i.id)} className='btn btn-danger'>Delete</button></td>
                            <td><button onClick={()=>editData(i.id)} className='btn btn-primary'>Edit</button></td>
                        </tr>
                    )
                })
            }
        </table>
    </>
  )
}
export default FormComponent;