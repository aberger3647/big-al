export const Rates = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl text-center">rates</h1>

      <div className="m-4 gap-4 flex flex-col">
        <div>
          <h2 className="text-xl">12 one-hour sessions</h2>
          <p>3x/week one-on-one</p>
          <p>$300/week</p>
          <p>$1200/month</p>
        </div>

        <div>
          <h2 className="text-xl">8 one-hour sessions</h2>
          <p>2x/week one-on-one</p>
          <p>$225/week</p>
          <p>$900/month</p>
        </div>

        <div>
          <h2 className="text-xl">4 one-hour sessions</h2>
          <p>1x/week one-on-one</p>
          <p>$125/week</p>
          <p>$500/month</p>
        </div>

        <div>
          <h2 className="text-xl">one-off one-hour session (no programming)</h2>
          <p>$100</p>
        </div>

        <div>
          <h2 className="text-xl">online training</h2>
          <p>$150/month</p>
        </div>
      </div>
    </main>
  );
};
