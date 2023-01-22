import { createBrowserRouter, RouterProvider, createRoutesFromElements , Route} from 'react-router-dom'
import HomePage from './pages/Home';
import ProductsPage from './pages/ProductsPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element:<ProductsPage/> }
])

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage></HomePage>}/>
//     <Route path='/products' element={<ProductsPage></ProductsPage>}/>
//   </Route>
// ) 

// const router = createBrowserRouter(routeDefinitions)


function App() {
  return <RouterProvider router={router} />;
}

export default App;
