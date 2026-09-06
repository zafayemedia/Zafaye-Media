// Highlights the exact stat figure ("8.4x", "7x", "PKR 80-100"...) wherever
// it appears written out inside a case study's prose summary, in the same
// orange used for the standalone result badge next to it. Pure string match
// — never invents or reformats the number, just colours the substring that's
// already there.
export default function HighlightStat({ text, stat }: { text: string; stat: string }) {
  const index = text.indexOf(stat);
  if (index === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, index)}
      <span style={{ color: "var(--zm-orange)" }}>{stat}</span>
      {text.slice(index + stat.length)}
    </>
  );
}
