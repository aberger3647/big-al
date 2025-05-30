import { images } from '../assets/optimized_photos';

export const About = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl text-center">about big al</h1>
      <p className="m-4">
        Hey! I'm Alex Berger, aka Big Al. I'm a Certified Personal Trainer in
        Austin, TX. I grew up in St. Petersburg, Florida, playing tennis, riding
        my bike, and rollerblading. My last year of college I learned to lift
        weights and quickly became addicted to it! At the same time, I started a
        yoga and handstand practice. When I moved to Austin after graduation, I
        joined Hyde Park Gym. I discovered and fell in love with powerlifting.
        The more I moved, the better I felt, and as a goal-oriented person, I
        loved realizing hard-won progress.
      </p>
      <p className="m-4">
        Most days, you can find me moving my body in some way! A few of my
        favorite ways to move are strength training, yoga and dancing. I want to
        share my passion for exercise and help you reach your strength, skill,
        health or physique goals. Whether you've never stepped foot in a gym or
        you're a seasoned gym rat, it's my ambition to empower you to move
        through life with confidence and ease.
      </p>
      <p className="m-4">
        Want to find out how I can help you achieve your goals? Call or text me
        at 727-504-4123 or email me at info@bigalstrength.com to set up a free
        consultation.
      </p>
      <picture>
        <source media="(min-width:1600px)" srcSet={images.headshot_1600} />
        <source media="(min-width:1200px)" srcSet={images.headshot_1200} />
        <source media="(min-width:768px)" srcSet={images.headshot_768} />
        <img src={new URL(`${images.headshot_768}`, import.meta.url).href} />
      </picture>
    </main>
  );
};
