import { useContext, useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css"
import { CartContext } from "../context/cartContext";

function CartItem ({img, name, quantity, price, removeFromCart }){
    return(
        <li>
            <img src={img} alt={name} />
            <div>
                <strong>{name}</strong> - ${price}
            </div>

            <div className="item-footer">
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={removeFromCart}>Eliminar</button>
            </div>
        </li>
    )
}

export function Cart(){
    const {cart, removeFromCart, clearCart} = useContext(CartContext);
    const cartCheckId = useId();

    const handleRemoveFromCart = (productId) =>{
        removeFromCart({ id: productId })
    }
    return (
        <>
        <label htmlFor={cartCheckId} className="cart-button">
            <CartIcon/>
        </label>
        <input type="checkbox" hidden id={cartCheckId} />

        <aside className="cart">
            {cart.length === 0 ? (
                <p>Tu carrito está vacio</p>
            ) : (
                <ul>
                    {cart.map((item) =>(
                        <CartItem 
                            key={item.id}
                            removeFromCart={() => handleRemoveFromCart(item.id)}
                            {...item}
                            />
                    ))}
                </ul>
            )}
                 <button onClick={clearCart}>
                 <ClearCartIcon/>
                 </button>
            

        </aside>
        </>
    )
}