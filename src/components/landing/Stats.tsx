const stats = [
  { value: "12M+", label: "Messages delivered to date" },
  { value: "94%", label: "Average customer response rate" },
  { value: "4.9★", label: "Rated by 450+ customers" },
  { value: "#1", label: "WhatsApp AI Sales Platform in Southeast Asia" },
];

export const Stats = () => (
  <section className="py-20">
    <div className="container">
      <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 sm:p-12 shadow-elevated relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">{s.value}</div>
              <p className="mt-2 text-sm opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
