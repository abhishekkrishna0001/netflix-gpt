import { Provider} from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router';
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Login from './components/Login';
import Browse from './components/Browse';

function App() {
  const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
        <Provider store={appStore}>
          <Body />
        </Provider>
    </div>
  );
}

export default App;
