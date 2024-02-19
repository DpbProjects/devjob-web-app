type JobCardProps = {
  key: number;
  position: string;
  company: string;
  postedAt: string;
  contract: string;
  location: string;
  logo: string;
  logoBackground: string;
};

type ColourVariant =
  | "scoot"
  | "blogr"
  | "vector"
  | "office"
  | "pod"
  | "creative"
  | "pomodoro"
  | "maker"
  | "coffee"
  | "mastercraft"
  | "crowdfund"
  | "typemaster";

export default function JobCard({
  position,
  company,
  postedAt,
  contract,
  location,
  logo,
  logoBackground,
}: JobCardProps) {
  const colourVariants: Record<ColourVariant, string> = {
    scoot: `bg-scoot`,
    blogr: `bg-blogr`,
    vector: `bg-vector`,
    office: `bg-office`,
    pod: `bg-pod`,
    creative: `bg-creative`,
    pomodoro: `bg-pomodoro`,
    maker: `bg-maker`,
    coffee: `bg-coffee`,
    mastercraft: `bg-mastercraft`,
    crowdfund: `bg-crowdfund`,
    typemaster: `bg-typemaster`,
  };

  const variantKey = logoBackground as ColourVariant;

  return (
    <a
      href="/"
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
    </a>
  );
}
