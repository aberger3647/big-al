import { Link } from 'react-router-dom';

export const Button = () => {
  return (
      <div className="flex justify-center m-4 md:m-4">
        <Link to="/contact"
          className="border solid py-2 px-4 rounded-md text-center w-40 bg-brand-yellow hover:bg-brand-yellow-hover"
        >
          Get Your Free Consultation
        </Link>
      </div>
  );
};
