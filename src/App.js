import './App.css';
import Nav from './components/Nav';
import { useEffect, useState } from "react"
import axios from 'axios';
import NewsContent from './components/NewsContent/NewsContent';


function App() {

  const [category, setCategory]  = useState("general");
  const [news, setNews] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const[loadMore, setLoadMore] = useState(20);  


  
  
  const newsApi =async()=>{
      const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}`);
      setNews(data.data.articles);
      setNewsResults(data.data.totalResults);
      
    };
    console.log(news);
 useEffect(()=>{ 
     newsApi();
 },[category, newsResults, loadMore])

  return (
    <div className="App">
         <Nav setCategory={setCategory}/>
         <NewsContent  news={news} newsResults={newsResults}
          loadMore={loadMore} setLoadMore={setLoadMore}
         />
         
    </div>
  );
}

export default App;
