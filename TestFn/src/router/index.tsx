import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Test1 from "../page/Test1";
import Test2 from "../page/Test2";
import Test2_1 from "../page/Test2/Test2_1";
import Test2_2 from "../page/Test2/Test2_2";
import Test2_3 from "../page/Test2/Test2_3";

import Test3 from "../page/Test3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/test1",
    element: <Test1 />,
  },

  {
    path: "/test2",
    element: <Test2 />,
  },
  {
    path: "/test2/test2path/2.1",
    element: <Test2_1 />,
  },

  {
    path: "/test2/test2path/2.2",
    element: <Test2_2 />,
  },

  {
    path: "/test2/test2path/2.3",
    element: <Test2_3 />,
  },
  {
    path: "/test3",
    element: <Test3 />,
  },
]);

export default router;
