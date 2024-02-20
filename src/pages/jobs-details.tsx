import { useParams } from "react-router-dom";
import data from "../content/data.json";
import { colourVariants } from "../utils";
import type { ColourVariant } from "../types";

export default function JobsDetailsPage() {
  const { id } = useParams();
  const job = data.find((job) => job.id === Number(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  const variantKey = job.logoBackground as ColourVariant;

  return (
    <main className="bg-off-white dark:bg-midnight relative">
      <div className="relative min-h-screen m-auto max-w-[327px] sm:max-w-[689px] lg:max-w-[730px] pt-36 mb-20">
        {/* HEADER */}
        <div className="absolute top-[-44px] rounded-lg w-full flex flex-col sm:flex-row bg-white dark:bg-dark-blue">
          <div
            className={`absolute sm:static top-[-25px] left-[143px] rounded-lg h-12 w-12 sm:rounded-s-lg  sm:min-h-36 sm:min-w-36 flex justify-center items-center ${colourVariants[variantKey]} `}
          >
            <img className="sm:w-20" src={job?.logo} alt={job?.company} />
          </div>
          <div className="flex justify-between w-full px-10 py-11">
            <div>
              <h2 className="mb-3">{job?.company}</h2>
              <p>{job?.website}</p>
            </div>
            <button>Click me</button>
          </div>
        </div>

        {/* BODY */}

        <div className="rounded-lg p-12 bg-white dark:bg-dark-blue text-wrap">
          {/*Content: Header */}
          <div className="flex justify-between mb-10">
            <div>
              <p>
                <span className="mr-2">{job.postedAt}</span>
                <span className="text-h1">&#x002E;</span>
                <span className="ml-2">{job.contract}</span>
              </p>
              <h1 className="my-2 dark:text-white">{job.position}</h1>
              <p className="text-violet">{job.location}</p>
            </div>
            <button>Click me</button>
          </div>

          {/* Content: Description */}
          <p className="mb-10">{job.description}</p>

          {/* Content: Requirements */}
          <h3 className="">Requirements</h3>
          <p className="my-7">{job.requirements.content}</p>
          <ul className=" list-disc list-outside ml-4 mb-12">
            {job.requirements.items.map((item, index) => (
              <li key={index}>
                <span className="relative left-[10px]">{item}</span>
              </li>
            ))}
          </ul>

          {/* Content: Role */}
          <h3 className="">What we will do</h3>
          <p className="my-7">{job.role.content}</p>
          <ol className="list-decimal list-outside ml-4 marker:text-violet marker:font-bold">
            {job.requirements.items.map((item, index) => (
              <li key={index}>
                <span className="relative left-[10px]">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* FOOTER */}
      </div>
      <div className="min-w-full bg-white dark:bg-dark-blue py-6">
        <div className="flex m-auto max-w-[327px] sm:max-w-[689px] lg:max-w-[730px]">
          <div>
            <h3 className="my-2 dark:text-white">{job.position}</h3>
            <p className="mb-3">{job?.company}</p>
          </div>
          <button className="ml-auto">click</button>
        </div>
      </div>
    </main>
  );
}
