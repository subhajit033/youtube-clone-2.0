import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <Body />,
    Children: [
      {
        path:"/",
        element: <MainContainer />
      },
      {
        path: "/video/:videoId"
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
