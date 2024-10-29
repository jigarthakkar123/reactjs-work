import React, { useState } from 'react'

const StudentComponent = () => {
    const [id,setId]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [data,setData]=useState([])
    const [udata,setUdata]=useState([])
    const saveData=(e)=>{
        e.preventDefault();
        if(id!=''){
            let res=data.map((i,index)=>{
                if(index==id){
                    i.fname=fname
                    i.lname=lname
                    i.email=email
                    i.mobile=mobile
                }
                return i
            })
            setData(res)
        }
        else{
            setData([
                ...data,
                {
                    fname:fname,
                    lname:lname,
                    email:email,
                    mobile:mobile
                }
            ])
        }
        
        setFname("")
        setLname("")
        setEmail("")
        setMobile("")
        setId("")
    }
    const deleteData=(id)=>{ 
        const newData = [...data]; // Spread operator creates a shallow copy
        newData.splice(id, 1); // Remove the item at the specified index
        setData(newData);
    }
    const editData=(id)=>{ 
        let res=data.find((i,index)=>{
            return index==id
        })
        setFname(res.fname)
        setLname(res.lname)
        setEmail(res.email)
        setMobile(res.mobile)
        setId(id)
    }
  return (
    <>
    <div>
        <div className="container card mt-2 p-3">
        <h1>Student Registration</h1>
        <form action="#" method="post" onSubmit={saveData}>
            <div className='form-group'>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" className='form-control' value={fname} onChange={(e)=>setFname(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" className='form-control' value={lname} onChange={(e)=>setLname(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <label htmlFor="mobile">Mobile</label>
                <input type="text" name="mobile" className='form-control' value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
            </div>
            <button type="submit" className='btn btn-primary'>Save</button>
        </form>
        </div>
        <table border="1" width="100%">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            {
                data.map((i,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{i.fname}</td>
                            <td>{i.lname}</td>
                            <td>{i.email}</td>
                            <td>{i.mobile}</td>
                            <td><button type='button' onClick={()=>deleteData(index)} className="btn btn-danger">Delete</button></td>
                            <td><button type='button' onClick={()=>editData(index)} className="btn btn-primary">Edit</button></td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
    </>
  )
}
export default StudentComponent;