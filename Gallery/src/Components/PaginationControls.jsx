import React from "react";

const PaginationControls = ({ page, setPage, limit, setLimit }) => {
  return (
    <div className="flex items-center gap-6 p-6">

      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="px-4 py-2 bg-amber-300 text-black rounded font-semibold active:scale-95"
      >
        Prev
      </button>

      <span>Page: {page}</span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-4 py-2 bg-amber-300 text-black rounded font-semibold active:scale-95"
      >
        Next
      </button>

      <div className="flex items-center gap-3">
        <label className="font-medium">Pictures per page:</label>

        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>

    </div>
  );
};

export default PaginationControls;