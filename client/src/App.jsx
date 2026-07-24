import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Teams from "./pages/Teams";

import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateProject from "./pages/CreateProject";

import EditProject from "./pages/EditProject";
import CreateTask from "./pages/CreateTask";

import EditTask from "./pages/EditTask";

import Kanban from "./pages/Kanban";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
  path="/projects/create"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<CreateProject />} />
</Route>

<Route
  path="/projects/edit/:id"
  element={
    <ProtectedRoute>
      <EditProject />
    </ProtectedRoute>
  }
/>

        {/* Protected Layout (authentication will be added later) */}
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Dashboard />} />
</Route>

<Route
  path="/kanban"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Kanban />} />
</Route>

<Route
  path="/tasks/edit/:id"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<EditTask />} />
</Route>

<Route
  path="/tasks/create"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<CreateTask />} />
</Route>

<Route
  path="/projects"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Projects />} />
</Route>

<Route
  path="/tasks"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Tasks />} />
</Route>

<Route
  path="/teams"
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<Teams />} />
</Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;