import { useNavigate } from "react-router-dom";
import "./Home.css"
import "animate.css"
export default function Home(){
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/productsPage')
    }

    return(
        <>
        <main className="home">
            <img src="/icon.jpg" alt="ICON OF QUICKCART APP" />
            <h1 className="animate__animated animate__bounceInDown">Bienvenido a QuickCart</h1>
            <button onClick={handleClick}>Ingresar</button>
        </main>
        <footer>
            Aquí podras encontrar productos de diferentes categorias y agregarlos a tu carrito!. Ten una buena compra!
        </footer>
        </>
    )
}