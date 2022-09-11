import { useEffect, useRef, useState } from 'react';
import Options from '../options/Options';
import './style.css';

const Sidebar = ({openSidebar,closeSidebar,sidebarVisible}) => {
  // const { sources,favourites ,addSources,addHeadlines } = useContext(GlobalContext);

  const [open, setOpen] = useState(openSidebar);
  const sidebarOriginal = useRef(null);
  // const dispatch = useDispatch();

  useEffect(() => {
    setOpen(openSidebar);

    open && sidebarVisible 
      ? sidebarOriginal.current.classList.add('active') 
      : sidebarOriginal.current.classList.remove('active') 

  
  
  },[openSidebar,open,sidebarVisible])

  


  // const handleAllSources = async() => {
  //   const {articles:allHeadlines} = await newsServices.getHeadlines('us');
  //   console.log(allHeadlines);
  //   addHeadlines(allHeadlines);
  // }

  return (
    <>
      <div ref={sidebarOriginal}  className='sidebar '>
        <div className="sidebar-category">
          <div className="sidebar-top">
            {/* <button className="sidebar-title" onClick={handleAllSources}>All Sources &gt;</button> */}
            <button 
                className="sidebar-close-btn" data-mobile-menu-close-btn 
                
                onClick={() => {
                  setOpen(!open)
                  closeSidebar(!open)
                }}
              >
                <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <Options/>
        </div>
        {/* <div className="side-menu-footer">
          <button className="user-info" onClick={() => addHeadlines(favourites)}>
            <h5>Favourites &gt;</h5>
            <p>{favourites.length}</p>
          </button>
        </div> */}
      </div>
    </>
  )
}

export default Sidebar
