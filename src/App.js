import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout';
import { Button } from 'antd';
import Login from '@/pages/Login'
import { AuthComponent } from './components/AuthComponent';
import './App.css'
import Publish from './pages/Publish';
import Article from './pages/Article';
import Home from './pages/Home';
import { history } from './utils/history';


function App() {
  return (
    // 路由配置
    <HistoryRouter history={history}>
      <div className="App">
        {/* <Button type="primary">Primary Button</Button> */}
        <Routes>
          {/*创建路由path和组件对应关系 */}
          {/* Layout需要鉴权处理 */}
          <Route path='/' element={
            <AuthComponent>
              <Layout />
            </ AuthComponent>}>
            <Route index element={<Home />}></Route>
            <Route path='article' element={<Article />}></Route>
            <Route path='publish' element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
    
  );
}

export default App;
