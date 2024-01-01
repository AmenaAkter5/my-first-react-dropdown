import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ options, onSelect }) => {
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
    <div className="dropdown relative" ref={dropdownRef}>
      <button
        className="dropdown-toggle flex items-center gap-1 bg-slate-700 py-1.5 px-4 rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown{" "}
        <FiChevronDown
          className={`duration-300 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <ul
        className={`dropdown-menu border mt-2 absolute w-48 bg-white shadow-md rounded-md  transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {isOpen &&
          options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              {typeof option === "string" ? (
                <span>{option}</span>
              ) : (
                <button
                  to={option.to}
                  onClick={() => handleOptionClick(option)}
                  className="text-left w-full"
                >
                  {option.label}
                </button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
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

export default Navbar;
