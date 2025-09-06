import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function Admin(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('http://roymusicalsbackend.pythonanywhere.com/admin')
        .then(res=>setUsers(res.data))
        .catch(err=>console.error(err));
    },[]);

    return(
        <div>
            <h1>User list:</h1>
            if (users.length===0){
                <p>No users found</p>
            }
            else{
                users.map((user,index)=>(
                    <div>
                    <h3>Customername:{user.customername}</h3>
                    <h3>Customerphone:{user.customerphone}</h3>
                    <h3>Customer-email:{user.customeremail}</h3>
                    <h3>Instrument:{user.instrument}</h3>
                    <h3>Brand and Model:{user.brand_model}</h3>
                    <h3>Appoinment date:{user.appoinment_date}</h3>
                    <h3>Appoinment time:{user.appoinment_time}</h3>
                    <h3>Video:</h3>
                    <video controls>
                        <source src={user.video_url} type='video/mp4'></source>
                    </video>
                    </div>
                ))
            }
        </div>
    );
}
