export default function IdPHomePage() {
  return (
    <div className="p-4 flex min-h-screen items-center justify-center">
      <div className="max-w-lg relative w-full text-center">
        {/* Ambient glow */}
        <div className="inset-0 pointer-events-none fixed overflow-hidden">
          <div className="-left-40 -top-40 h-96 w-96 bg-blue-600/10 blur-3xl absolute rounded-full" />
          <div className="-bottom-40 -right-40 h-96 w-96 bg-cyan-600/10 blur-3xl absolute rounded-full" />
        </div>

        <div className="border-white/10 bg-white/5 p-12 backdrop-blur-2xl relative rounded-3xl border shadow-2xl">
          {/* Logo */}
          <div className="mb-6 h-20 w-20 from-blue-500 to-cyan-500 text-3xl font-bold shadow-blue-500/25 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
            N
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Nebutra Identity</h1>
          <p className="mt-3 text-white/50">OAuth 2.0 / OpenID Connect Identity Provider</p>

          {/* OIDC Discovery Endpoint */}
          <div className="mt-8 border-white/5 bg-white/5 p-4 rounded-xl border">
            <p className="text-xs font-medium tracking-wider text-white/40 uppercase">
              Discovery Endpoint
            </p>
            <code className="mt-2 text-sm text-cyan-400 block">
              /api/oidc/.well-known/openid-configuration
            </code>
          </div>

          <div className="mt-6 text-xs text-white/30">
            This server provides secure authentication for the Nebutra ecosystem.
          </div>
        </div>
      </div>
    </div>
  );
}
