export default function OrganizationsPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Organizations</h1>
      <p className="mb-6 text-muted-foreground">
        No organizations added yet.
      </p>
      <a
        href="/dashboard/organizations/new"
        className="inline-block rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-lg transition-colors hover:bg-primary/90"
      >
        Add Organization
      </a>
    </div>
  );
}