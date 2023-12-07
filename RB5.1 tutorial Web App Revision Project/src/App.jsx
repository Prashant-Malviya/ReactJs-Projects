import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./Components/Data";
import { toast } from 'react-toastify'
import Spinner from "./Components/Spinner";

function App() {
  const [cardInfo, setCardInfo] = useState([]);
  const [category,setCategory] =  useState(filterData[0].title);
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const rpData = await response.json();

        setCardInfo(rpData.data);
      } catch (error) {
        console.log("something wrong inside the api call");
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  // console.log(cardInfo)

  return (
    <div className="min-h-screen flex flex-col bg-rose-200">
      {/* Navbar  */}
      <div>
        <Navbar />
      </div>

      <div>
        <Filter 
        filterData={filterData}
        category = {category}
        setCategory = {setCategory}
         />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       { loading ? (<Spinner />) : ( <Cards cardInfo={cardInfo} category = {category}/> )}
      </div>
    </div>
  );
}

export default App;
