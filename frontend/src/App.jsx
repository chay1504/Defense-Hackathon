import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AdminLogin from './pages/AdminLogin'
import StudentLogin from './pages/StudentLogin'
import StartupLogin from './pages/StartupLogin'
import StudentRegistration from './pages/StudentRegistration'
import StartupRegistration from './pages/StartupRegistration'
import AdminDashboard from './pages/AdminDashboard'
import StudentPortal from './pages/StudentPortal'
import SubmissionDetails from './pages/SubmissionDetails'
import ProjectSubmission from './pages/ProjectSubmission'
import SubmissionConfirmation from './pages/SubmissionConfirmation'
import ProblemStatements from './pages/ProblemStatements'
import { ToastProvider } from './components/Toast'

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/startup-login" element={<StartupLogin />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/startup-registration" element={<StartupRegistration />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/submissions" element={<SubmissionDetails />} />
        <Route path="/project-submission" element={<ProjectSubmission />} />
        <Route path="/submission-confirmation" element={<SubmissionConfirmation />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
      </Routes>
    </ToastProvider>
  )
}
