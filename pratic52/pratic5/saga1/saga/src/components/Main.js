import { addToCart, emptycard, removefromcard } from "../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productdata);
  console.log(data, "productdataproductdata ...saga");

  useEffect(() => {
    dispatch(productList());
  }, []);

  // const product = {
  //   name: 'i Phone',
  //   category: 'mobile',
  //   price: 10000,
  //   color: 'red'
  // }

  return (
    <div>
    {/* <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button><br/><br/>
    <button onClick={() => dispatch(removefromcard(product.name))}>remove from Cart</button><br/><br/> */}

    {/* <button onClick={() => dispatch(removefromcard(product))}>remove from Cart</button><br/><br/> */}<br/>
    <button onClick={() => dispatch(emptycard())}>empty Cart</button><br/><br/><hr/>

    {/* newwwwww */}

    {/* <button onClick={() => dispatch(productList())}>product</button> */}

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>&nbsp;
              <button onClick={() => dispatch(removefromcard(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
