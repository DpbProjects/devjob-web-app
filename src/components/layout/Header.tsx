import ThemeToggler from "../ui/ThemeToggler";

export default function Header() {
  // large  h-60
  // laptop h-40

  return (
    <div className="bg-off-white dark:bg-midnight">
      <div className="bg-header-pattern-mobile md:bg-header-pattern-desktop xl:bg-header-pattern-mobile bg-no-repeat bg-cover h-40">
        <div className="flex max-w-6xl  m-auto justify-between pt-12 px-6 md:px-10">
          <h1>devjobs</h1>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
