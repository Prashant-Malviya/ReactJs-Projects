import { createContext, useEffect, useState }
from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


// step 1 create context
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const navigate = useNavigate();

    console.log("Appcontext rendering")

    // data filling 
    async function fetchBlogPosts(page,tag=null,category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }


        // let url = `${baseUrl}?page=${page}`
        console.log("printing the url");
        try{    
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(error){
            console.log("error");
            console.log("don't corrupt anything just come to the initial stage")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
// fetchBlogPosts();
    function handlePageChange(page){
        navigate({search: `?page=${page}`})
        setPage(page);
    }

    // useEffect(()=>{

    //     fetchBlogPosts();
    // },[]);



    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };
    // step2 : provide value to appcontext
    return <AppContext.Provider value={value}>
                {children}
           </AppContext.Provider>
}
