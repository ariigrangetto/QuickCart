import "./Products.css"
import { AddToCartIcon } from "../components/Icons";
import Filter from "../components/Filter";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";

export default function Products({products}){
    const {addToCart} = useContext(CartContext);
    const [currentPage, setCurrentPage] = useState(1);
    //guardamos en qué pagina estamos
    const itemsPerPage = 10;
    //cuando productos queremos mostrar por pagina

    const indexOfLastItem = currentPage * itemsPerPage;
    //posicion del ultimo producto a mostrar (pagina 2 con 10 productos seria 2 x 10 = 20)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //posicion el primer producto (20 - 10 = 10)

    //estos datos se utilizan para el slice

    const totalPages = Math.ceil(products.length / itemsPerPage);
    //toda la cantidad de producto dividido por la cantidad que quiero mostrar
    //cantidad de paginas que necesito
    //Math.ceil redonde el numero hacia arriba al siguiente numero entero (si tengo 3,5 paginas pasa a 4 paginas)

    const handleAddToCart = (product) =>{
        addToCart(product);
    }

    const pages = [];

    for(let i = 1; i <= totalPages; i++){
        pages.push(i);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);
      
    

    return (
        <>
        <h1>Productos disponibles:</h1>
        <Filter/>
        
         <main className="products">
            <ul>
                {products.slice(indexOfFirstItem, indexOfLastItem).map(product => (
                    <li key={product.id}>
                        <img className="product-image" src={product.img} alt={product.name} />
                        <div>
                            <strong>{product.name}</strong> - ${product.price}
                        </div>
                        <div>
                            <button onClick={() => handleAddToCart(product)}>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                {pages.map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
                ))}
            </div>
        </main>
        </>
    )
}