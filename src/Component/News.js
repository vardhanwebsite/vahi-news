import React, { Component } from 'react'
import Newsiteam from './Newsiteam'

export default class News extends Component {
    
    

    constructor(){
        super();
        this.state ={
        articles:[],
        loading:false,
        page:1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c69e5717026a417292925fe26dd6f217&page=1&pageSize=21`
        let data= await fetch(url);
        let parsedata= await data.json();
        console.log(parsedata);
        this.setState({articles:parsedata.articles, totalarticles:parsedata.totalResults})
    } 

    prevhandle= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=c69e5717026a417292925fe26dd6f217&page=${this.state.page-1}`;
        let data= await fetch(url)
        let parsedata= await data.json()
        console.log(parsedata)
        
        this.setState({
            page:this.state.page -1,
            articles:parsedata.articles})
    }


    nexthandle= async()=>{
     
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c69e5717026a417292925fe26dd6f217&page=${this.state.page+1}`;
        let data= await fetch(url)
        let parsedata= await data.json()
        console.log(parsedata)
        
        this.setState({
            page:this.state.page +1,
        articles:parsedata.articles})
      }
    

  render() {
    return (
      <div className='container my-3'>
      <h2>Top Headlines on {this.props.category}</h2>
      <div className="row my-3">
      {this.state.articles.map((element)=>{
       return <div className="col-md-4 my-3" key={element.url}>
        <Newsiteam title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
        imageUrl={!element.urlToImage?"https://ichef.bbci.co.uk/news/1024/branded_news/867C/production/_126882443_whatsubject.jpg":element.urlToImage }newsUrl={element.url}
          author={element.author} date={element.publishedAt}
        />
    </div>
})}
<div className='container d-flex justify-content-between'>
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevhandle}> &larr;Previous</button>
<button type="button" className="btn btn-dark" onClick={this.nexthandle}>Next &rarr;</button>
</div>
        </div>
      </div>
    )
  }
}
