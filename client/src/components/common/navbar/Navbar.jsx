import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../../../context/auth/authContext';
import ContactContext from '../../../context/contact/contactContext';
import './style.css';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useContext(authContext);
  const { clearContacts } = useContext(ContactContext);

  const [isHoveringUser, setIsHoveringUser] = useState(false);
  const navigate = useNavigate();
  const handleLoginMouseOver = () => {
    setIsHoveringUser(true);
  };

  const handleLoginMouseOut = () => {
    setIsHoveringUser(false);
  };
  const HoverableDivLogin = ({message}) => {
    return (
      <div className='login-window' >
        <div className='cart-wrapper'>
          <p>
            {isAuthenticated ?`${message.para}`: 'Click login or the button below'}
          </p>
          <Link 
            to={isAuthenticated ? '/' : '/login'} 
            className='buy-now'
            onClick={() => {if(isAuthenticated) logout()}}
          >
            {isAuthenticated? `${message.button}`: 'Login'}
          </Link>
          
        </div>
      </div>
    )
  }
  return (
    <div className="header-main">
      <div className="container">

        <a href='/' className="header-logo">
          <h1>kisanSMS</h1>
        </a>

        <div className="header-search-container">
          <input  type="search" name="search" className="search-field" placeholder="Enter news headlines..."/>

          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          
          
        </div>

        <div className="header-user-actions">

          <button className="action-btn" style={{fontSize:"32px"}}
            onMouseOver={handleLoginMouseOver} onMouseOut={handleLoginMouseOut}
          >
            {isAuthenticated 
              ?(
                <>
                  <ion-icon name="person-outline"></ion-icon>
                  <p className='username'>{user?.name}</p>
                </>
              ): <p className='loginText' onClick={() => navigate('/login') }>Login</p> 
            }
            {isHoveringUser && <HoverableDivLogin message={{para:`Email: ${user?.email}`,button:'Logout'}}/>}
          </button>



          <button className="action-btn" >
            <ion-icon name="star-outline"></ion-icon>
            <span className="count">0</span>
          </button>

          
          
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
