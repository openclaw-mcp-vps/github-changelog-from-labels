export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs<br />
          <span className="text-[#58a6ff]">from PR labels</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your GitHub repo, tag PRs with labels like <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">feature</code>, <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">fix</code>, or <code className="bg-[#161b22] px-1 rounded text-[#58a6ff]">breaking</code>, and get a polished markdown changelog in seconds — every release.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for trial &middot; Cancel anytime</p>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#c9d1d9] leading-relaxed">
          <p className="text-[#8b949e] mb-2"># Changelog — v2.4.0</p>
          <p><span className="text-[#3fb950]">### ✨ Features</span></p>
          <p className="ml-4">- Add dark mode toggle (#142)</p>
          <p className="ml-4">- Support multi-repo scanning (#138)</p>
          <p className="mt-2"><span className="text-[#f85149]">### 🐛 Bug Fixes</span></p>
          <p className="ml-4">- Fix label parsing for hyphenated names (#145)</p>
          <p className="mt-2"><span className="text-[#d29922]">### ⚠️ Breaking Changes</span></p>
          <p className="ml-4">- Rename `config.yml` to `changelog.yml` (#140)</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repos",
              "GitHub OAuth integration",
              "Auto-categorize by PR labels",
              "Markdown & HTML export",
              "Slack / email delivery",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">Which PR labels does it support?</h3>
            <p className="text-[#8b949e] text-sm">Any label you use. You map your labels to changelog categories (feature, fix, breaking, chore, etc.) in a simple config file. Works with any GitHub labeling convention.</p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to GitHub?</h3>
            <p className="text-[#8b949e] text-sm">Via GitHub OAuth. You authorize read access to your repos and we fetch merged PR data using the GitHub API — no write permissions needed.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing dashboard at any time. Your subscription stays active until the end of the billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  );
}
