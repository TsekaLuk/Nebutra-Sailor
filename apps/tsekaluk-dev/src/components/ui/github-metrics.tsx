import { getGithubData } from "@/lib/github";
import { NumberTicker } from "@/components/ui/number-ticker";
import { GitCommit, Star, Users, Briefcase } from "lucide-react";
import { AnimateIn } from "@nebutra/ui/components";

export async function GithubMetrics() {
  const data = await getGithubData();

  const metrics = [
    {
      label: "Commits",
      value: data.commits,
      icon: <GitCommit className="h-4 w-4 text-gray-500" />,
    },
    {
      label: "Repos",
      value: data.repos,
      icon: <Briefcase className="h-4 w-4 text-gray-500" />,
    },
    {
      label: "Followers",
      value: data.followers,
      icon: <Users className="h-4 w-4 text-gray-500" />,
    },
    {
      label: "Stars",
      value: data.stars,
      icon: <Star className="h-4 w-4 fill-current text-yellow-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
      {metrics.map((metric, i) => (
        <AnimateIn key={metric.label} preset="fadeUp" delay={i * 0.1} inView>
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-2 mb-2">
              {metric.icon}
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.label}
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <NumberTicker value={metric.value} />
            </div>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
