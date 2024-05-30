import React, { useEffect, useState } from 'react'
import AHeader from '../Comoan/AHeader'
import AFooter from '../Comoan/AFooter'
import axios from 'axios'

function Usermange() {

    const [data,setdata] = useState()

    useEffect(()=>{
        fetch()
    })

    const fetch=async()=>{
        const res = await axios.get(`http://localhost:3000/user`)
        console.log(res.data)
        setdata(res.data)
    }

  return (
    <div>
      <AHeader/>
        <div className="container">
            <h1>User manage</h1>
            <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((value,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.mobile}</td>
                                            <td><button className='btn btn-success'>{value.status}</button></td>
                                            <td><button className='btn btn-info'>view</button>
                                                <button className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
        </table>
        </div>
      <AFooter/>
    </div>
  )
}

export default Usermange
