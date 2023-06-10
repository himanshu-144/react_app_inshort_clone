import React from 'react'
import "./NewsContent.css"
import { Container } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({news,newsResults,setLoadMore, loadMore}) => {


  return (
    <Container maxWidth="md">
         <div className='content'>
            <div className='mesage'>
             <span style={{color:"white", flex:1}}>For the best experience use inshorts app on your smartphone.</span>
             <img style={{marginRight:15}}
            alt="appStore"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="playStore"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
            </div>
          <NewsCard news={news} newsResults={newsResults} />
          { // newsResults =38 amd loadMore =20
            loadMore <= newsResults && (
              <>
              <hr />
          <button style={{height:38 , width:120, border :"1px solid black", borderRadius :2, fontSize:15, cursor:"pointer"
          , backgroundColor:"white", boxShadow:" 0 0 1px 1px grey"}} 
           onClick={()=>setLoadMore(loadMore+20)}
          >Load More</button>
             </>
            )
          }
         
         </div>

    </Container>
  )
}

export default NewsContent
