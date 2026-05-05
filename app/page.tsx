export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Business Continuity
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Never Let Stripe Take Your
          <span className="text-[#58a6ff]"> Business Down</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor your Stripe account health, auto-export your data, and keep Paddle or LemonSqueezy ready as instant backup processors — so a Stripe ban never means business death.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Get Backup Kit — $79/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Setup in under 10 minutes.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: "Health Monitoring", desc: "24/7 alerts for Stripe account flags, disputes, and risk signals before they escalate." },
          { title: "Automated Exports", desc: "Daily encrypted exports of customers, subscriptions, and payment history to your storage." },
          { title: "One-Click Migration", desc: "Pre-configured Paddle & LemonSqueezy accounts ready to activate in seconds." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">All-Inclusive</p>
          <p className="text-5xl font-bold text-white mb-1">$79</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Stripe account health dashboard",
              "Daily automated data exports",
              "Paddle + LemonSqueezy backup setup",
              "One-click migration wizard",
              "Email + Slack incident alerts",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Backup Kit
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What happens if Stripe bans my account?",
              a: "Your backup processor (Paddle or LemonSqueezy) is pre-configured and ready. You activate it with one click and your customers are migrated automatically using the synced data we maintain daily."
            },
            {
              q: "How does the data export work?",
              a: "We connect via Stripe's API and export your customers, subscriptions, invoices, and payment methods daily to encrypted storage you control — S3, Google Cloud, or Dropbox."
            },
            {
              q: "Do I need technical knowledge to set this up?",
              a: "No. Our guided setup wizard walks you through connecting Stripe and configuring your backup processor in under 10 minutes. No code required."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Stripe Business Backup Kit. All rights reserved.
      </footer>
    </main>
  );
}
