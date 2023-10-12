import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import SpinnerDark from './SpinnerDark';

const News = (props) => {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 
  // useEffect is just like componentDidMount()
  useEffect(() => {
    const updateNews = async () => {
      props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
      setLoading(true)
      props.setProgress(40)
      let data = await fetch(url);
      let parsedData = await data.json();
      props.setProgress(70)
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100)
    }
    document.title = `${capitalize(props.category)} - NewsMonkey`
    updateNews() 
    // eslint-disable-next-line
  }, [])
  
  // async componentDidMount() {
  //   updateNews()
  // }

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

    return (
      <>
      
        <h2 className='text-center mt' style={{margin: '35px 0', marginTop: '90px', color: `${props.mode==='dark'?'white':'black'}`}}>NewsMonkey - Top Headlines</h2>
        {loading &&<><div className="my-10">${props.mode==='dark'?<SpinnerDark/>:<Spinner/>}</div></>}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={page<=Math.ceil(totalResults/props.pageSize)}
          loader={props.mode==='dark'?<SpinnerDark/>:<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                // console.log(element)
                return <div style={{zIndex: '0'}} className="col-md-6 col-xl-4" key={element.url}>
                  <NewsItem mode={props.mode} title={element.title} description={element.description ? element.description.slice(0, 125)+'...' : "..."} imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgftM2mYZqW5CnbabCXAqNxcH7m0sG3rJUATbcjENlsA1oltd4XRz-UGVU-EYvR7Wa3Tk&usqp=CAU"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      
      </>
    )
  }

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
