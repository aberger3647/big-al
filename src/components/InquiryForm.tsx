export const InquiryForm = () => {
  return (
    <form className="p-6 border bg-[#ff4a26] m-4 md:max-w-3xl w-full">
      <div className="flex flex-col mx-auto">
        <div className="flex gap-8 flex-col">
          <p className="text-2xl mb-4 text-white text-center">Inquiry Form</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <label htmlFor="fname" className="w-32 text-left text-sm">
                First Name:
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="border border-solid bg-white outline-none px-2 py-1 w-48 flex-1"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="lname" className="w-32 text-left text-sm">
                Last Name:
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="border border-solid bg-white outline-none px-2 py-1 w-48 flex-1"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="email" className="w-32 text-left text-sm">
                Email Address:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-solid bg-white outline-none px-2 py-1 w-48 flex-1"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="phone" className="w-32 text-left text-sm ">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border border-solid bg-white outline-none px-2 py-1 w-48 flex-1"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <label htmlFor="goals" className="mb-2">
                <p className="text-xl mb-4 text-white text-center">Your Goals:</p>
              </label>
              
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="stronger"
                  name="stronger"
                  value="Get stronger"
                  className="mr-2"
                />
                <label htmlFor="stronger">Get Stronger</label>
              </div>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="health"
                  name="health"
                  value="Health & longevity"
                  className="mr-2"
                />
                <label htmlFor="health">Health & Longevity</label>
              </div>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="muscle"
                  name="muscle"
                  value="Build muscle"
                  className="mr-2"
                />
                <label htmlFor="muscle">Build Muscle</label>
              </div>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="performance"
                  name="performance"
                  value="Athletic performance"
                  className="mr-2"
                />
                <label htmlFor="performance">Athletic Performance</label>
              </div>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="weight"
                  name="weight"
                  value="Lose weight"
                  className="mr-2"
                />
                <label htmlFor="weight">Lose Weight</label>
              </div>
            </div>
          </div>

                    <div className="flex flex-col">
            <div>
              <label htmlFor="interests" className="mb-2">
                <p className="text-xl mb-4 text-white text-center">Your Interests:</p>
              </label>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="learn"
                  name="learn"
                  value="Learn to Lift"
                  className="mr-2"
                />
                <label htmlFor="learn">Learn to Lift</label>
              </div>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="powerlifting"
                  name="powerlifting"
                  value="Compete in Powerlifting"
                  className="mr-2"
                />
                <label htmlFor="powerlifting">Compete in Powerlifting</label>
              </div>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="calisthenics"
                  name="calisthenics"
                  value="Work on Calisthenics Skills"
                  className="mr-2"
                />
                <label htmlFor="calisthenics">Work on Calisthenics Skills</label>
              </div>
              <div className="flex items-center h-8 ml-10 sm:ml-40">
                <input
                  type="checkbox"
                  id="handstands"
                  name="handstands"
                  value="Learn Handstands"
                  className="mr-2"
                />
                <label htmlFor="handstands">Learn Handstands</label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message">
              <p className="text-xl mb-4 text-white text-center">Message:</p>
            </label>
            <textarea className="border h-64 w-full p-6 bg-white"></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="border solid 1 py-2 px-4 rounded-md bg-yellow-400 hover:bg-yellow-500"
          >
            Submit Inquiry
          </button>
        </div>

      </div>
    </form>
  );
};
