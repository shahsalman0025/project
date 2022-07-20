import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from 'react'

export default function LoginWrapper(props) {
    const {Component} =props;
    const Navigate=useNavigate();
    useEffect (()=>{
        
        let login = localStorage.getItem('login');
        if(login=="true"){
            console.log("redict auth")
        Navigate('/get_started')
        }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}
