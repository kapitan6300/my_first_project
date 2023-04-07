import React from "react";
import axios from 'axios';
import { addNews,setUsers } from "../redux/news-reducer";
import { connect } from "react-redux";
import News from "./news";



// const News = (props)=>{
//     axios.get('https://hn.algolia.com/api/v1/items/2').then(response => {

//     })
//     return {
  
  let  mapStateToProps =(state)=> {
    
    return {
        news:state.newsPage.news

    }
  }

    
    
 const NewsContainer = connect(mapStateToProps,{addNews,setUsers})(News);
 
export default NewsContainer;
