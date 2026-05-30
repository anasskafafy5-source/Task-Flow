import { createContext, useCallback, useContext, useMemo, useState } from "react";


const SearchContext = createContext();

function SearchProvider({children}){
    const [searchQuery , setSearchQuery] = useState("");


    const handleSearch = useCallback((value) => {
        setSearchQuery(value);
     }, []);

     const clearSearch = useCallback(() => {
        setSearchQuery("");
      }, []);

      const value = useMemo(() => ({
         searchQuery,
         handleSearch,
         clearSearch,
         }), [searchQuery, handleSearch, clearSearch]);

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}


function useSearchContext(){
    const context = useContext(SearchContext);
    if(!context) throw new Error("useSearchContext must be used within a SearchProvider");
    return context;
}

export {SearchProvider , useSearchContext};