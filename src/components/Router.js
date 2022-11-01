import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
function Router() {
  return (

    <>
      <Routes>
        <Route path="HomePage" element={<HomePage />}>
        </Route>
      </Routes></>


  )


}
export default Router;