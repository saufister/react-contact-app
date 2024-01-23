import React from 'react';
function ContactItemImage({imageUrl}){
    return(
        <div className="contact-item__image">
            <img className="contact-item__image" src={imageUrl} alt="contact avatar"/>
        </div>
    );  

}
export default ContactItemImage;