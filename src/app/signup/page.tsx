import Link from "next/link";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getCanonicalUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Join the EdgeBase waitlist. Be the first to know when our fully managed backend platform is ready for early access. Zero servers. Zero DevOps. Zero cold starts.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: getCanonicalUrl("/signup"),
  },
};

const Signup = () => {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Card className="mx-auto w-full max-w-sm">
              <CardHeader className="flex flex-col items-center space-y-0">
                <div className="mb-7 flex items-center gap-2">
                  <span className="text-foreground text-2xl font-bold tracking-tight">
                    EdgeBase
                  </span>
                  <Badge variant="beta">Beta</Badge>
                </div>
                <p className="mb-2 text-2xl font-bold">Join the waitlist</p>
                <p className="text-muted-foreground">
                  We're launching soon. Be the first to know when we're ready.
                </p>
                <Badge variant="comingSoon" className="mt-3">Coming Soon</Badge>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input type="text" placeholder="Enter your name" required />
                  <Input type="email" placeholder="Enter your email" required />
                  <Button type="submit" className="mt-2 w-full" disabled>
                    Join Waitlist
                  </Button>
                  <p className="text-muted-foreground text-center text-sm">
                    We'll notify you as soon as EdgeBase is ready for early access.
                  </p>
                </div>
                <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                  <p>Already have an account?</p>
                  <Link href="/login" className="text-primary font-medium">
                    Log in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Background>
  );
};

export default Signup;
