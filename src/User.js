
import { useState, useEffect } from 'react';
import axios from 'axios';

const User =(props) => {
    const urlUsers ='https://jsonplaceholder.typicode.com/users';
    const urlPosts ='https://jsonplaceholder.typicode.com/posts'; 
    const urlTodos = 'https://jsonplaceholder.typicode.com/todos';

    const [todos, setTodos] = useState([])
    const [backGroundColor, setBackGroundColor] = useState('')
    const [visib, setVisib] = useState('none')
    const [userdata, setUserdata] = useState({ name: '', email: '' , street:'', city:'', zip:'' })
   
    const  chooseId = () =>{
        setBackGroundColor('red')

    }
    const updateUser = async () =>{
        const res = await axios.put( `${urlUsers}/${props.user.id}` ,userdata);
        console.log(res);
    }
    const  handleOtherData = () =>{
        setVisib('inline')  
    }
    
    const  handleClick = () =>{
        setVisib('none')
    }
    
    const  updateInput = (e) =>{
        const { name, value } = e.target;
        setUserdata({ ...userdata, [name]: value });
    }
    
    
    
    return <div style={{border:"1px solid red ", width:"50%", backgroundColor:`${backGroundColor}`  }}>
    <span onClick={chooseId} >{`Id:${props.user.id}`}</span>  <br />
    Name: <input type="text" name='name' defaultValue={props.user.name} onChange={updateInput}/> <br />
    Email: <input type="text" name='email' defaultValue={props.user.email} onChange={updateInput}/>  <br />
    <div backGroundColor='grey' style={{display:`${visib}`}}>
       
        Street: <input type="text" name='street' onChange={updateInput}/> <br />
        City: <input type="text" name='city' onChange={updateInput}/> <br />
        Zip Code: <input type="number" name='zip' onChange={updateInput}/> <br />
    </div>

    <button onMouseOver={handleOtherData} onClick={handleClick}>Other Data</button>
      <button onclick={updateUser} style={{backgroundColor:'orange' }  } >Update</button>
     <button style={{backgroundColor:'orange' }} >Delete</button> 
  </div>

}

export default User