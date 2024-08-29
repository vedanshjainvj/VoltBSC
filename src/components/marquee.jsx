// import { cn } from "@/lib/utils";

// export default function Marquee({
//   className,
//   reverse,
//   pauseOnHover = false,
//   children,
//   vertical = false,
//   repeat = 4,
//   ...props
// }) {
//   return (
//     <div
//       {...props}
//       className={cn(
//         "group flex overflow-hidden w-full p-2 [--duration:90s] [--gap:1rem] [gap:var(--gap)]",
//         {
//           "flex-row": !vertical,
//           "flex-col": vertical,
//         },
//         className
//       )}
//     >
//       {Array(repeat)
//         .fill(0)
//         .map((_, i) => (
//           <div
//             key={i}
//             className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
//               "animate-marquee flex-row": !vertical,
//               "animate-marquee-vertical flex-col": vertical,
//               "group-hover:[animation-play-state:paused]": pauseOnHover,
//               "[animation-direction:reverse]": reverse,
//             })}
//           >
//             {children}
//           </div>
//         ))}
//     </div>
//   );
// }

import { cn } from "@/lib/utils";

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  cloud = false,
  vertical = false,
  cloudDuration = 20,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
          "w-[200%]": cloud, // Double the width for cloud animation
        },
        className,
        // cloud && `[--cloudDuration:${cloudDuration}s]`
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0", {
              "animate-marquee flex-row": !vertical && !cloud,
              "animate-marquee-vertical flex-col": vertical,
              "animate-cloud flex-row w-1/2": cloud, // Set width to 50% for each cloud instance
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
            style={{ gap: "var(--gap)" }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
