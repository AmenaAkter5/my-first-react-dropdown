import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./Navbar3.css";
import { useOutsideClick } from "./useOutsideClick";

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <nav>
      <ul className="flex justify-center gap-10">
        <li ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 flex items-center gap-2"
          >
            Dropdown 3{" "}
            <FiChevronDown
              className={`duration-300 transition-transform ${
                isOpen ? "open rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`dropdown absolute mt-3 w-full bg-white shadow-md rounded-md overflow-hidden transition-all ${
              isOpen ? "dropdown-open" : "dropdown-closed"
            }`}
          >
            <div
              className={`dropdown-content flex gap-3 flex-col ${
                isOpen ? "slide-down" : "slide-up"
              }`}
            >
              <a href="">Items 1</a>
              <button>manik</button>
              <a href="">Items 2</a>
              <button>amena</button>
              <a href="">Items 3</a>
              <a href="">Items 4</a>
              <a href="">Items 5</a>
            </div>
          </div>
        </li>

        {/* Other dropdowns */}
      </ul>
    </nav>
  );
};
export default Navbar3;
