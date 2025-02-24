import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useSelector } from 'react-redux';
import Spinners from './components/Spinners';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import NotificationPage from './pages/NotificationPage';


function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
        {loading ? (<Spinners />) : (<Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path='/apply-doctor' element={
            <ProtectedRoute>
              <ApplyDoctor />
            </ProtectedRoute>
          } />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/doctors"
            element={
              <ProtectedRoute>
                <Doctors />
              </ProtectedRoute>
            }
          />

          <Route
            path="/notification"
            element={
              <ProtectedRoute>
                <NotificationPage />
              </ProtectedRoute>
            }
          />

          <Route path='/register' element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          } />
          <Route path='/login' element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
        </Routes>)
        }

      </BrowserRouter>
    </>
  );
}

export default App;
