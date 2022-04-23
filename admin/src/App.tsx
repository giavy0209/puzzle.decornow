import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import { Category, Login, Order, Product, Upload } from 'pages';
import storage from 'helpers/storage';

function App() {
  const dispatch = useDispatch()
  const [currentUrl, setCurrentUrl] = useState('/');
  const location = useLocation();
  const navigate = useNavigate();
  const token = storage.getToken()
  const handleClick = useCallback(selectedItem => {
    setCurrentUrl(selectedItem.key);
    navigate(selectedItem.key);
  }, []);
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location])
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>
      <ToastContainer />
      <div id="App">
        {!token && <div style={{ position: 'fixed', top: 10, right: 10 }} onClick={() => navigate('/admin/login')} className="logout">Login</div>}
        {token &&
          <>
            <div className="logout" style={{ position: 'fixed', top: 10, right: 10 }} onClick={logout}>Logout</div>
            <Menu
              onClick={handleClick}
              mode="horizontal"
              selectedKeys={[currentUrl]}
            >
              <Menu.Item key='/admin/upload'>Hình ảnh</Menu.Item>
              <Menu.Item key='/admin/category'>Danh mục</Menu.Item>
              <Menu.Item key='/admin/product'>Sản phẩm</Menu.Item>
              <Menu.Item key='/admin/order'>Đơn hàng</Menu.Item>
            </Menu>
          </>}
        <Routes>
          <Route path='/admin/upload' element={<Upload />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/product' element={<Product />} />
          <Route path='/admin/category' element={<Category />} />
          <Route path='/admin/order' element={<Order />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
