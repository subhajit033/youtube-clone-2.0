import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedVdoContainer from "./components/SearchedVdoContainer";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
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
        element: <SearchedVdoContainer />
      }
    ],
  },
]);

export default App;
