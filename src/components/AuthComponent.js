// 1. 先判断token是否存在
// 2. 如果存在，就直接正常渲染
// 3. 如果不存在，重定向到登录路由

// 高阶组件: 把一个组件当做另一个组件的参数传入
// 然后通过一定的判断 返回新的组件
import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

function AuthComponent({children}) {
  const isToken = getToken()
  if(isToken) {
    return <>{children}</>
  }else{
    return <Navigate to="/login" replace/>
  }
}

// <AuthComponent><Layout/></ AuthComponent>
export {
  AuthComponent
}

