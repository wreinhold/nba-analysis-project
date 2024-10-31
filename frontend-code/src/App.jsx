// Import list
import React from 'react';
import AppRoutes from './routes';
import './App.css';

const App = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

// function App() {
//   return (
//     <Router>
//       <ResponsiveAppBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/analysis" element={<Analysis />} />
//         <Route path="/mlanalytics" element={<MLAnalytics />} />
//         {/* Define more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

export default App;