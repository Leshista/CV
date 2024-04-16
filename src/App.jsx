import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageWrapper from "./routes/PageWrapper";
import Experience from './routes/Experience'
import Portfolio from './routes/Portfolio'
import Courses from './routes/Courses'
import ProjectDetails from "./routes/ProjectDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: '/CV/', element: <PageWrapper />, children:
        [
          {index: true, element: <Experience/>},
          {
            path: 'portfolio', element: <Portfolio />, children:
              [
                {path: ':id', element: <ProjectDetails/>}
              ]
          },
          {path: 'courses', element: <Courses/>}
        ]
    }
  ]);

  return <RouterProvider router={ router } />
}

export default App
