import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const TravellerType = () => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0, scale: 1 },
    closed: { opacity: 0, y: -10, scale: 0.9 },
  };

  useOutsideClick(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <li>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 cursor-pointer py-2 px-2 border-green-300 border"
      >
        TRAVELLER TYPE <FiChevronDown className="text-2xl pt-1" />
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            ref={dropdownRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className={`flex flex-col gap-3 border border-red-500 px-10 absolute top-16 bg-slate-700`}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeDropdown}>Close Dropdown</button>
            <a className="bg-red-500 px-5 py-4" href="https://google.com">
              Hello Google
            </a>
            <a className="bg-red-500 px-5 py-4" href="https://google.com">
              Hello Google
            </a>
            <a className="bg-red-500 px-5 py-4" href="https://google.com">
              Hello Google
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default TravellerType;
