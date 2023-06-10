import React from 'react'
import "./NewsCard.css"



const NewsCard = ({news}) => {

// for date pattern
 /*
   const fulldate = new Date(m.publicjhedAt);
    var date = fulldate.toString().split("");
    const hours = parseInt(date[4].substring(0,2));
    const time = hours >12 ? true : false;
 */
 

  return (
    <div>
       {
        news.map((m)=>{
            return(
               <div className='card'>
                 <img src={m.urlToImage ? m.urlToImage : "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg" }  
                 alt={m.title} className='imageCard'/>
                 <div className='CardText'>
                    <div className='upperText'>
                       <span className='title'>{m.title}</span>
                       <span className='author'>
                        <a href={m.url} target='__blank'  
                        style={{textDecorationLine:"none", color:"black"}}><b>short</b></a>
                       <span> by--{m.author ? m.author : "unknown"}</span>

                        
                       </span>

                      </div>
                     <div className='lowerText'>
                       <span>{m.description}</span>      
                     </div>
                 </div>
               </div>
            )
        })
       }
    </div>
  )
}

export default NewsCard
