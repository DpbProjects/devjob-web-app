import data from "../../content/data.json";

import JobCard from "./JobCard";

export default function JobList() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-8 gap-y-16 min-h-full pt-36">
      {data.map((item) => (
        <JobCard
          key={item.id}
          id={item.id}
          position={item.position}
          company={item.company}
          postedAt={item.postedAt}
          contract={item.contract}
          location={item.location}
          logo={item.logo}
          logoBackground={item.logoBackground}
        />
      ))}
    </div>
  );
}
