import React, { useState } from "react";
import IconPicker from "./IconPicker";
import * as FeatherIcons from "feather-icons-react";
import "./App.css";

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleIconSelect = (iconName) => {
    setSelectedIcon(iconName);
    setShowPicker(false);
  };

  return (
    <div className="app-body">
      <h1>
        Your Selected Icon : 
        <span> {selectedIcon ? selectedIcon : "None"}</span>
      </h1>
      <div
        className="icon-picker-button"
        role="button"
        tabIndex={0}
        onClick={() => setShowPicker(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setShowPicker(true);
          }
        }}
      >
        {selectedIcon
          ? React.createElement(FeatherIcons[selectedIcon])
          : "Select Icon"}
      </div>
      {showPicker && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select Icon</h2>
            <IconPicker
              rowsInOnePage={6}
              columnsInOnePage={6}
              iconHeight={50}
              iconWidth={50}
              pickerHeight={400}
              pickerWidth={500}
              onSelect={handleIconSelect}
            />
            <div className="modal-actions">
              <button onClick={() => setShowPicker(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
