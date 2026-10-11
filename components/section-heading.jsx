export default function SectionHeading({ index, label, title, centered = false }) {
  return (
    <div className={centered ? "section-heading centered" : "section-heading"}>
      <p className="label">
        <span className="label-index">{index} /</span> {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}
