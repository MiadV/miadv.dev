import { Fragment, useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import SunIcon from "@/assets/Icons/SunIcon";
import MoonIcon from "@/assets/Icons/MoonIcon";
import PcIcon from "@/assets/Icons/PcIcon";

function update() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark", "changing-theme");
  } else {
    document.documentElement.classList.remove("dark", "changing-theme");
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove("changing-theme");
  });
}

let settings = [
  {
    value: "light",
    label: "Light",
    icon: SunIcon,
  },
  {
    value: "dark",
    label: "Dark",
    icon: MoonIcon,
  },
  {
    value: "system",
    label: "System",
    icon: PcIcon,
  },
];

function useTheme() {
  let [setting, setSetting] = useState("system");
  let initial = useRef(true);

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme;
    if (theme === "light" || theme === "dark") {
      setSetting(theme);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (setting === "system") {
      localStorage.removeItem("theme");
    } else if (setting === "light" || setting === "dark") {
      localStorage.theme = setting;
    }
    if (initial.current) {
      initial.current = false;
    } else {
      update();
    }
  }, [setting]);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", update);

    function onStorage() {
      update();
      let theme = localStorage.theme;
      if (theme === "light" || theme === "dark") {
        setSetting(theme);
      } else {
        setSetting("system");
      }
    }
    window.addEventListener("storage", onStorage);

    return () => {
      mediaQuery.removeEventListener("change", update);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return { setting, setSetting };
}

export function ThemeToggle({ panelClassName = "mt-4" }) {
  let { setting, setSetting } = useTheme();

  return (
    <Listbox value={setting} onChange={setSetting}>
      <Listbox.Label className="sr-only">Change Theme</Listbox.Label>
      <Listbox.Button type="button">
        <span className="dark:hidden">
          <SunIcon className="fill-gray-600 hover:fill-indigo-600" />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="fill-gray-600 hover:fill-indigo-600" />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          "dark:highlight-white/5 absolute top-full right-0 z-50 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-gray-700 shadow-lg ring-1 ring-gray-900/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-0",
          panelClassName
        )}
      >
        {settings.map(({ value, label, icon: Icon }) => (
          <Listbox.Option key={value} value={value} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  "flex cursor-pointer items-center py-1 px-2",
                  selected && "text-indigo-500",
                  active && "bg-gray-50 dark:bg-gray-600/30"
                )}
              >
                <Icon className="mr-2 fill-gray-600 hover:fill-indigo-600" />
                {label}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

// export function ThemeSelect() {
//   let { setting, setSetting } = useTheme();

//   let option = settings.find((x) => x.value === setting);

//   return (
//     <div className='flex items-center justify-between'>
//       <label
//         htmlFor='theme'
//         className='text-gray-700 font-normal dark:text-gray-400'
//       >
//         Switch theme
//       </label>
//       <div className='relative flex items-center ring-1 ring-gray-900/10 rounded-lg shadow-sm p-2 text-gray-700 font-semibold dark:bg-gray-600 dark:ring-0 dark:highlight-white/5 dark:text-gray-200'>
//         <SunIcon className='w-6 h-6 mr-2 dark:hidden' />
//         <svg
//           viewBox='0 0 24 24'
//           fill='none'
//           className='w-6 h-6 mr-2 hidden dark:block'
//         >
//           <path
//             fillRule='evenodd'
//             clipRule='evenodd'
//             d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
//             className='fill-transparent'
//           />
//           <path
//             d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
//             className='fill-gray-400'
//           />
//           <path
//             fillRule='evenodd'
//             clipRule='evenodd'
//             d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
//             className='fill-gray-400'
//           />
//         </svg>
//         {option!.label}
//         <svg className='w-6 h-6 ml-2 text-gray-400' fill='none'>
//           <path
//             d='m15 11-3 3-3-3'
//             stroke='currentColor'
//             strokeWidth='2'
//             strokeLinecap='round'
//             strokeLinejoin='round'
//           />
//         </svg>
//         <select
//           id='theme'
//           value={setting}
//           onChange={(e) => setSetting(e.target.value)}
//           className='absolute appearance-none inset-0 w-full h-full opacity-0'
//         >
//           {settings.map(({ value, label }) => (
//             <option key={value} value={value}>
//               {label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }