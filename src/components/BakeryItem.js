import "../App.css";

// TODO: create a component that displays a single bakery item
function BakeryItem(image, name, price) {
    return (
        <div className="BakeryItem">
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>${price}</p>
        </div>
    );
}

export default BakeryItem;
