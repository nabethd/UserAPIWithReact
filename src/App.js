
import axios from 'axios'
import { useEffect, useState } from 'react';
import User from './User'

const App = () => {

  const urlUsers ='https://jsonplaceholder.typicode.com/users';
  const urlPosts ='https://jsonplaceholder.typicode.com/posts'; 
  const urlTodos = 'https://jsonplaceholder.typicode.com/todos';
  const [usersConst, setUsersConst] = useState([])
  const [users, setUsers] = useState([])
  const [chosenUser, setChosenUser] = useState('')
  const [todos, setTodos] = ([]);


  useEffect(() =>{
    const getUsers = async () =>{
     const resp = await axios.get(urlUsers);
     const us = resp.data
     setUsersConst(us); 
     setUsers(us)
   }
   getUsers();
 
 },[])

  const chooseId = (e) =>{
    console.log(e.target.id);
    const temp =users.filter((user) => user.id == e.target.id)[0]
    setChosenUser(temp)
   

  }
  const searchUser = (e) =>{
    const input = e.target.value;
    if(input == ''){
      setUsers(usersConst)
      return;
    } 
    const newUsers = usersConst.filter((user) => user.name.toUpperCase().includes(input.toUpperCase()) || user.email.toUpperCase().includes(input.toUpperCase())   )
    console.log(newUsers);
    setUsers(newUsers);
  }

  const SearchDiv =  <div>
                  Search  
                  <input type="text" onChange={searchUser} /> 
                  <button style={{backgroundColor:'orange' }}> Add </button>
                   <br />
                </div>


  const userDiv = users.map((user) =>{
      return <User user={user}/>
    })

  
  
  


  return (
   <div>
 {SearchDiv}
    {userDiv}
   

   </div>

   
  );
};

export default App;
