import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./dasb.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import prof from "assets/images/profile.png";
import Dashtemp from "scenes/Dashboard/Dashtemp";
// import { map } from 'lodash';
import MyButton from "components/MyButton/MyButton";
import { useGetProductQuery, useLoginMutation } from "state/api";
import {Buffer} from "buffer";
const Dasb = () => {
  const navigate = useNavigate();
  const check = useSelector((state) => state.global.check);
//  const puser=useLoginMutation()
  // if(!user) return <div></div>;
  // function fun(e){
  //   return(
  //     <Dashtemp image={e.image} title={e.title} />
  //   )
  // }
  // useEffect(()=>{

  // },[products]);
  // console.log(user);
  const [cards, setCards] = useState([]);
  console.log(check);
  const {data,isSuccess} = useGetProductQuery(check);
  useEffect(()=>{
    console.log(data);
    setCards(data);
  },[data]);

  if(isSuccess){
    return (
      <div className="dashboard">
          <div className="admin-data">
            <div className="admin-profile">
              <div className="prof-img" ></div>
            </div>
            <div className="admin-det">
              <h3>Name</h3>
            </div>
          </div>
          <br />
          <div className="extradivadded">
            <div className="products-dash">
              {cards && cards.map((card) => {
                 {/* const base64String = Buffer.from(card.image.data.data).toString("base64"); */}
                return (
                  <div>
                  <Dashtemp
                    title={card.name}
                    img={card.image}
                    des={card.description}
                  />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="additembutton">
            <MyButton onClick={() => navigate("/admin")}>Go Back</MyButton>
          </div>
        </div>
    );
            }
  else{
    return <div className="dashboard_loading"> Loading....Grab a cup of coffee until
     <div className="additembutton">
            <MyButton onClick={() => navigate("/admin")}>Go Back</MyButton>
          </div></div>
  }
};

export default Dasb;
