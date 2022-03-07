import React from 'react'
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contactOption, socialLinks } from '../../mockData/mockdata';


const totalView = 777777777;
const currentOnline = 1321;


function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="contact-wrapper">
                <h1>LinkNeverPhai</h1>
                <p>Cộng đồng chia sẻ nội dung, kiến thức hữu ích về công nghệ và giải trí.</p>
                <h3>Liên hệ</h3>
                <ul>
                    {contactOption.map((contact, index) => {
                        return (
                            <li key={index}>
                                <FontAwesomeIcon icon={contact.icon} />
                                <p>{contact.context}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="fanpage-wrapper">
                <h3>Fanpage</h3>
                <h3>Join us on Facebook</h3>
                {/* <iframe src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDMs.Cloud%2F&tabs&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"} width="0" height="0" style={"border:none;overflow:hidden"} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
            </div>
            <div className="stats-social-wrapper">
                <h3>{totalView}<br></br> tổng lượt truy cập</h3>
                <h3>{currentOnline}<br></br> đang trực tuyến</h3>
                <h3>Mạng xã hội</h3>
                <p>Theo dõi các mạng xã hội để có được những thông tin mới nhất</p>
                <ul className="social-list">
                    {socialLinks.map((social, index) => {
                        return (
                            <li key={index}>
                                <FontAwesomeIcon icon={social.icon} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer