export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="grid gap-6 border-t border-line py-16 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12 md:py-24"
    >
      <h2
        id={`${id}-heading`}
        className="text-[15px] font-semibold tracking-tight text-fg md:sticky md:top-24 md:self-start md:pt-0.5"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
