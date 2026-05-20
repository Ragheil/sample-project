import "./styles/phonipino.css";
import AppRouter from "./router/AppRouter";

// export default function App() {
//   return <AppRouter />;
// }

export default function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          padding: "60px 40px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.08)",
          maxWidth: "900px",
          width: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: "900",
            margin: "0 0 24px 0",
            letterSpacing: "-2px",
            lineHeight: "1",
            wordBreak: "break-word",
          }}
        >
          PHONIPINO
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            opacity: 0.8,
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          Website currently under maintenance.
          <br />
          We’ll be back shortly.
        </p>
      </div>
    </div>
  );
}