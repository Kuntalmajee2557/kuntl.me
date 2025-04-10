'use client';
import GitHubCalendar from 'react-github-calendar';

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export const GithubStats = () => {
  const selectLastTwoMonths = (contributions: Contribution[]) => {
    const today = new Date();
    const startOfTwoMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    
    return contributions.filter((day: Contribution) => {
      const contributionDate = new Date(day.date);
      return contributionDate >= startOfTwoMonthsAgo && contributionDate <= today;
    });
  };

  return (
    <div className="flex flex-col items-center p-4 text-gray-300 border border-slate-600 rounded-md w-auto hover:border-cyan-400 hover:scale-105 duration-300">
      <GitHubCalendar 
        username="Kuntlme"
        colorScheme="dark"
        fontSize={16}
        blockSize={12}
        transformData={selectLastTwoMonths}
        hideColorLegend={true}
        hideTotalCount={true}
      />
    </div>
  );
};