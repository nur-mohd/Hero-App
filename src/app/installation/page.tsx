"use client";
import { AppContext } from "@/context/AppProvider";
import { IApp } from "@/types/apps.type";
import Image from "next/image";
import { useContext } from "react";
import { useState } from "react";

const InstallationPage = () => {
  const { installedApps, setInstalledApps } = useContext(AppContext);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const sortedApps = [...installedApps].sort((firstApp, secondApp) =>
    sortOrder === "desc"
      ? secondApp.size - firstApp.size
      : firstApp.size - secondApp.size,
  );

  const handleUninstall = (appId: number) => {
    setInstalledApps((currentApps) =>
      currentApps.filter((app) => app.id !== appId),
    );
  };

  return (
    <main className="container mx-auto flex-1 px-4 py-10">
      <div className="mx-auto max-w-xl space-y-4 text-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-sm text-base-content/60">
          Manage all the apps you have installed.
        </p>
      </div>

      {installedApps.length > 0 ? (
        <section className="mx-auto mt-10 max-w-4xl">
          <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold">
              {installedApps.length} {installedApps.length === 1 ? "App" : "Apps"} Found
            </p>

            <label className="flex items-center gap-2 text-sm text-base-content/70">
              <span>Sort by Size</span>
              <select
                value={sortOrder}
                onChange={(event) =>
                  setSortOrder(event.target.value as "desc" | "asc")
                }
                className="select select-sm select-bordered"
                aria-label="Sort installed apps by size"
              >
                <option value="desc">Largest first</option>
                <option value="asc">Smallest first</option>
              </select>
            </label>
          </div>

          <div className="divide-y overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-sm">
            {sortedApps.map((app: IApp) => (
              <article
                key={app.id}
                className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <Image
                    src={app.image}
                    alt={app.title}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                  />

                  <div className="min-w-0">
                    <h2 className="truncate font-semibold">{app.title}</h2>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-base-content/60">
                      <span className="text-success">★ {app.ratingAvg}</span>
                      <span>{app.size} MB</span>
                      <span>{app.downloads} downloads</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleUninstall(app.id)}
                  className="btn btn-sm btn-error btn-outline self-end sm:self-auto"
                >
                  Uninstall
                </button>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <p className="py-20 text-center text-2xl font-bold text-base-content/50">
          No installed apps found.
        </p>
      )}
    </main>
  );
};

export default InstallationPage;