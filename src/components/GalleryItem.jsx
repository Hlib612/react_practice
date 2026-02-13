// import PropTypes from "prop-types";
export default function GalleryItem({
    title, 
    price,
    author,
    imgUrl,
    altText,
    quantity,
}){ return(
   <li>
    <img src={imgUrl} alt={altText}/>
    <h1>{title}</h1>
    <a href={author.url}>{author.tag}</a>
    <h2>{price}</h2>
    <p>{quantity}</p>
   </li>
)}