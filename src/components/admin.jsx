import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function Admin(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://roymusicalsbackend.pythonanywhere.com/admin')
        .then(res=>setUsers(res.data))
        .catch(err=>console.error(err));
    },[]);

    return(
        <div className='admin-container'>
            <h1>User list:</h1>
            {Array.isArray(users)&&users.length===0?(
                <p>No users found</p>
            ):(
                users.map((user,index)=>(
                <div className='appoinment-details'>
                    <h3>Customername:{user.customername}</h3>
                    <h3>Customerphone:{user.customerphone}</h3>
                    <h3>Customer-email:{user.customeremail}</h3>
                    <h3>Instrument:{user.instrument}</h3>
                    <h3>Brand and Model:{user.brand_model}</h3>
                    <h3>Appoinment date:{user.appoinment_date}</h3>
                    <h3>Appoinment time:{user.appoinment_time}</h3>
                    <h3>booked on:{user.appoinment_booked_on}</h3>
                    <h3>Video:</h3>
                    <video controls>
                        <source src={user.video_url} type='video/mp4'></source>
                    </video>
                    </div>
                ))
           )}
        </div>
    );
}
