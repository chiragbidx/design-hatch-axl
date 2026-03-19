export default function DealsPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <h1 className="text-3xl font-bold mb-4">Deals</h1>
      <p className="mb-6 text-muted-foreground">
        No deals in progress. Create your first deal.
      </p>
      <a
        href="/dashboard/deals/new"
        className="inline-block rounded-lg bg-primary text-background px-6 py-3 font-semibold shadow-lg transition-colors hover:bg-primary/90"
      >
        Create Deal
      </a>
    </div>
  );
}