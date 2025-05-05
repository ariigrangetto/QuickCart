import { useContext, useId } from "react";
import { FilterContext } from "../context/filterContext";
import "./Filter.css"
export default function Filter(){
    const {filters, setFilters} = useContext(FilterContext);

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) =>{
        setFilters(prev => ({
            ...prev,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) =>{
        setFilters(prev => ({
            ...prev,
            category: e.target.value
        }))
    }

    return(

        <section className='filters'>
    
        <div>
          <label htmlFor={minPriceFilterId}>Precio:</label>
          <input
            type='range'
            id={minPriceFilterId}
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
  
        <div>
          <label className="category" htmlFor={categoryFilterId}>Categoría</label>
          <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value='all'>Todas</option>
            <option value='tecnology'>Tecnología</option>
            <option value='home'>Hogar</option>
            <option value="clothes and accessories">Ropa y accesorios</option>
            <option value="entertainment">Entretenimiento</option>
          </select>
        </div>
  
      </section>
    )
}