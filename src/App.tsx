/* eslint-disable react/react-in-jsx-scope */

import { lazy, Suspense } from 'react'
import { Header } from './components'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { MenuContextProvider } from './context/MenuContext'
import { Toaster } from 'react-hot-toast'
import { ToastOptions } from './lib/theme'
import { LoadingSpinner } from './components/spinner'

const Feed = lazy(() => import('./pages/feed/feed'))
const Signin = lazy(() => import('./pages/signin/signin'))
const Signup = lazy(() => import('./pages/signup/signup'))
const CreateProfile = lazy(() => import('./pages/createProfile/CreateProfile'))

export function App() {
  return (
    <div>
      <Toaster position="top-center" toastOptions={ToastOptions} />
      <LoadingSpinner />
      <AuthContextProvider>
        <MenuContextProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Feed />
                </Suspense>
              }
            />
            <Route
              path="/signin"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Signin />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Signup />
                </Suspense>
              }
            />
            <Route
              path="/create/profile"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <CreateProfile />
                </Suspense>
              }
            />
          </Routes>
        </MenuContextProvider>
      </AuthContextProvider>
    </div>
  )
}
