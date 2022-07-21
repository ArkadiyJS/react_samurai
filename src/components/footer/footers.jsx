import React from 'react';
import s from'./footers.module.css';

function Footer(props) {
    return(
        <div className={s.footer__bar}>
    <div> логотип/фото</div>            footerBar
    <div>контакты</div>
    
        </div>
    )
}

export default Footer;