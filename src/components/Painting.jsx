import "./MuseumWall.css";

export default function Painting({
  image,
  frame,
  className,
  onClick,
}) {

  return (

    <div
      className={`painting-wrapper ${className}`}
      onClick={onClick}
    >

      {/* PAINTING */}

      {image ? (
        <img
          src={image}
          alt=""
          className="painting-art"
        />
      ) : (
        <div className="placeholder-art"></div>
      )}

      {/* FRAME */}

      <img
        src={frame}
        alt=""
        className="frame-overlay"
      />

    </div>
  );
}