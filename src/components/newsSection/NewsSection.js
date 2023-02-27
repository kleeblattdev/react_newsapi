//file import

//library import
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

//component import
import NewsArticle from '../newsArticle/NewsArticle.js';

//CSS Import
import './NewsSection.css';

const NewsSection = () => {
    //initial state
    const [article, setArticle] = useState([]);
    const [selectValue, setSelectValue] = useState("de");

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${selectValue}&apiKey=2731200c9f6d4b85a5c4165c5d639e92`)
        .then(response => response.json())
        .then(data =>{
            //was für einen Datentyp habe ich hier
            console.log(data)

            //Übergabe von nur den Articles
            setArticle(data.articles)
        })
    },[selectValue])

    
    const onChange = (e) =>{
        const value = e.target.value;
        setSelectValue(value);
    }
    


    return ( 
        <section>
            <select name="countySelection" id="countySelection" onChange={onChange}>
                <option value="de" selected>Germany</option>
                <option value="us">USA</option>
            </select>
            {article && article.map((article)=>{
                return <NewsArticle
                key = {uuidv4()}
                urlToImage = {article.urlToImage}
                title = {article.title}
                description = {article.description}
                published = {article.publishedAt}
                url = {article.url}
                />
            })}
            
        </section>
    );
}

export default NewsSection;