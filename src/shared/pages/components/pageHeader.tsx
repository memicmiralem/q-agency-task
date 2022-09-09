export const PageHeader = () => {
  return (
    <div className="w-full h-20 bg-slate-800 top-0 left-0 fixed flex items-center justify-around">
      <div className="text-white text-3xl font-semibold">
        {"Posts&Comments"}
      </div>
      <input
        className="pr-10 py-1 pl-3 rounded"
        placeholder="Search by user info"
        type="text"
      />
    </div>
  );
};