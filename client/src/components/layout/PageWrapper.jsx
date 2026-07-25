export default function PageWrapper({ children }) {
  return (
    <div
      className="
        animate-[fadeIn_.35s_ease]
      "
    >
      {children}
    </div>
  );
}