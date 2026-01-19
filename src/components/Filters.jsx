export default function Filters({ filter, setFilter }) {
  return (
    /* ---------- Filter Buttons Container ----------
       Holds all filter buttons (All / Active / Completed)
       Styled using `.filters` class for layout and spacing
    */
    <div className="filters">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}

          /* ---------- Active Filter Styling ----------
             Adds `.active` class to highlight
             the currently selected filter button
          */
          className={filter === f ? "active" : ""}

          /* ---------- Filter Change Handler ----------
             Updates filter state on click
             Triggers task re-render based on selection
          */
          onClick={() => setFilter(f)}
        >
          {/* Display filter name in uppercase for UI consistency */}
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
