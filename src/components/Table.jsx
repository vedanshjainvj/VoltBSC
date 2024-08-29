// import * as React from "react";

// import { cn } from "@/lib/utils";

// const Table = React.forwardRef(({ className, ...props }, ref) => (
//   <div className="relative w-full overflow-auto">
//     <table
//       ref={ref}
//       className={cn("w-full caption-bottom text-sm", className)}
//       {...props}
//     />
//   </div>
// ));
// Table.displayName = "Table";

// const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
//   <thead
//     ref={ref}
//     className={cn("bg-white rounded-2xl my-9", className)}
//     {...props}
//   />
// ));
// TableHeader.displayName = "TableHeader";

// const TableBody = React.forwardRef(({ className, ...props }, ref) => (
//   <tbody
//     ref={ref}
//     className={cn("overflow-auto", className)}
//     {...props}
//   />
// ));
// TableBody.displayName = "TableBody";

// const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
//   <tfoot
//     ref={ref}
//     className={cn(
//       "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
//       className
//     )}
//     {...props}
//   />
// ));
// TableFooter.displayName = "TableFooter";

// const TableRow = React.forwardRef(({ className, ...props }, ref) => (
//   <tr
//     ref={ref}
//     className={cn(
//       " transition-colors   bg-rose-400 rounded-2xl my-16 py-28",
//       className
//     )}
//     {...props}
//   />
// ));
// TableRow.displayName = "TableRow";

// const TableHead = React.forwardRef(({ className, ...props }, ref) => (
//   <th
//     ref={ref}
//     className={cn(
//       "h-12 px-5 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0  ",
//       className
//     )}
//     {...props}
//   />
// ));
// TableHead.displayName = "TableHead";

// const TableCell = React.forwardRef(({ className, ...props }, ref) => (
//   <td
//     ref={ref}
//     className={cn(
//       "p-4  align-middle [&:has([role=checkbox])]:pr-0 ",
//       className
//     )}
//     {...props}
//   />
// ));
// TableCell.displayName = "TableCell";

// const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
//   <caption
//     ref={ref}
//     className={cn("mt-4 text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ));
// TableCaption.displayName = "TableCaption";

// export {
//   Table,
//   TableHeader,
//   TableBody,
//   TableFooter,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableCaption,
// };

import * as React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-white rounded-2xl my-4", className)} // Updated margin
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("overflow-auto", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors  rounded-2xl my-4 py-4", // Updated margin and padding
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-5 text-left align-middle font-medium text-muted-foreground my-4", // Updated margin
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("p-4 align-middle", className)} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
