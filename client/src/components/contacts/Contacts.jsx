import { useContext, useEffect, useState } from 'react';
import contactContext from '../../context/contact/contactContext';

import './style.css';

const Contacts = () => {
  const { contacts,favourites,loading, getContacts} = useContext(contactContext);
  //const [favouriteToggle, setfavouriteToggle] = useState(false)
  // const [activeIndices, setActiveIndices] = useState(new Set())
  const [active, setActive] = useState(false);
  // const titles = favourites.map(favourite => favourite.title);
  // console.log(titles);

  useEffect(() => {
    const fetchContacts = async() => {
      await getContacts()
    }
    fetchContacts()
    console.log(contacts);
  }, [])
  
  console.log(contacts);

  // console.log(contacts[0].publishedAt)
  
  const handleClick = (headline) => {
    // addcontactsToRead(headline);
  }
  // const manipulateIndices = (index) => {
  //   let newIndices = new Set(activeIndices);
  //   console.log(newIndices);
  //   activeIndices.has(index) ? newIndices.delete(index) : newIndices.add(index);
  //   console.log(newIndices);
  //   setActiveIndices(newIndices);
  // }
  // const addFavourite = (headline,index,e) => {
  //   //setfavouriteToggle(!favouriteToggle);
  //   e.stopPropagation();
  //   //manipulateIndices(index)
  //   console.log(headline.favourite);
  //   addToFavourites(headline);
  // }

  // const removeFavourite = (headline,index,e) => {
  //   //setfavouriteToggle(!favouriteToggle)
  //   e.stopPropagation();
  //   //manipulateIndices(index)
  //   console.log(headline.favourite);
  //   removeFromFavourites(headline);
  // }

  const obtainLength = (contacts) => {

    return contacts.length % 2 === 0 ? contacts.length/2 : contacts.length/2 + 1
  }

  if(loading) return <div style={{fontSize: 'var(--fs-1)',padding: '40px',marginTop:"50px"}}>Loading...</div>
  return (
    <div className="contacts-minimal">
      <div className="contacts-showcase">
        <h2 className="title"> Contacts</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            {
              contacts?.slice(0,obtainLength(contacts)).map((contact,index) => (
                <div className={`showcase ${active ? 'active': ''}`} key={index} onClick={() => {
                  handleClick(contact);
                  setActive(true)
                  }}>
                  {/* <a className="showcase-img-box">
                    <img src={contact.urlToImage} alt="contact image" width="70" height="70" className="showcase-img" />
                  </a> */}
                  <div className="showcase-content">
                    <div>
                      <h4 className="showcase-title">{contact.name}</h4>
                    </div>
                    <a href="#" className="showcase-category">{contact.email}</a>
                    <div className="price-box">
                      <p className="price">{contact.phone}</p>
                        
                      <div className='star'>
                        
                        {/* {
                          titles.includes(headline.title)
                          ? <ion-icon name="star" onClick={(e) => removeFavourite(headline,index,e)} ></ion-icon >
                          : <ion-icon name="star-outline" onClick={(e) => addFavourite(headline,index,e)}></ion-icon>
                        } */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/* <div className="showcase-container">
            { contacts.slice(obtainLength(contacts),contacts.length).map((headline,index) => (
                <div className="showcase" key={index} onClick={() => handleClick(headline)}>
                  <a href="#" className="showcase-img-box">
                    <img src={headline.urlToImage} alt='headline image' width="70" height="70" className="showcase-img"/>
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{headline.title}</h4>
                    </a>

                    <a href="#" className="showcase-category">{headline.source.name}</a>
                    <div className="price-box">
                      <p className="price">{convertTime(headline.publishedAt)}</p>
                        
                      <div className='star'>
                        {
                          titles.includes(headline.title)
                          ? <ion-icon name="star" onClick={(e) => removeFavourite(headline,index,e)} ></ion-icon >
                          : <ion-icon name="star-outline" onClick={(e) => addFavourite(headline,index,e)}></ion-icon>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))  
            }
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Contacts