import axios from "axios";
import React from "react";
import classes from './news.module.css';

const News = (props) => {
  axios.get('https://habrahabr.ru/rss/interesting').then(response=>{
    props.setUsers(response.data.items)
  })
 debugger;
    return (
<div className={classes.kadu}>
    {props.news.map(n =><div name={n.name} news={n.news}>
        <div>
            {n.status} <br/>
            {n.name}
        </div>
    </div>)}
    
    
</div>
    )
    
    
    
    
}
export default News;