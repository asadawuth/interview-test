import { Link } from "react-router-dom";

export default function Test2() {
  const menus = [
    {
      title: "ข้อ 2.1",
      path: "/test2/test2path/2.1",
    },
    {
      title: "ข้อ 2.2",
      path: "/test2/test2path/2.2",
    },
    {
      title: "ข้อ 2.3",
      path: "/test2/test2path/2.3",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Test 2</h1>

          <p className="mt-2 text-slate-500">กรุณาเลือกหัวข้อที่ต้องการ</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              to={menu.path}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-slate-800">
                {menu.title}
              </h2>

              <div className="mt-6 flex items-center text-sm font-medium text-blue-600">
                เข้าสู่หน้า
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
