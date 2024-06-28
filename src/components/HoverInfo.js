import React from 'react';

const HoverInfo = ({ info, direction }) => {
  const combinedInfo = [...info, ...info, ...info, ...info]; 

  return (
    <div className={`hover-info ${direction}`}>
      <div className="hover-info-content">
        {combinedInfo.map((item, index) => (
          <div key={index} className="hover-info-item">
            {item}
            {index < combinedInfo.length - 1 && <span className="separator"> | </span>}
          </div>
        ))}
      </div>
      <div className="hover-info-content hover-info-content-2">
        {combinedInfo.map((item, index) => (
          <div key={index} className="hover-info-item">
            {item}
            {index < combinedInfo.length - 1 && <span className="separator"> | </span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverInfo;
