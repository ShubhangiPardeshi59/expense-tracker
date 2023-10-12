import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css';
import RootLayout from './pages/RootLayout';
import ExpenseList from "./components/expense/ExpenseList";
import NewExpense from "./components/expense/NewExpense";
const router = createBrowserRouter([
    {
      path: '/events',
      element: <RootLayout />, 
      children:[
        {
          index:true,
          element:<ExpenseList />,
          // children:[
          //   {
          //     path:"/new",
          //     element:<NewExpense />
          //   }
          // ]
        },
        {
          path:"/events/new",
          element:<NewExpense />
        }
      ]
    }
])

function App() {

 
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
