import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize : 6,
    cateogary : 'General'
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    cateogary : PropTypes.string
  }
  constructor()
  {
    super();
    console.log("Hello");
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogary}&apiKey=d64dff8f9a454d67b121f463c170cd72&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
}
handlePrevClick = async () => {
  console.log("Previous");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogary}&apiKey=d64dff8f9a454d67b121f463c170cd72&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
  })
}
handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogary}&apiKey=d64dff8f9a454d67b121f463c170cd72&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
}
  render() {
    return (
      <div className="container my-4" >
        <h3 className='text-left'>Headlines</h3>
        <div className="row justify-content-evenly my-4">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
  })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr;</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
