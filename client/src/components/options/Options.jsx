import { useState } from "react";

import "./style.css";

const Options = () => {

  
  const [error, setError] = useState(null);
  
  //const {sources:sourcesData,addSources,addHeadlines } = useContext(GlobalContext);
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  // const dispatch = useDispatch();
  // const sourcesData = useSelector((state) => state.sources.sources);
  

  // useEffect(() => {
  //   getNewsSource();
  // }, [])


  // const getNewsSource = async() => {
  //   setIsFetching(true);
  //   try {
  //     let {sources:newsSources} = await newsServices.getSources('us');
  //     // console.log(newsSources);
  //     addSources(newsSources);
      
  //     setIsFetching(false);

  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }
  // const getSourceHeadlines = async(source) => {
  //   try {
  //     let {articles:headlines} = await newsServices.getHeadlinesBySource(source)
  //     console.log(headlines);
  //     addHeadlines(headlines);

  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }
  // if (isFetching) return <h5 style={{padding: "15px",marginBottom: "300px",fontSize: "18px"}}>Loading...</h5>;
  // if (error){
  //   return (
  //     <div style={{flex:1, justifyContent:"center", alignItems:"center"}}>
  //       <p style={{fontSize: "16px"}}>
  //         {`${error.message}`}
  //       </p>
  //       <p style={{color: "blue", fontSize: 16, padding: 8}} onPress={getNewsSource}>Tap to retry</p>
  //     </div>
  //   );
  // }
  const options = [ 'Contacts','Messages']

  return (
    <ul role='list' className="sidebar-menu-category-list has-scrollbar">
      {
        options.map((option,index) => (
          <li className={`sidebar-menu-category ${active && activeIndex === index ? 'active': ''}`} key={index}>
            
            <p className='menu-title ' onClick={() => {
              setActive(true);
              setActiveIndex(index);
              
            }}>
              {option}
            </p>
          </li>
        ))
      }
      
    </ul>
  )
}

export default Options
