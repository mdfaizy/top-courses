import "./Filter.css";
const Filter = (props) => {
  let  filterData=props. filterData;
  // let category = props.category;
  
  let setCategory = props.setCategory;
  //  function filterHandler(title){
  //   console.log(category);
  //     console.log(title);
  //   setCategory(title); 
  //   }
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="cards_filter">
      {filterData.map((data) => {
        return (
          <button key={data.id} onClick={() => filterHandler(data.title)}>
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
