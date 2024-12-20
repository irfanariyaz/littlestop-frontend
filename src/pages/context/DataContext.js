import React,{ createContext, useEffect,useState} from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../admin/axiosInstance";
//create context
export const DataContext = createContext();

//provider componenet
export const DataProvider = ({ children})=>{
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);
    const [brands,setBrands] = useState([]);
    const [pageNo,setPageNo] = useState(0);
    const [recordCount,setPageSize] = useState(20);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isLastSearchPage,setIsLastsearchPage] = useState(false);
    const [searchPageNo,setSearchPageNo] = useState(0);
    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
    // Get the category from query parameters
      const category = searchParams.get("category");
    const searchTerm = searchParams.get("searchTerm");
    console.log("category",category);
    console.log("searchTerm", searchTerm);
    console.log("page No",pageNo);

    //fetch initial data
    useEffect(()=>{
        const fetchData = async () => {
            try {
                if(category&& !searchTerm ){
                    const response = await axiosInstance.get(`/api/v1/products/category/${category}/${pageNo}/${recordCount}`);
                    const {products,last} = response.data.data;
                    console.log('called category endpoint')
                    setProducts((prev)=>{
                        return [...prev,...products]
                    });
                    setIsLastPage(last);
                }
                else if(searchTerm){
                    const response = await axiosInstance.get(`/api/v1/products/search/${searchTerm}/${pageNo}/${recordCount}`);
                    const {products,last} = response.data.data;
                    console.log('called search endpoint',response.data)
                    setProducts((prev)=>{
                        return [...prev,...products]
                    });
                    setIsLastPage(last);
                    
                }
                else{
                    const [productsResponse, categoriesResponse,brandResponse] = await Promise.all([
                        axiosInstance.get(`/api/v1/products/all/${pageNo}/${recordCount}`), // Replace with your API endpoint
                        axiosInstance.get(`/api/v1/categories/all`), // Replace with your API endpoint
                        axiosInstance.get(`/api/v1/brands/all`) // Replace with your API endpoint
                    
                    ]);
                    const{products:newProducts,last}= productsResponse.data.data;
                    console.log('called all products endpoint',products)
                    setProducts((prev)=>{
                        return [...prev,...newProducts]
                    });
                    setIsLastPage(last);
                    setCategories(categoriesResponse.data.data);
                    setBrands(brandResponse.data.data);
                }
               
            } catch (error) {
                alert(error.response.data.message);
              console.error('Error fetching products:', error);
            }
          };
        
          fetchData();
        
    },[pageNo,category,searchTerm])

    // Reset products when category or searchTerm changes
  useEffect(() => {
    setProducts([]);
    setPageNo(0);
    setIsLastPage(false);
  }, [category, searchTerm]);

    const loadmoreProducts = ()=>{
        setPageNo(pageNo+1)
    }
   
    
    const handleClick = async() => {  
        
        
    };
    return(
        <DataContext.Provider value={{products,setProducts,categories,setCategories,
                                    loadmoreProducts,isLastPage,pageNo,recordCount,
                                    searchPageNo,isLastSearchPage,
                                    searchTerm,handleClick,setIsLastsearchPage
                                    ,brands,setBrands,setPageNo}}>
            {children}
        </DataContext.Provider>
    )
}
