import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export const BrowseBooks = () => {
  const books = useSelector((state) => state.books.bookList);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const filteredBooks = books.filter(
    (book) =>
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())) &&
      (!category || book.category === category)
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="font-bold text-3xl my-4 text-center sm:text-left">
        Browse Books
      </h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 border border-black rounded-md"
      />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredBooks.map((book) => (
          <div
            className="bg-white border rounded-lg shadow-md p-4 w-full h-[400px] flex flex-col justify-between"
            key={book.id}
          >
            <h3 className="text-md font-semibold text-center line-clamp-2 h-[40px]">
              {book.title}
            </h3>
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-[240px] object-cover rounded-md"
            />
            <h3 className="text-md pt-2 text-center line-clamp-2 h-[40px]">
              {book.author}
            </h3>
            <div className="flex justify-center mt-2">
              <Link
                to={`/books/${book.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                View More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
