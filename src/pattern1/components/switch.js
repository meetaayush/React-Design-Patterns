import React from "react";

const Switch = ({ on, onChange }) => {
  return (
    <div>
      <input type="checkbox" checked={on} onChange={onChange} />
    </div>
  );
};

export default Switch;
