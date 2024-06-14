import React, { useState } from 'react';
import * as FeatherIcons from 'feather-icons-react';
import './App.css';

const IconPicker = ({ rowsInOnePage, columnsInOnePage, iconHeight, iconWidth, pickerHeight = 500, pickerWidth = 500, onSelect }) => {
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const iconNames = Object.keys(FeatherIcons);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(iconNames.length / iconsPerPage);

  const handleIconClick = (iconName) => {
    onSelect(iconName);
  };

  const iconsToShow = iconNames.slice(currentPage * iconsPerPage, (currentPage + 1) * iconsPerPage);

  return (
    <div className="icon-picker" style={{ height: pickerHeight, width: pickerWidth }}>
      <div
        className="icon-grid"
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
          gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
          gap: '10px',
        }}
      >
        {iconsToShow.map(iconName => (
          <div
            key={iconName}
            className="icon-wrapper"
            style={{ height: iconHeight, width: iconWidth }}
            onClick={() => handleIconClick(iconName)}
          >
            {React.createElement(FeatherIcons[iconName])}
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
        <span className='page'>Page {currentPage + 1} of {totalPages}</span>
        {currentPage < totalPages - 1 && <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
      </div>
    </div>
  );
};

export default IconPicker;
