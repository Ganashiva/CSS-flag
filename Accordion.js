import React, { useEffect } from "react";
//import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isOpen, setOpen] = useState(false);
  //   const handleClick = () => {
  //     setOpen(!isopen);
  //   };
  //   useEffect(
  //     function () {
  //       setOpen(!isOpen);
  //     },
  //     [isOpen]
  //   );
  return (
    <li className={isOpen && "open"} onClick={() => setOpen(!isOpen)}>
      <div>
        <span>+</span>
        <h2>{title}</h2>
      </div>
      {isOpen && <small>{description}</small>}
    </li>
  );
};

export default Accordion;
