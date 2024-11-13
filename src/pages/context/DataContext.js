import React,{Children, createContext, useEffect,useState} from "react";
import axios from "axios";

//create context
export const DataContext = createContext();

//provider componenet
export const DataProvider = ({ children})=>{
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);
    const [pageNo,setPageNo] = useState(0);
    const [recordCount,setPageSize] = useState(4);
    const [isLastPage, setIsLastPage] = useState(false);

    //fetch initial data
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const [productsResponse, categoriesResponse] = await Promise.all([
                    axios.get(`/api/v1/products/all/${pageNo}/${recordCount}`), // Replace with your API endpoint
                    axios.get(`/api/v1/categories/all`) // Replace with your API endpoint
                ]);
                console.log("request sent from context",pageNo,"size:",recordCount)
                const{products:newProducts,isLast}= productsResponse.data.data;
                setProducts((prev)=>{
                    return [...prev,...newProducts]
                });
                setIsLastPage(isLast);
                setCategories(categoriesResponse.data.data);
            } catch (error) {
                alert(error.response.data.message);
              console.error('Error fetching products:', error);
            }
          };
          fetchData();
    },[pageNo])
    const loadmoreProducts = ()=>{
        setPageNo(pageNo+1)
    }
    return(
        <DataContext.Provider value={{products,setProducts,categories,setCategories,loadmoreProducts,isLastPage}}>
            {children}
        </DataContext.Provider>
    )
}
