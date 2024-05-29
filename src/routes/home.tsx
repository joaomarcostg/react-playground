import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <h1>Components</h1>
      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/virtualized-list">Virtualized List</Link>
          </li>
          <li>
            <Link to="/drag-and-drop">Drag and drop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
