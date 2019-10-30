import React from 'react';
// import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

function App() {
    // const size = useWindowSize();
    return (
    <div className="App">
        <Dashboard/>
    </div>
  );
}
// function useWindowSize() {
//     const isClient = typeof window === 'object';
//     function getSize() {
//         return {
//             width: isClient ? window.innerWidth : undefined
//         };
//     }
//
//     const [windowSize, setWindowSize] = useState(getSize);
//
//     useEffect(() => {
//         if (!isClient) {
//             return false;
//         }
//
//         function handleResize() {
//             setWindowSize(getSize());
//         }
//
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
//
//     return windowSize;
// }

export default App;
