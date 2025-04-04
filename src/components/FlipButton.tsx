export default function FlipButton() {
    return (
      <button className="relative px-6 py-3 text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700 perspective-1000">
        <div
          className="button-text inline-block transition-transform duration-300 ease-in-out"
          style={{
            transform:
              "translate3d(0px, 0%, 0px) rotateX(0deg) scale3d(1, 1, 1)",
            transformStyle: "preserve-3d",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.transform =
              "translate3d(0px, -100%, 0px) rotateX(90deg)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.transform =
              "translate3d(0px, 0%, 0px) rotateX(0deg)")
          }
        >
          Home
        </div>
      </button>
    );
  }
  