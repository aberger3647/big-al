export const Footer = () => {
  return (
    <>
    <footer className="border 1 solid p-8 flex flex-col items-center md:flex-row w-full align-center md:justify-around md:items-start">
      <div className="m-4">
        <h3 className="text-md font-semibold">contact</h3>
        <div className="flex flex-col gap-4">
        <p>alex berger</p>
        <p>info@bigalstrength.com</p>
        <p>727 504 4123</p>
        </div>
      </div>

      <div className="m-4">
        <h3 className="text-md font-semibold mb-3">training hours</h3>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm">monday</span>
            <span className="font-medium text-sm">tuesday</span>
            <span className="font-medium text-sm">wednesday</span>
            <span className="font-medium text-sm">thursday</span>
            <span className="font-medium text-sm">friday</span>
          </div>
          <div className="flex flex-col gap-2 ml-8 mb-3">
            <p className="text-sm">12pm-8pm</p>
            <p className="text-sm">12pm-8pm</p>
            <p className="text-sm">12pm-8pm</p>
            <p className="text-sm">12pm-8pm</p>
            <p className="text-sm">12pm-8pm</p>
          </div>
        </div>
        <p className="text-xs">open for inquiries daily</p>
      </div>

      <div className="flex justify-center mt-6 md:m-4">
        <button 
          className="border solid py-2 px-4 rounded-md text-center w-40"
        >
          get your free consultation
        </button>
      </div>

    </footer>
    </>
  );
};
