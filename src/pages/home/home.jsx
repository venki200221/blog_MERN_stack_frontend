import React, { useEffect,useState } from "react";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.css" ;
import axios from "axios"
import { useLocation } from "react-router";

export default function Home(){
     const [posts,setPosts]=useState([]);
     const {search}=useLocation();
     


     useEffect(()=>{
      const fetchPosts=async()=>{
       const res=await  axios.get("/posts"+search)
       setPosts(res.data)
      }
      fetchPosts()
     },[search]);
      
     const width=window.screen.width;
     console.log(width);


    return(
        
        <>
        <Header></Header>
        <div className="home">
        <Posts posts={posts} />
        {/* if(width`{'>'}`350){
        <Sidebar />
        } */}
        {
            width?<Sidebar/>:<div/>
        }
        </div>
       </>

    )
};