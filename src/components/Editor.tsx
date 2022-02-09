// import { TabBar } from '@/components/TabBar'

export function Editor({ filename, children }) {
  return (
    <div className="mt-5 mb-8 overflow-hidden rounded-xl bg-slate-800 pt-2 shadow-lg first:mt-0 last:mb-0 dark:ring-1 dark:ring-inset dark:ring-white/10">
      {/* <TabBar primary={{ name: filename }} showTabMarkers={false} /> */}
      <div className="children:my-0 children:!shadow-none children:bg-transparent">
        {children}
      </div>
    </div>
  );
}
