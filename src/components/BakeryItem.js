import "../App.css";

// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <p>${props.price}</p>
        </div>
    );
}

export default BakeryItem;
