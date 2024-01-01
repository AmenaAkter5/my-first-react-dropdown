import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./NewHeader.css";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-toggle flex items-center gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown{" "}
        {/* <BsArrowDownCircle
          className={` duration-300 transition-all ${
            isOpen ? "open  rotate-180 " : ""
          }`}
        /> */}
        <FiChevronDown
          className={` duration-300 transition-all ${
            isOpen ? "open  rotate-180 " : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {typeof option === "string" ? (
                <span>{option}</span>
              ) : (
                <button
                  to={option.to}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
