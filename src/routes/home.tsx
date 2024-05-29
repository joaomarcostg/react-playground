import { Link } from "react-router-dom";

function HomePage() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/virtualized-list">Virtualized List</Link>
        </li>
        <li>
          <Link to="/drag-and-drop">Drag and drop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomePage;
