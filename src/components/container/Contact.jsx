import React,{useState} from 'react'
import ContactItem from '../pure/ContactItem'
import { Contact } from '../../models/contact.class'

function ContactComponent() {

    const defaultContact = new Contact('example', 'example lastname', 'default@default.com', false)

    const [contact, setContact] = useState(defaultContact);


    const login =()=>{
        setContact({
            ...contact,
            online: contact.online ? false : true
        })
    }

  return (
    <>
        <ContactItem 
                    name={contact.name} 
                    lastName={contact.lastName}
                    email={contact.email}
                    online={contact.online}
                    login={login}/>
    </>
  )
}

export default ContactComponent