export default function AddOrganizationPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Add Organization</h1>
      <p className="mb-6 text-muted-foreground">
        Enter organization details to get started.
      </p>
      <button
        className="rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-lg transition-colors hover:bg-primary/90"
        disabled
      >
        Save Organization
      </button>
    </div>
  );
}