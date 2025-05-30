import { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({children}){
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 15.00
    })

    return(
        <FilterContext.Provider value={{filters, setFilters}}>
            {children}
        </FilterContext.Provider>
    )
}