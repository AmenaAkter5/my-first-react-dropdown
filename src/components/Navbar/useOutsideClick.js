import { useEffect } from "react";

export const useOutsideClick = (dropdownRef, callback) => {
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
           callback()
          }
        };
    
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, []);
}