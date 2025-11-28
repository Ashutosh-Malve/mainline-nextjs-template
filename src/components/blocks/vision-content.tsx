import { Check } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

export function VisionContent() {
  return (
    <div className="space-y-28 lg:space-y-32">
      {/* Why Edgebase Exists */}
      <section>
        <div className="container max-w-5xl">
          <h2 className="mb-6 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Why Edgebase Exists
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold">Core Insight</h3>
              <p className="text-muted-foreground leading-relaxed">
                Frontend engineers want to build production-grade apps—fast—without dealing with fragmented backend infrastructure, 
                poor observability, or edge-incompatible platforms. But today's backend options are either too generic or too AI-specific, 
                lacking balance and modern design.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold">Too Many Services</h4>
                  <p className="text-muted-foreground text-sm">
                    Supabase, Vercel, Prisma, OpenAI, Redis, Pinecone, stitched manually — high cognitive load, messy integration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold">Latency Issues</h4>
                  <p className="text-muted-foreground text-sm">
                    Cold starts, regional lag — bad UX, especially for global users.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold">No Real Memory Model</h4>
                  <p className="text-muted-foreground text-sm">
                    No persistent state per user/session — requires hacks via Redis or local state.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold">Poor Observability</h4>
                  <p className="text-muted-foreground text-sm">
                    No tracing, failure, or cost visibility — difficult to debug or optimize.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section>
        <div className="container max-w-5xl">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
              CORE PLATFORM FEATURES
            </span>
          </div>

          <h2 className="mb-8 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            The Platform
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Auth</h3>
                <p className="text-muted-foreground text-sm">
                  Email, OAuth, JWT out-of-the-box
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">PostgreSQL</h3>
                <p className="text-muted-foreground text-sm">
                  Global-ready SQL via Hyperdrive or native connection
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">File Storage</h3>
                <p className="text-muted-foreground text-sm">
                  Cloudflare R2-backed object storage
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Functions</h3>
                <p className="text-muted-foreground text-sm">
                  Global compute via Workers, zero cold starts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Memory</h3>
                <p className="text-muted-foreground text-sm">
                  Per-user/session scoped durable memory via Durable Objects
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Knowledge Store</h3>
                <p className="text-muted-foreground text-sm">
                  Built-in document ingestion, embedding, querying
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Tool Binding</h3>
                <p className="text-muted-foreground text-sm">
                  One config to expose HTTP, DB, or external workflows
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Observability</h3>
                <p className="text-muted-foreground text-sm">
                  Tracing, cost, usage, failure introspection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section>
        <div className="container max-w-5xl">
          <h2 className="mb-6 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Developer Experience
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Designed for modern product engineers, not backend specialists.
          </p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Interfaces</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>JS/TS SDK</strong> (@edgebase/client) – Works in browser, Node.js, and edge
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>CLI</strong> – edgebase init, edgebase dev, edgebase deploy, edgebase trace
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>Dashboard</strong> – Logs, memory browser, usage metrics, deployment view
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>Config-as-Code</strong> – YAML or edgebase.config.ts
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">DX Principles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>No boilerplate:</strong> Instant setup, zero fetch plumbing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>CLI-first:</strong> Local dev, mock sessions, tracing built-in
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>Edge-native:</strong> Built for latency-sensitive apps
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      <strong>Fully Managed:</strong> No Docker, no cluster config, no glue code
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section>
        <div className="container max-w-5xl">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
              ARCHITECTURE
            </span>
          </div>

          <h2 className="mb-8 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Architecture Overview
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Compute</h3>
                <p className="text-muted-foreground text-sm mb-2">Workers</p>
                <p className="text-muted-foreground text-xs">
                  Low-latency global execution
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">State</h3>
                <p className="text-muted-foreground text-sm mb-2">Durable Objects</p>
                <p className="text-muted-foreground text-xs">
                  Session-aware memory, coordination
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Storage</h3>
                <p className="text-muted-foreground text-sm mb-2">R2</p>
                <p className="text-muted-foreground text-xs">
                  Secure object storage
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Database</h3>
                <p className="text-muted-foreground text-sm mb-2">Postgres</p>
                <p className="text-muted-foreground text-xs">
                  Via Hyperdrive or BYODB
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <div className="container max-w-5xl">
          <h2 className="mb-8 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Use Cases
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">1. Fullstack SaaS Backend</h3>
                <p className="text-muted-foreground text-sm">
                  Auth, DB, storage, file handling, user sessions. No AWS or GCP setup, deploy from CLI.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">2. Real-Time or Edge Apps</h3>
                <p className="text-muted-foreground text-sm">
                  Global latency guarantees (&lt;60ms). Durable state per user/session.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">3. AI-Enhanced Products</h3>
                <p className="text-muted-foreground text-sm">
                  Tools, memory, observability + gateway support. Declarative config, no LangChain required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section>
        <div className="container max-w-5xl">
          <h2 className="mb-6 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What We're Not
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Not ML-ops tooling</strong> — We're focused on backend infrastructure, not ML model training or deployment pipelines.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Not CRUD-only</strong> — While we support CRUD out-of-box, we're built for complex, real-time, edge-native applications.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Not glued-together infra</strong> — Everything is unified, not a collection of services you need to wire together.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Not opinionated about frontend</strong> — Works with any frontend stack, framework, or platform.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6 text-lg">
            We're the future-ready backend, engineered for modern product teams.
          </p>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section>
        <div className="container max-w-5xl">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
              STRATEGIC POSITIONING
            </span>
          </div>

          <h2 className="mb-6 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Strategic Positioning
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Edgebase is a fully managed backend for modern apps — fast to build, scalable by design, 
            and built on edge-native primitives. It replaces 5+ tools and lets you ship faster, debug easier, 
            and scale cheaper.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Cloudflare-native</h3>
                <p className="text-muted-foreground text-sm">
                  Speed, reliability, no cold starts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Modern dev ergonomics</h3>
                <p className="text-muted-foreground text-sm">
                  SDK + CLI + dashboard
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Optional AI stack</h3>
                <p className="text-muted-foreground text-sm">
                  Memory, tools, gateway, observability
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">Unified DX</h3>
                <p className="text-muted-foreground text-sm">
                  Fullstack without glue code or duct tape
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Concepts */}
      <section>
        <div className="container max-w-5xl">
          <h2 className="mb-8 text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Roadmap Concepts
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Immediate</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Core SDK (auth, memory, tools)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">CLI + config setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Postgres & R2 integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Edge-native deploy flow</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Mid-Term</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Observability: trace viewer, token cost, errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Knowledge store (docs, embeddings, queries)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Secure rate limiting + metering</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Gateway support for OpenAI, Claude, OSS</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Long-Term</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Multi-agent orchestration (optional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Private model hosting gateway</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Org/team usage controls + billing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

