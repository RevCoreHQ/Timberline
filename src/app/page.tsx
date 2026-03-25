export default function MaintenancePage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
          We&apos;re currently making updates to improve your experience.
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          The site will be back online shortly.
        </p>
        <p className="text-slate-500">
          For inquiries, please contact us directly at{' '}
          <a href="tel:+18015020306" className="text-slate-700 underline">(801) 502-0306</a>
          {' '}or{' '}
          <a href="mailto:info@timberlinefallsut.com" className="text-slate-700 underline">info@timberlinefallsut.com</a>
        </p>
      </div>
    </main>
  );
}
