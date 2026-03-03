export default function Logo() {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 group cursor-pointer">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transition duration-300 group-hover:scale-105"
      >
        {/* Hexagon */}
        <polygon
          points="50,5 90,25 90,75 50,95 10,75 10,25"
          fill="none"
          stroke="#a855f7"
          strokeWidth="4"
          className="transition duration-300 group-hover:stroke-white"
        />

        {/* Letter */}
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fill="#a855f7"
          fontSize="40"
          fontWeight="600"
          className="transition duration-300 group-hover:fill-white"
        >
          S
        </text>
      </svg>
    </div>
  );
}