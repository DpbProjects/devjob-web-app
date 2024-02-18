export default function JobList() {
  const grid = new Array(12).fill("grid");

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-8 gap-y-16 min-h-full pt-36">
      {grid.map((item, index) => (
        <div
          className="justify-center border-dashed border-2 border-gray"
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
