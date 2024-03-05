import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Work from './pages/work/Work'
import NotFound from './components/NotFound'
import WorkDetails from './pages/work/WorkDetails'

import './server.ts'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='About' element={<About />} />
    <Route path='Web?' element={<Blog />} />
    <Route path='Work' element={<Work />} />
    <Route path='Work/:id' element={<WorkDetails />} />

    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App
