import React,{useEffect, useMemo, useState} from 'react';
import { Paper, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import MyButton from "components/MyButton/MyButton";
import { useGetProductQuery } from "state/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetAllUsersQuery } from 'state/api';
import "./Admin.css"
import Adtemp from "./admintemp.jsx"
export default function Admin() {
    const theme = useTheme();

    const navigate = useNavigate();
    const [search,setSearch]=useState("");
    const [alluser,setalluser]=useState([]);
    const user = useSelector((state) => state.global.user);
    // const {data,isSuccess} = useGetProductQuery(user._id);
    // const [data,setdata]=useState([]);
    // function Ram(){
      //   const {data,isSuccess}=useGetAllUsersQuery(search);
      //   return ;
      // }
     const {data,isSuccess}=useGetAllUsersQuery(search);
     
    useEffect(() => {
      {console.log(search);}
      // Ram();
      if(isSuccess)
       setalluser(data);
       
      //  console.log(data);
       console.log(alluser);
    }, [data])
    const allUser=[];
    if(isSuccess&&user.username=="Admin")
  return (
    <div>
    <div><h1>Hello Admin.</h1></div>
    <br/>
    <br/>
    <div className='Sbox'>
    <TextField id="search" label="Search" variant="outlined"   onChange={ m =>{setSearch(m.target.value);  }}  style={{width:"100%"}}/>
    </div>
    <br/>
    <br/>
    <div className='users'>
      {alluser&&alluser.map((card)=>{
        return(
          <div>
                  <Adtemp
                    title={card.name}
                    img={card.image}
                    des={card.email}
                    id={card.owner}
                  />
                  <br/>
                  </div>
        );
      })};
    </div>
    </div>
  );
  else if(search==""&&user.username=="Admin"){
    return (
      <div>
      <div><h1>Hello Admin.</h1></div>
    <br/>
    <br/>
      <div className='Sbox'>
    <TextField id="search" label="Search" variant="outlined"   onChange={ m =>{setSearch(m.target.value); setalluser([]); }}  style={{width:"100%"}}/>
    </div>

  
    </div>
    );
  }
  else if(user.username=="Admin"){
    return(<div>
    <div><h1>Hello Admin.</h1></div>
    <br/>
    <br/>
      <div className='Sbox'>
    <TextField id="search" label="Search" variant="outlined"   onChange={ m =>{setSearch(m.target.value); setalluser([]); }}  style={{width:"100%"}}/>
    </div>
    <br/>
    <br/>
      <div><h1>Loading...</h1></div>
    </div>
    )
  }
}
