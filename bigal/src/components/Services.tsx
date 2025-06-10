import { images } from "../assets/optimized_photos";
import { Image } from "./Image";
import { Header } from "./Header";
import { Button } from "./Button";

export const Services = () => {
  return (
    <main>
      <Header
        src1600={images.nikkideadlift_1600}
        src1200={images.nikkideadlift_1200}
        src768={images.nikkideadlift_768}
        title="Services"
      />

      <div className="gap-4 flex flex-col items-center">
        <div className="flex flex-col gap-6 m-4">
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <div className="border p-6 md:p-8 bg-[#40bdf7] flex-1">
              <h2 className="text-2xl mb-4 text-center text-white">
                1-on-1 Personal Training
              </h2>
              {/* <hr className="mx-20 my-6 text-[#009be3]"></hr> */}
              <ul className=" text-center">
                <li>
                  One hour of{" "}
                  <span className="font-bold">hands-on guidance</span> in the
                  gym
                </li>
                <hr className="mx-20 my-6 text-[#009be3]"></hr>
                <li>
                  Learn to{" "}
                  <span className="font-bold">safely and effectively</span> use
                  free weights and machines
                </li>
                <hr className="mx-20 my-6 text-[#009be3]"></hr>
                <li>
                  <span className="font-bold">Develop bodily control</span> with
                  calisthenics (body weight fitness)
                </li>
                <hr className="mx-20 my-6 text-[#009be3]"></hr>
                <li>
                  Gain awareness of and{" "}
                  <span className="font-bold">
                    improve dysfunctional movement patterns
                  </span>
                </li>
                <hr className="mx-20 my-6 text-[#009be3]"></hr>
                <li>
                  Learn progressions to{" "}
                  <span className="font-bold">achieve a handstand</span>
                </li>
                <hr className="mx-20 my-6 text-[#009be3]"></hr>
                <li>
                  Train at{" "}
                  <a
                    href="https://hydeparkgym.com/"
                    className="font-semibold"
                    target="_blank"
                  />
                  Hyde Park Gym
                  <a />
                </li>
              </ul>
              <div className="self-center mt-8">
                <Button />
              </div>
            </div>

            <div className="border p-6 md:p-8 bg-[#ff4a26] flex-1">
              <h2 className="text-2xl mb-4 text-center text-white">
                Online Training{" "}
              </h2>
              <ul className="flex flex-col text-center">
                <li className="max-w-md">
                  Get a{" "}
                  <span className="font-bold">custom workout program </span>
                  personalized to your goals and level of experience with
                  progression built in
                </li>
                <hr className="mx-20 my-6 text-[#bd2000]"></hr>
                <li className="max-w-md">
                  <span className="font-bold">Free workout app</span> includes
                  videos and instructions for each movement and stores a history
                  of your progress
                </li>
                <hr className="mx-20 my-6 text-[#bd2000]"></hr>
                <li>
                  Save your lift videos in the app for{" "}
                  <span className="font-bold">technique review</span>
                </li>
                <hr className="mx-20 my-6 text-[#bd2000]"></hr>
                <li className="max-w-md">
                  Weekly accountability with check-ins to{" "}
                  <span className="font-bold">
                    review workouts, recovery, and answer any questions
                  </span>
                </li>
                <hr className="mx-20 my-6 text-[#bd2000]"></hr>
                <li>
                  <span className="font-bold">Unlimited text support</span> with
                  24 hr response time
                </li>
              </ul>
              <div className="self-center mt-8">
                <Button />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
            <h2 className="text-xl">Nutrition Guidance</h2>
            <ul>
              <li>
                guidance on protein and calorie intake, with guidance on how to
                reach those goals. includes weekly check-ins and discussions
                about optimal dietary choices for results in the gym,
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl">handstands</h2>
            <p>
              learn a wall handstand, freestanding handstand, handstand press,
              or handstand pushups
            </p>
          </div>

          <div>
            <h2 className="text-xl">powerlifting</h2>
            <p>
              squat, bench press, and deadlift. interested in competing in
              powerlifting?
            </p>
          </div>*/}

        <div className="-mx-12">
          <Image
            src1600={images.nikkibench_1600}
            src1200={images.nikkibench_1200}
            src768={images.nikkibench_768}
          />
        </div>

        <h1 className="text-2xl md:text-5xl text-center m-4 mb-6">
          Training Offerings
        </h1>
      </div>
    </main>
  );
};
