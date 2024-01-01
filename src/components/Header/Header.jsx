import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import "./Header.css";
import Program from "./Program";
import TravellerType from "./TravellerType";
// import { HiOutlineChevronDown } from "react-icons/hi";
const Header = () => {
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
    <div className="fixed top-0 left-0 right-0 mx-auto flex justify-between items-center gap-16 text-white my-5 max-w-7xl w-full">
      <div className="text-2xl font-medium">
        Travel <span className=" text-gray-300">App</span>
      </div>
      <div>
        <ul className="flex justify-between gap-6 font-medium text-base bg-white bg-opacity-20 rounded-lg py-3 px-16">
          <TravellerType />
          <li>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 cursor-pointer py-2 px-2 border-green-300 border"
            >
              COUPLE <FiChevronDown className="text-2xl pt-1" />
            </button>
            <div
              ref={dropdownRef}
              className={`dropdown-content bg-slate-700 absolute top-16 px-14 py-9`}
            >
              <button onClick={toggleDropdown}>Close Dropdown</button>
              <a
                className="bg-red-500 px-5 py-4 block"
                href="https://google.com"
              >
                Hello Google
              </a>
              <a
                className="bg-red-500 px-5 py-4 block"
                href="https://google.com"
              >
                Hello Google
              </a>
              <a
                className="bg-red-500 px-5 py-4 block"
                href="https://google.com"
              >
                Hello Google
              </a>
            </div>
          </li>
          <Program />
          <li>
            <button className="flex items-center gap-1 cursor-pointer py-2 px-2 border-green-300 border">
              {" "}
              MOUNTAINING <FiChevronDown className="text-2xl pt-1" />
            </button>
          </li>
          <li>
            <button className="flex items-center gap-1 cursor-pointer py-2 px-2 border-green-300 border">
              SET LOCATION <FiChevronDown className="text-2xl pt-1" />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <p className="">My Acoount</p>
      </div>
    </div>
  );
};

export default Header;
