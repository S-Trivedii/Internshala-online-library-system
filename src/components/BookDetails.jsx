import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.bookList);
  const book = books.find((book) => book.id === parseInt(id));
  const navigate = useNavigate();

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-red-600">Book not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{book.title}</h1>
      <img
        src={book.image}
        alt={book.title}
        className="w-full max-h-[400px] object-cover rounded-lg mb-6"
      />
      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          <span className="font-semibold">Author:</span> {book.author}
        </p>
        <p>
          <span className="font-semibold">Description:</span> {book.description}
        </p>
        <p>
          <span className="font-semibold">Rating:</span>{" "}
          {book.rating ? book.rating : "N/A"}
        </p>
      </div>
      <button
        onClick={() => navigate("/browse-books")}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition duration-300"
      >
        ← Back to Browse
      </button>
    </div>
  );
};
