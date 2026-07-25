import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Teams from "./pages/Teams";

import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";
import ProjectDetails from "./pages/ProjectDetails";

import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";

import Kanban from "./pages/Kanban";

import NotFound from "./pages/NotFound";

import ProtectedRoute from "./routes/ProtectedRoute";


function App() {

  return (

    <Routes>


      {/* Public Routes */}

      <Route
        path="/"
        element={<Home />}
      />


      <Route
        path="/login"
        element={<Login />}
      />


      <Route
        path="/register"
        element={<Register />}
      />





      {/* Dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Dashboard />}
        />

      </Route>






      {/* Projects */}

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Projects />}
        />

      </Route>




      <Route
        path="/projects/create"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<CreateProject />}
        />

      </Route>





      <Route
        path="/projects/edit/:id"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<EditProject />}
        />

      </Route>





      <Route
        path="/projects/:id"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<ProjectDetails />}
        />

      </Route>








      {/* Tasks */}

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Tasks />}
        />

      </Route>





      <Route
        path="/tasks/create"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<CreateTask />}
        />

      </Route>





      <Route
        path="/tasks/edit/:id"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<EditTask />}
        />

      </Route>





      <Route
        path="/tasks/:id"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<TaskDetails />}
        />

      </Route>








      {/* Kanban */}

      <Route
        path="/kanban"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Kanban />}
        />

      </Route>







      {/* Teams */}

      <Route
        path="/teams"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Teams />}
        />

      </Route>






      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />


    </Routes>

  );

}


export default App;