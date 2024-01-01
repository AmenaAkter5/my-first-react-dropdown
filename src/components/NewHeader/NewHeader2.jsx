import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./NewHeader2.css";

const NewHeader2 = ({ options, onSelect }) => {
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
    <div className="dropdown my-16 w-52" ref={dropdownRef}>
      <button
        className="dropdown-toggle flex items-center gap-4 py-5 px-5 rounded bg-slate-700 text-white mb-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        Dropdown dorkar{" "}
        <FiChevronDown
          className={` duration-300 transition-all ${
            isOpen ? "open  rotate-180 " : ""
          }`}
        />
      </button>

      <ul
        className={`bg-white duration-300 transition-all ${
          isOpen ? "open-dropdown" : "close-dropdown"
        }`}
      >
        {options.map((option, index) => (
          <li
            className="bg-green-500 mx-4"
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {typeof option === "string" ? (
              <span>{option}</span>
            ) : (
              <button to={option.to} onClick={() => handleOptionClick(option)}>
                {option.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

NewHeader2.propTypes = {
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

export default NewHeader2;
