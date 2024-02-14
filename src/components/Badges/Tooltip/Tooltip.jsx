/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {Tooltip as ReactTooltip} from 'react-tooltip';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative">
      <div data-tip={text}>{children}</div>
      <ReactTooltip
       
        className="bg-gray-800 text-white p-2 rounded text-xs"
        effect="solid"
      />
    </div>
  );
};

export default Tooltip;
