export default function CreateDealPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Create Deal</h1>
      <p className="mb-6 text-muted-foreground">
        Input deal information to start tracking in your pipeline.
      </p>
      <button
        className="rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-lg transition-colors hover:bg-primary/90"
        disabled
      >
        Save Deal
      </button>
    </div>
  );
}