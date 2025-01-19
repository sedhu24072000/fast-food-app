import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './ui/Home'
import Cart from "./features/cart/Cart"
import Menu,{loader as menuLoader} from './features/menu/Menu'
import Order,{loader as orderLoader} from './features/order/Order'
import CreateOrder,{action as createActionOrder} from './features/order/CreateOrder'
import AppLayout from "./ui/AppLayout"
import Error from './ui/Error'

const route = createBrowserRouter([
  {
    element : <AppLayout></AppLayout>,
    errorElement : <Error></Error>,
    children :[{
      path:'/',
      element : <Home></Home>
    },
    {
      path:'/cart',
      element : <Cart></Cart>
    },
    {
      path:'/menu',
      element : <Menu></Menu>,
      loader: menuLoader,
      errorElement : <Error></Error>
    },
    {
      path : '/order/new',
      element : <CreateOrder></CreateOrder>,
      action: createActionOrder
    },
    {
      path : '/order/:orderId',
      element : <Order></Order>,
      loader:orderLoader
    }]
  }

])

function App() {
  return <RouterProvider router={route}></RouterProvider>
}

export default App
