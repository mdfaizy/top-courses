// import "./Card.css";
// import { FcLike, FcLikePlaceholder } from "react-icons/fc";
// import { toast } from "react-toastify";
// const Card = (props) => {
//   let cources = props.cources;

//   let likedCourses = props.likedCourses;
//   let setLikedCourses = props.setLikedCourses;

//   function clickHandler() {
//     // Logic
//     if (likedCourses.includes(cources.id)) {
//       // pahle se liked
//       setLikedCourses((prev) => prev.filter((cid) => cid !== cources.id));
//       toast.warning("Liked Removed");
//     } else {
//       // pahle se like nahi hai course
//       // insert karne h y course like course me
//       if (likedCourses.length === 0) {
//         setLikedCourses([cources.id]);
//       } else {
//         setLikedCourses((prev) => [...prev, cources.id]);
//       }
//       toast.success("Liked Successfully");
//     }
//   }

//   return (
//     <div className="main-card">
//       <div className="item_card">
//         <div className="img">
//           <img src={cources.image.url}></img>
//         </div>
//         <div className="card_icons">
//           <button className="icons-fc" onClick={clickHandler}>
//             {!likedCourses.includes(cources.id) ? (
//               <FcLikePlaceholder fontSize="1.75rem" />
//             ) : (
//               <FcLike fontSize="1.75rem" />
//             )}
//           </button>
//         </div>
//         <div className="cource-name">
//           <p className="text_cource">{cources.title}</p>
//           <p className="p-text">
//             {cources.description.length > 100
//               ? cources.description.substring(0, 100) + "..."
//               : cources.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Card;

import "./Card.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let cources = props.cources;

  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // Logic
    if (likedCourses.includes(cources.id)) {
      // pahle se liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== cources.id));
      toast.warning("Liked Removed");
    } else {
      // pahle se like nahi hai course
      // insert karne h y course like course me
      if (likedCourses.length === 0) {
        setLikedCourses([cources.id]);
      } else {
        setLikedCourses((prev) => [...prev, cources.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="main-card">
      <div className="item_card">
        <div className="img">
          <img src={cources.image.url} alt={cources.title} />
        </div>
        <div className="card_icons">
          <button className="icons-fc" onClick={clickHandler}>
            {!likedCourses.includes(cources.id) ? (
              <FcLikePlaceholder fontSize="1.75rem" />
            ) : (
              <FcLike fontSize="1.75rem" />
            )}
          </button>
        </div>
        <div className="cource-name">
          <p className="text_cource">{cources.title}</p>
          <p className="p-text">
            {cources.description.length > 100
              ? cources.description.substring(0, 100) + "..."
              : cources.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
