"use client";

import { DashboardContent } from "@/components/dashboard/dashboard-content";

// Purpose: Client UI for /dashboard.
// Use this file for interactive/dashboard presentation logic.

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="my-10 mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-bold mb-3">Welcome to DealNest</h1>
      <p className="mb-6 text-muted-foreground">
        Hi there! DealNest brings your contacts, organizations, and deals together in one powerful dashboard. Start building your sales pipeline now.
      </p>
      <a
        href="/dashboard/contacts/new"
        className="inline-block rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-lg transition-colors hover:bg-primary/90"
      >
        Add Contact
      </a>
    </div>
  );
}