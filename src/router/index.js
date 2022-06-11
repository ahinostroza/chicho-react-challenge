import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import FirstChallenge from '../containers/FirstChallenge'
import SecondChallenge from '../containers/SecondChallenge'
import ThirdChallenge from '../containers/ThirdChallenge'
import FourthChallenge from '../containers/FourthChallenge'

import Home from '../containers/Home'
import NotFound from '../containers/NotFound'

const Router = () => (
  <Routes>
    <Route element={<App />}>
      <Route element={<Home />} path='/' />
      <Route element={<FirstChallenge />} path='/first' />
      <Route element={<SecondChallenge />} path='/second' />
      <Route element={<ThirdChallenge />} path='/third' />
      <Route element={<FourthChallenge />} path='/fourth' />
      <Route element={<NotFound />} path='/not-found' />
      <Route element={<Navigate to='/not-found' />} path='*' />
    </Route>
  </Routes>
)

export default Router
