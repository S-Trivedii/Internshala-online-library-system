import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-8">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="mb-2">Made with ❤️ by Shubhanshu</p>
        <Link
          to="https://github.com/S-Trivedii/Internshala-online-library-system"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Visit GitHub
        </Link>
      </div>
    </footer>
  );
};
