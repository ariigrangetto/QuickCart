import { useContext, useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css"
import { CartContext } from "../context/cartContext";

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
                    {cart.map((item) =>{
                        return(
                            <li key={item.id}>
                                <img src={item.img} alt={item.name} />
                                <div>
                                    <strong>{item.name}</strong> -${item.price}
                                </div>

                                <small>
                                    Qty: {item.quantity}
                                </small>
                                <button onClick= {() => handleRemoveFromCart(item.id)}>Eliminar</button>
                            </li>
                        )

                })}
                </ul>
            )}
                 <button onClick={clearCart}>
                 <ClearCartIcon/>
                 </button>
            

        </aside>
        </>
    )
}