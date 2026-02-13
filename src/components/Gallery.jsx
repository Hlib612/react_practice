import GalleryItem from "./GalleryItem";

export default function Gallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <GalleryItem 
        key={item.id} 
        title={item.title}
        price={item.price}
        author={item.author}
        quantity={item.quantity}
        imgUrl={item.imgUrl}
        altText={item.altText}
        />
      ))}
    </ul>
  );
}
