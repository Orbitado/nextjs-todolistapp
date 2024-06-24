import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="bg-white shadow-md flex justify-between align-middle items-center mt-4 p-4">
      <Link href="/">
        <h2 className="font-bold text-xl">Task Manager</h2>
      </Link>
      <ul>
        <Link href="/addTask">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Task
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
