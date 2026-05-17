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
          <div className="flex flex-col md:flex-row gap-4 justify-around md:items-stretch">
            <div className="border p-6 md:p-8 bg-brand-blue flex-1 flex flex-col">
              <h2 className="ba-h2-card mb-4 text-white">
                1-on-1 Personal Training
              </h2>
              <ul className="text-center flex-grow">
                <li>
                  One hour of{" "}
                  <span className="font-bold">hands-on guidance</span> in
                  calisthenics
                </li>
                <hr className="mx-20 my-6 text-brand-blue-dark"></hr>
                <li>
                  Learn to{" "}
                  <span className="font-bold">safely and effectively</span>{" "}
                  perform bodyweight exercises
                </li>
                <hr className="mx-20 my-6 text-brand-blue-dark"></hr>
                <li>
                  <span className="font-bold">Develop bodily control</span> with
                  calisthenics skills
                </li>
                <hr className="mx-20 my-6 text-brand-blue-dark"></hr>
                <li>
                  Gain awareness of and{" "}
                  <span className="font-bold">
                    improve dysfunctional movement patterns
                  </span>
                </li>
                <hr className="mx-20 my-6 text-brand-blue-dark"></hr>
                <li>
                  Learn progressions to{" "}
                  <span className="font-bold">achieve a handstand</span>
                </li>
                <hr className="mx-20 my-6 text-brand-blue-dark"></hr>
                <li>
                  Train in the great outdoors at{" "}
                  <a
                    href="https://www.google.com/maps/place/brownie+neighborhood+park/data=!4m2!3m1!1s0x8644c968b477ef8b:0x5f2f42b5d4e46a?sa=X&ved=1t:242&ictx=111"
                    className="font-semibold"
                    target="_blank"
                  >
                    Brownie Neighborhood Park
                  </a>
                </li>
              </ul>
              <div className="self-center mt-8">
                <Button />
              </div>
            </div>

            <div className="border p-6 md:p-8 bg-brand-orange flex-1 flex flex-col">
              <h2 className="ba-h2-card mb-4 text-white">
                Online Training{" "}
              </h2>
              <ul className="flex flex-col text-center flex-grow">
                <li className="max-w-md">
                  Get a{" "}
                  <span className="font-bold">custom workout program </span>
                  personalized to your goals and level of experience with
                  progression built in
                </li>
                <hr className="mx-20 my-6 text-brand-orange-dark"></hr>
                <li className="max-w-md">
                  <span className="font-bold">Free workout app</span> includes
                  videos and instructions for each movement and stores a history
                  of your progress
                </li>
                <hr className="mx-20 my-6 text-brand-orange-dark"></hr>
                <li>
                  Save your lift videos in the app for{" "}
                  <span className="font-bold">technique review</span>
                </li>
                <hr className="mx-20 my-6 text-brand-orange-dark"></hr>
                <li className="max-w-md">
                  Weekly accountability with check-ins to{" "}
                  <span className="font-bold">
                    review workouts, recovery, and answer any questions
                  </span>
                </li>
                <hr className="mx-20 my-6 text-brand-orange-dark"></hr>
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

        <div className="-mx-12">
          <Image
            src1600={images.nikkibench_1600}
            src1200={images.nikkibench_1200}
            src768={images.nikkibench_768}
          />
        </div>

        <div className="flex flex-col gap-6 m-4 max-w-4xl">
          <h1 className="ba-h1-section">
            Training Offerings
          </h1>
          <div className="flex flex-col max-w-2xl gap-4 mb-12 mx-auto">
            <div>
              <h2 className="text-xl font-bold mb-2">Handstands</h2>
              <p>
                Learn the skills you need to do your first handstand. Everything
                from the proper core warmup, wrist and shoulder warmup, to getting
                on the wall for beginners. For more advanced trainees, learn a
                freestanding handstand, handstand press, and handstand pushups.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Pull Ups and Muscle Ups</h2>
              <p>
                Achieve your first pullup or first muscle up. Get guidance on
                proper technique and workout volume for optimal skill acquisition.
                Learn the correct grip to do a ring or bar muscle up, with
                progressions from pullup to muscle up.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Dips</h2>
              <p>
                Work on dips and dip progressions, building up to weighted dips.
                Dips are a great exercise for developing chest, anterior shoulder,
                and tricep muscles, and are a requirement for muscle ups.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Dragon Flags and Human Flags</h2>
              <p>
                Learn the coolest ab exercises for a bulletproof core, popularized
                by martial artist Bruce Lee.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Pistol Squats</h2>
              <p>
                Develop impressive single leg strength, useful for movements in
                daily life such as walking up stairs and functional for sport like
                rock climbing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Powerlifting</h2>
              <p>
                Get a full program that includes instruction for the best way to
                learn and grow your squat, bench press, and deadlift, with
                variations and accessories. Interested in competing in powerlifting?
                I offer remote coaching for powerlifting.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Nutrition Guidance</h2>
              <p>
                Get guidance on protein and calorie intake and advice on how to
                reach those goals. Includes weekly check-ins and discussions about
                optimal dietary choices for results in the gym, whether that be
                for performance, fat loss, muscle gain, or maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};