import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="text-center bg-blue-600 py-4">
        <h1 className="text-3xl font-bold text-white">Online Library System</h1>
      </div>
      <nav className="flex items-center justify-center gap-6 bg-black py-3 text-white font-medium">
        <Link to="/" className="hover:text-yellow-300 transition duration-300">
          Home
        </Link>
        <Link
          to="/browse-books"
          className="hover:text-yellow-300 transition duration-300"
        >
          Browse Books
        </Link>
        <Link
          to="/add-book"
          className="hover:text-yellow-300 transition duration-300"
        >
          Add Book
        </Link>
      </nav>
    </header>
  );
};
