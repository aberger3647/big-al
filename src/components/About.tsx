import { Header } from "./Header"
import { images } from "../assets/optimized_photos";
import { Button } from "./Button";

export const About = () => {
  return (
    <main className="flex flex-col items-center pb-4">
          <Header
         src1600={images.headshot_1600}
        src1200={images.headshot_1200}
        src768={images.headshot_768}
              title="About Alex"
            />

      <p className="m-4 max-w-4xl">
        Hey! I'm Alex Berger, aka Big Al. I'm a Certified Personal Trainer in
        Austin, TX. I grew up in St. Petersburg, Florida, playing tennis, riding
        my bike, and rollerblading. My last year of college I learned to lift
        weights and quickly became addicted to it! At the same time, I started a
        yoga and handstand practice. When I moved to Austin after graduation, I
        joined Hyde Park Gym. I discovered and fell in love with powerlifting.
        The more I moved, the better I felt, and as a goal-oriented person, I
        loved realizing hard-won progress.
      </p>
      <p className="m-4 max-w-4xl">
        Most days, you can find me moving my body in some way! A few of my
        favorite ways to move are strength training, yoga and dancing. I want to
        share my passion for exercise and help you reach your strength, skill,
        health or physique goals. Whether you've never stepped foot in a gym or
        you're a seasoned gym rat, it's my ambition to empower you to move
        through life with confidence and ease.
      </p>
      <p className="m-4 max-w-4xl">
        I'm currently fully booked, but new spots open up from time to time.
        Want to train with me? Join the waitlist below, or call/text me at
        727-504-4123 or email info@bigalstrength.com and I'll reach out as soon
        as a spot opens.
      </p>
           <div className="self-center">
          <Button />
        </div>
    </main>
  );
};
