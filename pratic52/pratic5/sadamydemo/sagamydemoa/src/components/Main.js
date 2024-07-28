import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addcardmmaction,
  removecardmmaction,
  emptycardmmaction,
} from "../redux/action";
import { blocklist_getaction } from "../redux/blockaction";

const Main = () => {
  const oneperforme = useSelector((state) => state.cardmmreducer);
  const twoperforme = useSelector((state) => state.blockreducer);
  //   console.log("twoperforme", twoperforme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blocklist_getaction());
  }, []);


  return (
    <div>
    <h3 style={{marginRight:"-1700px"}}>Main data : {oneperforme.length}</h3>

    <button  onClick={()=>dispatch(emptycardmmaction())}>EMPTY to Card</button><br/><br/><br/>


    
    <button  onClick={()=>dispatch(blocklist_getaction())}>block getproductlist</button><br/>

       <div className="product-container">
        {twoperforme.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addcardmmaction(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removecardmmaction(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

// ****

// ****
