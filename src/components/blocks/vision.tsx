import { DashedLine } from "../dashed-line";

export const Vision = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Building the future of edge computing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-balance leading-relaxed">
            We're on a mission to make global-scale backend infrastructure accessible to every developer. 
            EdgeBase combines the simplicity of Firebase with the power of Cloudflare's edge network, 
            giving you sub-200ms latency worldwide, zero egress costs, and complete data ownership—all 
            without the complexity of managing servers or the lock-in of traditional platforms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              🌍 Global by Default
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every request is served from the edge location closest to your users. No configuration needed, 
              no regional limitations—just instant global performance.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              🔓 Zero Lock-In
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Own your data, your logic, and your infrastructure. Built on open standards with 
              portable APIs that give you the freedom to move when you need to.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              ⚡ Built for Speed
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sub-200ms latency worldwide with automatic scaling, zero cold starts, and real-time 
              data sync that works seamlessly across continents.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              💰 Transparent Pricing
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Zero egress fees, predictable costs, and a free tier that actually lets you build 
              and deploy real applications without hitting artificial limits.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              🛠️ Developer First
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Designed by developers, for developers. Simple APIs, comprehensive documentation, 
              and a focus on developer experience that gets out of your way.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-foreground text-lg font-semibold">
              🚀 Production Ready
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built on Cloudflare's battle-tested infrastructure, serving millions of requests 
              per second with 99.99% uptime and enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

