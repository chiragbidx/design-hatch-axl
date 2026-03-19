export default function OverviewPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Overview</h1>
      <p className="mb-6 text-muted-foreground">
        Get a snapshot of your sales pipeline and recent activity.
      </p>
      <a
        href="/dashboard/contacts/new"
        className="inline-block rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-lg transition-colors hover:bg-primary/90"
      >
        Add Contact
      </a>
      <div className="mt-12 text-muted-foreground">
        <p className="text-lg">
          Your CRM workspace is ready. Add contacts or deals to get started!
        </p>
      </div>
    </div>
  );
}