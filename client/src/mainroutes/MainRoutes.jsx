import { Route, Routes } from 'react-router-dom'
import DashboardPages from '../pages/DashboardPages'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPages />} />
      <Route path="/product" element={<DashboardPages />} />
    </Routes>
  );
}

export default MainRoutes