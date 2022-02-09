// import { TabBar } from '@/components/TabBar'

export const Editor: React.FC<{
  copied: boolean;
  filename: string;
  onCopy: () => void;
}> = ({ filename, copied, onCopy, children }) => {
  return (
    <div className="mt-5 mb-8 overflow-hidden rounded-xl bg-slate-800 pt-2 shadow-lg first:mt-0 last:mb-0 dark:ring-1 dark:ring-inset dark:ring-white/10">
      <div className="relative flex text-xs leading-6 ">
        <div className="mt-2 flex flex-none items-center border-t border-b border-t-transparent border-b-gray-300 px-4 py-1 text-indigo-300">
          {filename}
        </div>
        <div className="flex flex-auto overflow-hidden rounded-tr-xl">
          <div className="-mr-px flex-auto rounded-tl border border-slate-500/30 bg-slate-700/50"></div>
        </div>
        <div className="absolute top-2 right-0 flex items-center pr-4">
          <div className="relative -mr-2 flex">
            <button
              aria-label="Copy code"
              type="button"
              className={
                copied
                  ? "border-green-400 focus:border-green-400 focus:outline-none"
                  : "border-gray-300"
              }
              onClick={onCopy}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className={`h-6 w-6 ${
                  copied ? "stroke-green-400" : "stroke-gray-500"
                }`}
              >
                {copied ? (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </>
                ) : (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
