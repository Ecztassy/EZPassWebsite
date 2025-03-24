export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,180,0.15),transparent_70%)]"
        style={{
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%), linear-gradient(to right, rgba(120,40,180,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,40,180,0.3) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          backgroundPosition: "center, center, center",
          backgroundRepeat: "no-repeat, repeat, repeat",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
          height: "200%",
          top: "-50%",
        }}
      ></div>

      {/* Binary code overlay */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="animate-matrix font-mono text-xs text-purple-500 whitespace-nowrap">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="leading-none">
              {Array.from({ length: 100 }).map((_, j) => (
                <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

