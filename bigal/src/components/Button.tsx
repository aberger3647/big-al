import { Link } from 'react-router-dom';

export const Button = () => {
  return (
      <div className="flex justify-center mt-6 md:m-4">
        <Link to="/contact"
          className="border solid py-2 px-4 rounded-md text-center w-40 bg-yellow-400 hover:bg-yellow-500"
        >
          Get Your Free Consultation
        </Link>
      </div>
  );
};
