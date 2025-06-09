import { images } from "../assets/optimized_photos";
import { Image } from "./Image";

export const Services = () => {
  return (
    <main>
      <h1 className="text-3xl text-center">services</h1>

      <div className="gap-4 flex flex-col items-center">
        <div className="-mx-12">
          <Image
            src1600={images.nikkideadlift_1600}
            src1200={images.nikkideadlift_1200}
            src768={images.nikkideadlift_768}
          />
        </div>

      
          <div className="flex flex-col gap-6 m-4">
            <div className="flex flex-col md:flex-row gap-12 justify-center">
            <div className="border p-6 md:p-8">
              <h2 className="text-2xl mb-4 text-center">
                One-on-One Personal Training{" "}
              </h2>
              <ul className="md:leading-10 text-center">
                <li>one hour of hands-on guidance in the gym</li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  learn to safely and effectively use free weights and machines
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  develop bodily control with calisthenics (body weight fitness)
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  gain awareness of and work on improving dysfunctional movement
                  patterns
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  learn progressions to achieve a handstand
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  other thing 1
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>other thing 2</li>
              </ul>
            </div>

            <div className="border p-6 md:p-8">
              <h2 className="text-2xl mb-4 text-center">Online Training </h2>
              <ul className="md:leading-10 text-center">
                <li>
                  take all the guesswork out of the gym with a custom designed
                  program
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  get a custom workout program personalized to your
                  <br className="hidden md:block" /> goals and level of
                  experience with progression built in{" "}
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  free workout app includes videos and instructions for
                  <br /> each movement and stores a history of your progress{" "}
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>save your lift videos in the app for technique review</li>
                <hr className="m-6 text-slate-300"></hr>
                <li>
                  weekly check-ins to review workouts, recovery, and answer any
                  questions
                </li>
                <hr className="m-6 text-slate-300"></hr>
                <li>unlimited text support with 24 hr response time</li>
              </ul>
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
      </div>
    </main>
  );
};
