import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HomePage from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AllDatasets from './pages/DatasetPage/AllDatasetsPage'
import AllProjects from './pages/ProjectPage/AllProjectsPage'
import AllPatients from './pages/PatientPage/AllPatientsPage'

import SingleDatasetPage from './pages/DatasetPage/SingleDatasetPage';
import SinglePatientPage from './pages/PatientPage/SinglePatientPage';
import SingleProjectPage from './pages/ProjectPage/SingleProjectPage';

import Visualization from './pages/Visualization'

import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Full Page */}
        <Route
          path="/datasets"
          element={
            <ProtectedRoute>
              <AllDatasets/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <AllProjects/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <AllPatients/>
            </ProtectedRoute>
          }
          />
          <Route
          path="/visualizations"
          element={
            <ProtectedRoute>
              <Visualization />
            </ProtectedRoute>
          }
        />
        
        {/* Single Page */}
        <Route
          path="/dataset/:id"
          element={
            <ProtectedRoute>
              <SingleDatasetPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/:id"
          element={
            <ProtectedRoute>
              <SinglePatientPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/:id"
          element={
            <ProtectedRoute>
              <SingleProjectPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
