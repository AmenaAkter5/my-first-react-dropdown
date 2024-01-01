// import { useEffect } from 'react';

// export const useOutsideClick = (ref, callback) => {
//     const handleClick = (event) => {
//         if (
//             ref.current &&
//             !ref.current.contains(event.target) &&
//             event.target !== ref.current.previousSibling
//         ) {
//             callback();
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClick);
//         return () => {
//             document.removeEventListener('mousedown', handleClick);
//         };
//     }, [ref, callback]);
// };


import { useEffect } from 'react';

export const useOutsideClick = (ref, callback) => {
    const handleClick = (event) => {
        if (
            ref.current &&
            !ref.current.contains(event.target) &&
            event.target !== ref.current.previousSibling
        ) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [ref, callback]);
};
