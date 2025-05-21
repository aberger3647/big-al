export const InquiryForm = () => {
  return (
   <div className="m-4">
        <h3 className="text-md font-semibold">submit inquiry</h3>
   <div className="flex flex-col max-w-xl mx-auto">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4"> {/* form left */}
          <div className="flex items-center">
            <label htmlFor="fname" className="w-32 text-right mr-3">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="border border-solid border-gray-300 px-2 py-1 w-48"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="lname" className="w-32 text-right mr-3">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="border border-solid border-gray-300 px-2 py-1 w-48"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="w-32 text-right mr-3">Email address:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="border border-solid border-gray-300 px-2 py-1 w-48"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="phone" className="w-32 text-right mr-3">Phone number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="border border-solid border-gray-300 px-2 py-1 w-48"
            />
          </div>
        </div>
        <div className="flex flex-col"> {/* form right */}
          <label htmlFor="goals" className="mb-2">Your goals:</label>
          <div className="flex items-center h-8">
            <input
              type="checkbox"
              id="stronger"
              name="stronger"
              value="Get stronger"
              className="mr-2"
            />
            <label htmlFor="stronger">Get stronger</label>
          </div>
          <div className="flex items-center h-8">
            <input
              type="checkbox"
              id="health"
              name="health"
              value="Health & longevity"
              className="mr-2"
            />
            <label htmlFor="health">Health & longevity</label>
          </div>
          <div className="flex items-center h-8">
            <input
              type="checkbox"
              id="muscle"
              name="muscle"
              value="Build muscle"
              className="mr-2"
            />
            <label htmlFor="muscle">Build muscle</label>
          </div>
          <div className="flex items-center h-8">
            <input
              type="checkbox"
              id="performance"
              name="performance"
              value="Athletic performance"
              className="mr-2"
            />
            <label htmlFor="performance">Athletic performance</label>
          </div>
          <div className="flex items-center h-8">
            <input
              type="checkbox"
              id="weight"
              name="weight"
              value="Lose weight"
              className="mr-2"
            />
            <label htmlFor="weight">Lose weight</label>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button 
          className="border solid 1 py-2 px-4 rounded-md"
        >
          Get your free consultation
        </button>
      </div>
    </div>
      </div>
  );
};
