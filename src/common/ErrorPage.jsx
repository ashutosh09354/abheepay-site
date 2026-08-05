import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#D4F3F4] bg-white px-8 py-12 shadow-xl shadow-slate-200/40">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#00AEB2]">Oops</p>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-[#0F172A] sm:text-6xl">404</h1>
          <p className="mt-4 text-xl font-semibold text-slate-700">Page not found</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            The page you are looking for doesn't exist or may have moved. Try navigating back to the home page or explore one of our product pages.
          </p>

          {error && (
            <p className="mt-4 text-sm text-slate-500">
              {error.statusText || error.message}
            </p>
          )}

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#14d0d4]"
            >
              Go Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
