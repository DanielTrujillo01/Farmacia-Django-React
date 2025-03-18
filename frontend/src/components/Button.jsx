export default function Button({ children, onClick, className = "" }) {
    return (
      <button
        onClick={onClick}
        className={`bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-teal-600 transition-all ${className}`}
      >
        {children}
      </button>
    );
  }
