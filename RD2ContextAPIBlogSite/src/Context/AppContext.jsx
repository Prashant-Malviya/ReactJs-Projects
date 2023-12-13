import { createContext, useState }
from "react";
import { baseUrl } from "../baseUrl";


// step 1 create context
export const AppContext = createContext();

export default function AppContextProvider({Children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    console.log("app context rendering")

    // data filling 
    async function fetchBlogPosts(pag=1){
        setLoading(true);
        try{
            let url = `${baseUrl}?page=${page}`
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

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
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
                {Children}
           </AppContext.Provider>
}
