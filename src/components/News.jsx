import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsApp`;
    }
    async updateNews(){
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
      this.props.setProgress(100);
    }
    async componentDidMount(){
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb19dac17f5b4ef6b5eff22cef78ca26&page=1&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true});
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
      this.updateNews();
    }
    handlePrevClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb19dac17f5b4ef6b5eff22cef78ca26&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //   page: this.state.page - 1,
        //   articles: parsedData.articles,
        //   loading: false
        // })

        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    handleNextClick = async ()=>{
      // if(Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1){
      //   return;
      // }else {
      //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb19dac17f5b4ef6b5eff22cef78ca26&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      //   this.setState({loading: true});
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   this.setState({
      //     page: this.state.page + 1,
      //     articles: parsedData.articles,
      //     loading: false
      //   })
      // }

      this.setState({page: this.state.page + 1});
      this.updateNews();
    }

    fetchMoreData = async () => {
      const nextPage = this.state.page + 1;
      //this.setState({page: this.state.page + 1});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: nextPage,
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
      })
    }
  render() {
    return (
      <>
        <h1 className='text-center' style={{margin: '35px 0px' , marginTop:'90px' }}>NewsApp - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="row">
                {/* !this.state.loading && */}{ this.state.articles.map((element)=>{ 
                  return <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title.slice(0,45)} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source} />
                  </div>
                  {/* <div className="col-md-4">  
                    <NewsItem title="News Title 2" description="This is a description of news item 2." imageUrl="https://via.placeholder.com/150" newsUrl="https://example.com/news2"/>
                  </div>
                  <div className="col-md-4">
                    <NewsItem title="News Title 3" description="This is a description of news item 3." imageUrl="https://via.placeholder.com/150" newsUrl="https://example.com/news3"/>
                  </div> */}
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="conatiner d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
      </>
    )
  }
}

export default News