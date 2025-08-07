import { Button } from "./Button";

export const Footer = () => {
  return (
    <>
      <footer className="border 1 solid p-8 flex flex-col items-center md:flex-row w-full align-center bg-teal-500">
        
        <div className="flex md:flex-row flex-col items-start md:w-full md:justify-around">
        
        <div className="m-4">
          <h3 className="text-md font-semibold mb-3">Contact</h3>
          <div className="flex flex-col gap-4">
            <p>Alex Berger</p>
            <p>info@bigalstrength.com</p>
            <p>727 504 4123</p>
          </div>
        </div>

        <div className="m-4">
          <h3 className="text-md font-semibold mb-3">In-Person Training Hours</h3>
          <div className="flex">
            <div className="flex flex-col gap-2">
              <span className="font-medium ">Saturday</span>
              <span className="font-medium ">Sunday</span>
            </div>
            <div className="flex flex-col gap-2 ml-8 mb-3">
              <p >9am-5pm</p>
              <p >9am-5pm</p>
            </div>
          </div>
          <p className="text-sm">Open for inquiries daily</p>
        </div>

          <div className="m-4">
          <h3 className="text-md font-semibold mb-3">Location</h3>
          <div className="flex">
            <div className="flex flex-col gap-2 mb-3">
              <p>Brownie Neighborhood Park</p>
              <p>10000 Brownie Dr</p>
              <p>Austin, TX 78753</p>
            </div>
          </div>
        </div>

        <div className="self-center">
          <Button />
        </div>

        </div>
      </footer>
    </>
  );
};
