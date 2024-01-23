/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line react/prop-types
function ContactItemBody({name,tag}){
    return(
        <div className="contact-item__body">
            <h3 className = 'contact-item__title'>{name}</h3>
            <p className = 'contact-item-__username'>{tag}</p>
        </div>
    );
}
export default ContactItemBody;

// Pengingat: Meskipun dengan JSX kita tidak perlu menggunakan keyword React ketika menggunakannya, tetapi tetap lakukan impor module React. Hal ini untuk menghindari “kemungkinan” eror yang terjadi ketika Babel hendak mengubah kode JSX menjadi kode JavaScript biasa (terutama bila Anda menggunakan React versi < 16).