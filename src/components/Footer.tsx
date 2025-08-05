import { Button } from "./Button";

export const Footer = () => {
  return (
    <>
      <footer className="border 1 solid p-8 flex flex-col items-center md:flex-row w-full align-center md:justify-around md:items-start bg-teal-500">
        <div className="m-4">
          <h3 className="text-md font-semibold mb-3">Contact</h3>
          <div className="flex flex-col gap-4">
            <p>Alex Berger</p>
            <p>info@bigalstrength.com</p>
            <p>727 504 4123</p>
          </div>
        </div>

        <div className="m-4">
          <h3 className="text-md font-semibold mb-3">Training Hours</h3>
          <div className="flex">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-sm">Monday</span>
              <span className="font-medium text-sm">Tuesday</span>
              <span className="font-medium text-sm">Wednesday</span>
              <span className="font-medium text-sm">Thursday</span>
              <span className="font-medium text-sm">Friday</span>
            </div>
            <div className="flex flex-col gap-2 ml-8 mb-3">
              <p className="text-sm">12pm-8pm</p>
              <p className="text-sm">12pm-8pm</p>
              <p className="text-sm">12pm-8pm</p>
              <p className="text-sm">12pm-8pm</p>
              <p className="text-sm">12pm-8pm</p>
            </div>
          </div>
          <p className="text-xs">Open for inquiries daily</p>
        </div>
        <div className="self-center">
          <Button />
        </div>
      </footer>
    </>
  );
};
