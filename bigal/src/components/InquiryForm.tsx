export const InquiryForm = () => {
  return (
    <form className="m-4">
      <h3 className="text-md font-semibold mb-8">submit inquiry</h3>
      <div className="flex flex-col max-w-xl mx-auto">
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-4">

            <div className="flex items-center">
              <label htmlFor="fname" className="w-32 text-left ">
                first name:
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="border border-solid border-gray-300 px-2 py-1 w-48 flex-1"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="lname" className="w-32 text-left ">
                last name:
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="border border-solid border-gray-300 px-2 py-1 w-48 flex-1"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="email" className="w-32 text-left ">
                email address:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-solid border-gray-300 px-2 py-1 w-48 flex-1"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="phone" className="w-32 text-left ">
                phone number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border border-solid border-gray-300 px-2 py-1 w-48 flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col p-4 items-center">
            <div>
            <label htmlFor="goals" className="mb-2">
              your goals:
            </label>
            <div className="flex items-center h-8">
              <input
                type="checkbox"
                id="stronger"
                name="stronger"
                value="Get stronger"
                className="mr-2"
              />
              <label htmlFor="stronger">get stronger</label>
            </div>
            <div className="flex items-center h-8">
              <input
                type="checkbox"
                id="health"
                name="health"
                value="Health & longevity"
                className="mr-2"
              />
              <label htmlFor="health">health & longevity</label>
            </div>
            <div className="flex items-center h-8">
              <input
                type="checkbox"
                id="muscle"
                name="muscle"
                value="Build muscle"
                className="mr-2"
              />
              <label htmlFor="muscle">build muscle</label>
            </div>
            <div className="flex items-center h-8">
              <input
                type="checkbox"
                id="performance"
                name="performance"
                value="Athletic performance"
                className="mr-2"
              />
              <label htmlFor="performance">athletic performance</label>
            </div>
            <div className="flex items-center h-8">
              <input
                type="checkbox"
                id="weight"
                name="weight"
                value="Lose weight"
                className="mr-2"
              />
              <label htmlFor="weight">lose weight</label>
            </div>

            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="border solid 1 py-2 px-4 rounded-md">
            get your free consultation
          </button>
        </div>
      </div>
    </form>
  );
};
