'use client';

interface HeaderProps {
  onClearAll: () => void;
  onShowStatistics: () => void;
}

export function Header({ onClearAll, onShowStatistics }: HeaderProps) {
  return (
    <header className="bg-[#FFD500] border-b-2 border-[#383838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-1 sm:mb-2 text-[#383838]">
              FOUR QUADRANTS TO DO
            </h1>
            <p className="text-sm sm:text-base text-[#383838]/80">
              Organize tasks by urgency and importance
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={onClearAll}
              className="btn-white px-4 sm:px-6 py-2 sm:py-3 rounded-none font-bold text-xs sm:text-sm uppercase flex-1 sm:flex-initial"
            >
              CLEAR ALL
            </button>
            <button
              onClick={onShowStatistics}
              className="btn-blue px-4 sm:px-6 py-2 sm:py-3 rounded-none font-bold text-xs sm:text-sm uppercase flex-1 sm:flex-initial whitespace-nowrap"
            >
              📊 STATS
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
