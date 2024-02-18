import JobList from "../components/modules/JobList";
import JobSearchBar from "../components/modules/JobSearchBar";

export default function IndexPage() {
  return (
    <div className="bg-off-white dark:bg-midnight relative">
      <main className=" relative h-screen m-auto max-w-[327px] sm:max-w-[689px] lg:max-w-[1110px]">
        <JobSearchBar />
        <JobList />
      </main>
    </div>
  );
}
