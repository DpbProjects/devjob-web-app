import { Link } from "react-router-dom";

import { colourVariants } from "../../utils";
import type { ColourVariant } from "../../types";

type JobCardProps = {
  id: number;
  position: string;
  company: string;
  postedAt: string;
  contract: string;
  location: string;
  logo: string;
  logoBackground: string;
};

export default function JobCard({
  id,
  position,
  company,
  postedAt,
  contract,
  location,
  logo,
  logoBackground,
}: JobCardProps) {
  const variantKey = logoBackground as ColourVariant;

  return (
    <Link
      to={`/job-detail/${id}`}
      className=" group relative bg-white dark:bg-dark-blue p-8 pt-12 hover:text-dark-grey"
    >
      <div
        className={`absolute top-[-21px] h-12 w-12 rounded-lg flex justify-center items-center ${colourVariants[variantKey]} `}
      >
        <img src={logo} alt={company} />
      </div>
      <p>
        <span className="mr-2">{postedAt}</span>
        <span className="text-h1">&#x002E;</span>
        <span className="ml-2">{contract}</span>
      </p>
      <h3 className="py-3 group-hover:text-dark-grey transition-colors duration-300">
        {position}
      </h3>
      <p className="pb-11">{company}</p>
      <p className="text-violet">{location}</p>
    </Link>
  );
}
