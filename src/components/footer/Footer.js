import React from "react";
import { useState, useEffect } from "react";

const Footer = () => {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        fetch('/socialData.json')
          .then(response => response.json())
          .then(data => setSocials(data.map(social => ({ ...social, isHovered: false }))))
          .catch(error => console.error('Ошибка при получении соц. сетей::', error));
      }, []);

      const handleMouseOver = (id) => {
        setSocials(prevSocials =>
          prevSocials.map(social =>
            social.id === id ? { ...social, isHovered: true } : social
          )
        );
      };
    
      const handleMouseOut = (id) => {
        setSocials(prevSocials =>
          prevSocials.map(social =>
            social.id === id ? { ...social, isHovered: false } : social
          )
        );
      };

    return (
        <footer className="footer-container">
      <ul className="footer-list">
          {socials.map(social => (
            <li className="footer-item" key={social.id}>
              <a 
                href={social.url}
                className="footer-link"
                onMouseOver={() => handleMouseOver(social.id)}
                onMouseOut={() => handleMouseOut(social.id)}
              >
                <img src={social.isHovered ? social.hoverImage : social.defaultImage} alt={social.name} className="footer-icon" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
}

export default Footer