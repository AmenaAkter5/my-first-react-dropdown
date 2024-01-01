import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import "./Header.css";

const Program = () => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useOutsideClick(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  useEffect(() => {
    if (isDropdownOpen) {
      dropdownRef.current.style.display = "block";
      setTimeout(() => {
        dropdownRef.current.classList.add("active");
      }, 50); // Adding a slight delay for smoother transition
    } else {
      dropdownRef.current.classList.remove("active");
      setTimeout(() => {
        dropdownRef.current.style.display = "none";
      }, 300); // Equal to transition duration
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <>
      <li>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 cursor-pointer py-2 px-2 border-green-300 border"
        >
          PROGRAM <FiChevronDown className="text-2xl pt-1" />
        </button>
        <div
          ref={dropdownRef}
          className={`dropdown-content bg-slate-700 absolute top-16 px-14 py-9`}
        >
          <button onClick={toggleDropdown}>Close Dropdown</button>
          <a className="bg-red-500 px-5 py-4 block" href="https://google.com">
            Hello Google
          </a>
          <a className="bg-red-500 px-5 py-4 block" href="https://google.com">
            Hello Google
          </a>
          <a className="bg-red-500 px-5 py-4 block" href="https://google.com">
            Hello Google
          </a>
        </div>
      </li>
    </>
  );
};
export default Program;
