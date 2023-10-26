import './App.css'
import  { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import { filterData } from "../data";
import Cards from './Component/Cards';
import Filter from "./Component/Filter";
// import { apiUrl } from "../data";
import {apiUrl} from '../data'
import Shimmer from "./Component/Shimmer";
import { toast } from "react-toastify";

function App() {
  const [cources, setCources] = useState([]);
  const [loading, setLoading] = useState(true); //Loader a refrace time
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const responce = await fetch(apiUrl);
      const output = await responce.json();
      setCources(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
       <div className="main-container">
       <div className="app-conatiner">
         <Header />
         <Filter
           filterData={filterData}
           category={category}
           setCategory={setCategory}
         />
         <div className="loade_card">
           {loading ? (
             <Shimmer />
           ) : (
             <Cards cources={cources} category={category} />
           )}
         </div>
        
       </div>
     </div>
    
  )
}

export default App




// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./Component/Header";
// import { filterData } from "./data";
// import Cards from "./Component/Cards";
// import Filter from "./Component/Filter";
// import { apiUrl } from "./data";
// import Shimmer from "./Component/Shimmer";
// import "./app.css";

// const Contant = () => {
//   const [cources, setCources] = useState([]);
//   const [loading, setLoading] = useState(true); //Loader a refrace time
//   const [category, setCategory] = useState(filterData[0].title);

//   async function fetchData() {
//     setLoading(true);
//     try {
//       const responce = await fetch(apiUrl);
//       const output = await responce.json();
//       setCources(output.data);
//     } catch (error) {
//       toast.error("Network me koi dikkat hai");
//     }
//     setLoading(false);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div className="main-container">
//       <div className="app-conatiner">
//         <Header />
//         <Filter
//           filterData={filterData}
//           category={category}
//           setCategory={setCategory}
//         />
//         <div className="loade_card">
//           {loading ? (
//             <Shimmer />
//           ) : (
//             <Cards cources={cources} category={category} />
//           )}
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Contant />);