import { Provider } from "react-redux";
import "./App.css";
import { Body } from "./Components/Body";
import Head from "./Components/Head";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import store from './util/store'
import { MainContainer } from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const AppRouter = createBrowserRouter([
{  path:'/',
  element:  <Body/>,
  children: [
  {
    path: '/',
    element: <MainContainer/>
  },
  {
    path:'watch',
    element: <WatchPage/>
  },]
}
])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router = {AppRouter}/>
    
    </div></Provider>
  );
}

export default App;
