import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedVdoContainer from "./components/SearchedVdoContainer";
import ErrorPage from "./components/ErrorPage";
import Demo from "./components/Demo";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//         children: [
//           {
//             path: "/",
//             element: <MainContainer />,
//           },
//           {
//             path: "/watch",
//             element: <WatchPage />,
//           },
//           {
//             path: "/results",
//             element: <SearchedVdoContainer />,
//           },
//           {
//             path: "/demo",
//             element: <Demo />,
//           },
//         ],
//       },
//     ],
//   },
// ]);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchedVdoContainer />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
  },
]);

export default App;
