const copy = {
  bigAlCopy: "<p>Hey! I'm Alex Berger, aka Big Al. I'm a Certified Personal Trainer in Austin, TX. I grew up in St. Petersburg, Florida, playing tennis, riding my bike, and rollerblading. My last year of college I learned to lift weights and quickly became addicted to it! At the same time, I started a yoga and handstand practice. When I moved to Austin after graduation, I joined Hyde Park Gym. I discovered and fell in love with powerlifting. The more I moved, the better I felt, and as a goal-oriented person, I loved realizing hard-won progress.</p><p> Most days, you can find me moving my body in some way! A few of my favorite ways to move are strength training, yoga and dancing. I want to share my passion for exercise and help you reach your strength, skill, health or physique goals. Whether you've never stepped foot in a gym or you're a seasoned gym rat, it's my ambition to empower you to move through life with confidence and ease.</p><p>Want to find out how I can help you achieve your goals? Call or text me at 727-504-4123 or email me at aberger3647@gmail.com to set up a free consultation.</p>",
  trainingCopy: `
  <p><span>Strength Training.</span> General strength training—get stronger in and out
  of the gym. Build muscle, lose fat, and build endurance.
  </p>
  <p>
  <span>Powerlifting.</span> Train specifically for the sport of strength! Increase
  your one rep maxes and compete in meets against others in your
  class.
  </p>
  <p>
  <span>Calisthenics.</span> Practice bodyweight exercise and develop special
  skills. Learn to do your first pull up or push up. Learn how to
  muscle up, and play on the rings!
  </p>
  <p>
  <span>Handbalancing.</span> Have you always wanted to learn a freestanding
  handstand? Get upside down with me! Already know how to handstand?
  We can focus on skills like handstand press and pushup.
  </p>`,
  testimonialsCopy: '<p>"Committing to a healthier lifestyle was a daunting task and meant confronting a lot of unpleasant truths about where I was starting from. At only 32 I was already finding it harder to pick myself up off the ground and needed a change. Alex has been such an integral part of my success in working to lose weight and build muscle because she knows it&#39s about more than just the physical changes. She doesn&#39t just check off whether I hit my numbers. This is truly a judgement free, supportive environment from someone who embodies active, health-conscious living! Alex reminds me how far I&#39ve come, asks where I&#39m at mentally and even when things don&#39t go according to plan - we always strategize to make the next week better. Her experience and knowledge of strength training has helped me grow stronger, increase mobility and boost my confidence. I really look forward to my workouts because the programming feels so customized to my personal goals. I can&#39t say enough good things about my experience, I highly recommend you train with Alex!." -Alexis G</p><p>"Alex is great, she&#39s super kind, patient, and knowledgeable." - Steven G</p><p>"Big Al works in all barbell arenas, weight lifting, body building and power lifting.  If you don&#39t know the difference, that&#39s her specialty.  She&#39s extremely knowledgable and great to work with, which comes in handy during the rest times.  I highly recommend having a consult with Big Al and see what you think. Make it a habit!" - Hill M</p>',
  servicesCopy: `

  <p>
  <span>In-Person Coaching.</span> Take all the guesswork out of the gym. Meet at the gym to work together 3 times per
  week. You'll get: a customized program and an hour each session with me including demonstrations and guidance for safely and effectively performing movements. 
  </p>

<p>
  <span>Online Coaching.</span> Train on your own time, wherever you please.
  You'll get: A customized program every week, tailored to your
  goals. Send me videos for form check and review. Coach on
  call—text me anytime, and I will get back to you within 24 hours
  (though usually sooner).
  </p>

<p>
  <span>Hybrid Coaching.</span> Work together in the gym 1 or 2 times per week,
  and work on your own the other days with your tailored program. You'll get everything that comes with online training, plus in-person coaching.
  </p>
`,
contactCopy:  "<p>Call or text me at 727-504-4123, or shoot me an email at aberger3647@gmail.com.</p>"
}

const content = [
  {
    sectionid: "bigal",
    header: "Big Al",
    copy: copy.bigAlCopy,
    img: "IMG_9572.jpg",
    alt: "Alex leaning on the rack of barbells in the gym, with her hand on her hip",
  },
  {
    sectionid: "training",
    header: "Training",
    copy: copy.trainingCopy,
    img: "IMG_9124.JPG",
    alt: "Alex crouched down, instructing a client performing a hollow body hold",
  },
  {
    sectionid: "testimonials",
    header: "Testimonials",
    copy: copy.testimonialsCopy,
    img: "IMG_7858.JPG",
    alt: "Alex and her client Hill posing with flexed biceps in front of Hyde Park Gym",
  },
  {
    sectionid: "services",
    header: "Services",
    copy: copy.servicesCopy,
    img: "IMG_9626.jpg",
    alt: "Alex performing a one arm dumbbell row",
  },
  {
    sectionid: "contact",
    header: "Contact",
    copy: copy.contactCopy,
    img: "IMG_9601.jpg",
    alt: "Alex doing a straddle handstand in front of the HPG Logo",
  },
];

const isOdd = (num) => {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

for (let i = 0; i < content.length; i++) {
  const section = document.createElement("section");
  section.id = content[i].sectionid;

  if (isOdd(i)) {
    section.classList.add("row-reverse");
  }

  const main = document.querySelector("main");
  main.appendChild(section);

  const div1 = document.createElement("article");
  const div2 = document.createElement("div");
  div2.classList.add("img-wrapper");
  section.appendChild(div1);
  section.appendChild(div2);
  
  div1.innerHTML = content[i].copy;

  if (i === 0) {
    const header = document.createElement("h1");
    header.textContent = content[i].header.toUpperCase();
    div1.prepend(header);
  } else {
    const header = document.createElement("h2");
    header.textContent = content[i].header;
    div1.prepend(header);
  }

  const image = document.createElement("img");
  div2.appendChild(image);
  image.setAttribute("src", `./img/${content[i].img}`);
}
