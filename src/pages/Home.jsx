import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const books = useSelector((state) => state.books.bookList);
  const navigate = useNavigate();

  const popularBookIds = [1, 2, 3, 4, 5];
  const popularBooks = books.filter((book) => popularBookIds.includes(book.id));

  const handleClick = (category) => {
    navigate(`/browse-books?category=${category}`);
  };

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Romance",
    "Thriller",
    "Fantasy",
    "Horror",
    "Dystopian",
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Welcome to the Online Library
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore the vast collection of books and discover new genres
        </p>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Books Categories
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className="px-6 py-3 text-lg cursor-pointer bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition duration-300"
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Popular Books
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {popularBooks.length > 0 ? (
            popularBooks.map((book) => (
              <div
                className="bg-white border rounded-lg shadow-md p-4 w-[220px] h-[360px] flex flex-col justify-between items-center hover:shadow-lg transition duration-300"
                key={book.id}
              >
                <h3 className="text-md font-semibold text-center line-clamp-2 h-[40px] text-gray-800">
                  {book.title}
                </h3>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[240px] object-cover rounded-md mb-4"
                />
                <Link
                  to={`/books/${book.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  View More Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No popular books available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
