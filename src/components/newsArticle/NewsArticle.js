//CSS Import
import './NewsArticle.css';

const NewsArticle = (props) => {
    
    return ( 
        <article>
            <img src={props.urlToImage} alt="Article"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{(props.published).slice(0,10)}</p>
            <a href={props.url} target="_blank" rel='noreferrer'>READ MORE</a>
        </article>
    );
}

export default NewsArticle;