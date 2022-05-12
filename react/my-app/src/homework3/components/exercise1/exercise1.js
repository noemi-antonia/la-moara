import Product from "./product";

const productList = [
    { id: 1, name: 'Brânză de vaci', category: "lactate", price: 8, categoryColor: "#e8fffd"},
    { id: 2, name: 'Pâine neagră', category: "brutărie", categoryColor: "#ffe99c"},
    { id: 3, name: 'Mere', price: 12},
    { id: 4, name: 'Pere', category: "legume & fructe",  categoryColor: "#95b569"},
];

const Exercise1 = () => {
    return (
    <div  className="with-border">
        Exercitiu 1
        <div className="productlist-container">
            {productList.map((item)=> (
                <Product key={item.id} product={item}/>
            ))}
        </div>
    </div>
    );
}

export default Exercise1;