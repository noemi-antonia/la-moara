const Product = (props) => {
    return(
        <div className="single-product-container" style={{borderTopColor: props.product.categoryColor}}>
            <h2>{props.product.name}</h2>
            <p className = "product-category">Categorie: {(props.product.category) ? props.product.category : "necunoscută"}</p>
            {(props.product.price) ? <p className="product-price"> Preț: <span>{props.product.price}</span> LEI</p> : <p>Preț inexistent</p>}
        </div>
    );
}

export default Product;