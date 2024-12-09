import React, { memo } from 'react';

const calculatePercentage = (votes, total) => {
  if (total === 0) return 0;
  return parseFloat((votes / total) * 100).toFixed(2);
};

const ProgressBar = memo(({ percentage, isSelected }) => (
  <div className={`h-2 border border-gray-200 rounded-md w-full overflow-hidden ${
    isSelected ? "text-blue-600" : "text-gray-200"
  }`}>
    <div
      className="h-full bg-current rounded-md transition-transform duration-500"
      style={{ transform: `scaleX(${percentage}%)` }}
    />
  </div>
));

const VoteCount = memo(({ count }) => (
  <span>
    ({count} {count === 1 ? "Vote" : "Votes"})
  </span>
));

export const PollOption = memo(({ 
  option, 
  totalVotes, 
  onClick, 
  disableSelection 
}) => {
  const percentage = calculatePercentage(option.voteCount, totalVotes);
  
  const handleClick = () => {
    if (!disableSelection) {
      onClick(option.id);
    }
  };

  const buttonClasses = `
    flex flex-col gap-2 pt-4 md:p-4 w-full text-lg font-medium rounded-md 
    transition-all duration-500
    ${option.isSelected ? "border-rose-600 !opacity-100" : "border-gray-100"}
    ${disableSelection 
      ? "cursor-not-allowed opacity-50" 
      : "outline-rose-600 hover:border-rose-600"
    }
  `;

  return (
    <button
      onClick={handleClick}
      disabled={disableSelection}
      className={buttonClasses}
    >
      <div className="flex items-center justify-between gap-2 flex-wrap w-full">
        <span title={option.label}>
          {option.label}{' '}
          <VoteCount count={option.voteCount} />
        </span>
        <span className="shrink-0">{percentage}%</span>
      </div>

      <ProgressBar 
        percentage={percentage}
        isSelected={option.isSelected}
      />
    </button>
  );
});

PollOption.displayName = 'PollOption';