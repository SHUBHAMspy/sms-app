import Contacts from '../components/contacts/Contacts'
import Sidebar from '../components/sidebar/Sidebar'
import './style.css'

const ContactsSection = () => {
  return (
    <div className='contacts-container'>
      <div className='container'>  
        <Sidebar/>
        <div className='contacts-box'>
          <Contacts/>
        </div>
      </div>

    </div>
  )
}

export default ContactsSection