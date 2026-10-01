import Link from 'next/link';
import { Sprout, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream px-4 py-16 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
          <Sprout className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-primary font-sans">
          Page Not Found
        </h1>
        <p className="text-brandText-muted text-base leading-relaxed">
          The garden path you were looking for doesn&apos;t seem to exist. Let&apos;s guide you back to fertile ground.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-cream hover:bg-primary-dark px-6 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
