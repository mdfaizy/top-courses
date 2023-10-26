
import Card from "./Card";
import "./Cards.css";
import { useState } from "react";
const Cards = (props) => {
  let cources = props.cources;
  console.log(props.courses);
  let category = props.category;
  // console.log(cources);
  const [likedCourses, setLikedCourses] = useState([]);

  function getCources() {
    // if(category==="All"){
    let allCourses = [];
    Object.values(cources).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
    // }else{
    //   return cources[category];
    // }
  }
  return (
    <div className="cards_items">
      {getCources().map((cources) => {
        return (
          <Card
            key={cources.id}
            cources={cources}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
      {
        // getCources().map((cources) => (
        //   <Card key={cources.id} cources={cources} />
        // ))
      }
    

    </div>
  );
};

export default Cards;
