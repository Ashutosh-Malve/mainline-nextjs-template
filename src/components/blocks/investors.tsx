const investors = [
  {
    name: "Dennis Bouvard",
    company: "Blackbird Ventures",
  },
  {
    name: "Renatus Gerard",
    company: "Center Studies",
  },
  {
    name: "Leslie Alexander",
    company: "TechNexus",
  },
  {
    name: "Matthew Stephens",
    company: "Etymol Cap",
  },
  {
    name: "Josephine Newman",
    company: "Vandenberg",
  },
];

export function Investors() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-foreground text-4xl font-medium tracking-wide">
        Our investors
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {investors.map((investor) => (
          <div key={investor.name} className="">
            <h3 className="font-semibold">{investor.name}</h3>
            <p className="text-muted-foreground">{investor.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
