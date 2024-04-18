import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageWrapper from "./routes/PageWrapper";
import Experience from './routes/Experience'
import Portfolio from './routes/Portfolio'
import Other from './routes/Other'
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
          {path: 'other', element: <Other/>}
        ]
    }
  ]);

  return <RouterProvider router={ router } />
}

export default App
