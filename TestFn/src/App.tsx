import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center">Interview Test</h1>

        <div className="flex flex-col gap-4">
          <Link
            to="/test1"
            className="rounded-lg bg-blue-500 px-4 py-3 text-center font-medium text-white hover:bg-blue-600"
          >
            Test 1
          </Link>

          <Link
            to="/test2"
            className="rounded-lg bg-green-500 px-4 py-3 text-center font-medium text-white hover:bg-green-600"
          >
            Test 2
          </Link>

          <Link
            to="/test3"
            className="rounded-lg bg-purple-500 px-4 py-3 text-center font-medium text-white hover:bg-purple-600"
          >
            Test 3
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
