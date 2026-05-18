export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background decorative glow */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="text-center py-12 sm:py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-indigo-200 via-slate-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
          Authentication Built for Next.js
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
          Experience the power of Clerk. Elegant user flows, complete security, and flexible components, fully integrated with Next.js App Router.
        </p>
      </div>

      {/* Grid Features */}
      <div className="mx-auto mt-8 max-w-5xl sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold mb-4">
              🔑
            </div>
            <h3 className="text-lg font-semibold text-white">Prebuilt Components</h3>
            <p className="mt-2 text-sm text-slate-400">
              Beautiful, accessible components like &lt;UserButton /&gt;, &lt;SignInButton /&gt;, and &lt;SignUpButton /&gt; built directly for Next.js.
            </p>
            <a
              href="https://clerk.com/docs/reference/components/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition cursor-pointer"
            >
              Explore Components &rarr;
            </a>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">
              🏢
            </div>
            <h3 className="text-lg font-semibold text-white">Organizations</h3>
            <p className="mt-2 text-sm text-slate-400">
              Easily manage organizations, invites, roles, permissions, and members with Clerk's built-in multi-tenant architecture.
            </p>
            <a
              href="https://clerk.com/docs/guides/organizations/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition cursor-pointer"
            >
              Learn Organizations &rarr;
            </a>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="h-10 w-10 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold mb-4">
              🎛️
            </div>
            <h3 className="text-lg font-semibold text-white">Admin Dashboard</h3>
            <p className="mt-2 text-sm text-slate-400">
              Configure environments, customize user emails, configure webhooks, social connections, and manage active user sessions.
            </p>
            <a
              href="https://dashboard.clerk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-pink-400 hover:text-pink-300 transition cursor-pointer"
            >
              Go to Dashboard &rarr;
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
