import {useDispatch, useSelector} from 'react-redux';
import { Link} from "react-router-dom";
import { productsearch } from '../redux/productAction';
import img from "../logo/img.png"
 
const Header =()=>{
    const result = useSelector((state)=>state.cartData);
    const dispatch = useDispatch()
    console.log("data in header", result);
    return(
        <div className="header">
        <Link to="/"><h1 className='logo'><img src={img} alt='' style={{height:"103px"}}/></h1></Link>
        <div className='search-box'>
                <input type="text" onChange={(event) => dispatch(productsearch(event.target.value))} placeholder='Search Product' />
            </div>
        <Link to="/card">
        <div className="cart-div">           
                <Link to="/login"><button className='logo'>Login</button></Link>     
                <div className='bag'> 
                <span style={{marginRight:"77px"}}>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" style={{marginTop:"-100px",marginRight:"76px"}}/>   
                </div> 
            </div>
        </Link>  
        </div>
    )
}

export default Header;