import React from 'react'

function FormComponent() {
  return (
    <>
    <div>
        <div className="container card mt-2 p-3">
        <h1>Employee Data</h1>
        <form action="#" method="post">
            <div className='form-group'>
                <label htmlFor="ename">Employee Name</label>
                <input type="text" name="ename" className='form-control'></input>
            </div>
            <div className='form-group'>
                <label htmlFor="dname">Department Name</label>
                <input type="text" name="dname" className='form-control'></input>
            </div>
            <div className='form-group'>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" className='form-control'></input>
            </div>
            
            <button type="submit" className='btn btn-primary'>Save</button>
        </form>
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
        </table>
    </div>
    </>
  )
}
export default FormComponent;