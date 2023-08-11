import React from 'react';
import "./admintemp.css";
import { functions } from 'lodash';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setCheck } from 'state/store';
import { useDispatch } from 'react-redux';


function Adtemp(props) {
    // use
    const navigate = useNavigate();
    console.log(props.img);
    const dispatch=useDispatch();
    return ( 
        <div className="admin-data">
        <div className="admin-profile" >
          <div className="prof-imgg" style={{ backgroundImage :`url(${props.img})`}}></div>
        </div>
        <div className="admin-det" onClick={()=>{dispatch(setCheck(props.id)); navigate(`/dasb`);}}>
          <h3>{props.title}</h3>
          <h5>{props.des}</h5>
        </div>
      </div>
     );
}

export default Adtemp;
