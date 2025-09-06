import React,{useState} from'react';
import axios from 'axios';
export default function Appoinment(){
    const BLOCKED_DATE='2025-11-02';
    const [message,setMessage]=useState("");
    const [form,setForm]=useState({
        customername:'',
        customerphone:'',
        customeremail:'',
        instrument:'',
        brand_model:'',
        video:null,
        date:'',
        time:''
    });

    const isDateDisabled=(date)=>{
        if(!date)return false;
        const d=new Date(date);
        if (d.getDay()===0)return true;
        if(date===BLOCKED_DATE)return true;
        return false;
    };

    const handleChange=(e)=>{
        if (e.target.name==='video'){
            setForm({...form,video:e.target.files[0]});
        }
        else{
            setForm({...form,[e.target.name]:e.target.value});
        }
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data=new FormData();
        data.append('customername',form.customername);
        data.append('customerphone',form.customerphone);
        data.append('customeremail',form.customeremail);
        data.append('instrument',form.instrument);
        data.append('brand_model',form.brand_model);
        data.append('video',form.video);
        data.append('date',form.date);
        data.append('time',form.time);
        if(isDateDisabled(form.date)){
            setMessage("Sorry! appoinments cannot be booked at this date");
            return;
        }
        try{
            await axios.post('http://roymusicalsbackend.pythonanywhere.com/appoinment',data);
            setForm({
                customername:'',
                customerphone:'',
                customeremail:'',
                instrument:'',
                brand_model:'',
                video:null,
                date:'',
                time:''
            });
            setMessage('Appoinment booked successfully!');
        }
        catch(error){
            console.error("Error submiting form",error);
            setMessage('Error submiting form!');
        }
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label>
                            Enter name:
                            </label>
                            <input
                            type='text'
                            name='customername'
                            value={form.customername}
                            onChange={handleChange}
                            required
                            />
                            <br></br>
                            </div>
                            <div>
                                <label>
                                Enter phone-number:
                                 </label>
                                 <input
                                 type='text'
                                 name='customerphone'
                                 value={form.customerphone}
                                 onChange={handleChange}
                                 required
                                 />
                                 <br></br>
                            </div>
                            <div>
                                 <label>
                                    Enter email:
                                    </label>
                                    <input
                                    type='email'
                                    name='customeremail'
                                    value={form.customeremail}
                                    onChange={handleChange}
                                    required
                                    />
                                    <br></br>
                            </div>
                            <div>
                                <label>
                                    Enter instrument type:
                                    </label>
                                    <input
                                    type='text'
                                    name='instrument'
                                    value={form.instrument}
                                    onChange={handleChange}
                                    required
                                    placeholder='eg:Keyboard,Electric guitar...'
                                    />
                                    <br></br>
                                </div>
                                <div>
                                    <label>
                                        Enter brand and model:
                                        </label>
                                        <input
                                        type='text'
                                        name='brand_model'
                                        value={form.brand_model}
                                        onChange={handleChange}
                                        required
                                        placeholder='eg:yamaha psr747...'
                                        />
                                        <br></br>
                                </div>
                                <div>
                                    <label>
                                        Upload a video of your product:
                                    </label>
                                    <input type='file' 
                                    name='video'
                                    onChange={handleChange}
                                    required/>
                                    <br></br>
                                </div>
                                <div>
                                    <label>
                                        Book appoinment date:
                                    </label>
                                    <input
                                    type='date'
                                    name='date'
                                    value={form.date}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split('T')[0]}
                                    required/>
                                    <br></br>
                                </div>
                                <div>
                                    <label>
                                        Choose appoinment time:
                                    </label>
                                    <input
                                    type='time'
                                    name='time'
                                    value={form.time}
                                    onChange={handleChange}
                                    required
                                    />
                                </div>
                <input type='Submit' value='Submit'></input>
                </div>
            </form>
            <p>{message}</p>
        </div>
    );
}
