import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './ImageSwiper.css';

const ImageSwiper = ({ items, darkMode }) => {
  useEffect(() => {
    console.log('Initializing Swiper...');
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      direction: 'horizontal',
    });
    void swiper;

    const thumbContainers = document.querySelectorAll('.thumbContainer');
    thumbContainers.forEach((container, index) => {
      const delay = index * 90;
      container.classList.add('fadeInSlide');
      container.style.animationDelay = `${delay}ms`;

      // Add event listeners for hover effects
      container.addEventListener('mouseover', addHoverEffect);
      container.addEventListener('mouseout', removeHoverEffect);
      container.addEventListener('click', handleClick);
    });

    return () => {
      thumbContainers.forEach((container) => {
        container.removeEventListener('mouseover', addHoverEffect);
        container.removeEventListener('mouseout', removeHoverEffect);
        container.addEventListener('click', handleClick);
      });
    };
  }, [items]);

  // Function to add hover effect
  const addHoverEffect = () => {
    document.body.classList.add('hovering');
  };

  // Function to remove hover effect
  const removeHoverEffect = () => {
    document.body.classList.remove('hovering');
  };

  const handleClick = () => {
    document.body.classList.remove('hovering');
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {items.map((item, index) => (
          <div key={index} className="swiper-slide">
            <Link to={item.link} className="thumbContainer">
              <img src={item.image} alt={item.title} style={{border: `${darkMode ?  '2px solid #F7F3E3':'3px solid #2E242A'}`}}/>
              <div className="projectInfo">
                <h2 className={`serif ${darkMode ? 'dark-mode' : 'light-mode'}`}>{item.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSwiper;
