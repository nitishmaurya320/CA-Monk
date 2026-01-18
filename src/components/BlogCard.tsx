import React from 'react'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function timeAgo(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);

  const diffInSeconds = Math.floor(
    (now.getTime() - date.getTime()) / 1000
  );

  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  if (diffInSeconds < 60)
    return rtf.format(-diffInSeconds, "second");

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60)
    return rtf.format(-diffInMinutes, "minute");

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24)
    return rtf.format(-diffInHours, "hour");

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7)
    return rtf.format(-diffInDays, "day");

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4)
    return rtf.format(-diffInWeeks, "week");

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12)
    return rtf.format(-diffInMonths, "month");

  const diffInYears = Math.floor(diffInDays / 365);
  return rtf.format(-diffInYears, "year");
}

const BlogCard = ({blog,onClick}:any) => {
  return (
    <Card  onClick={onClick} className="w-full max-w-sm cursor-pointer">
      <CardHeader>
         <div className="flex justify-between text-sm">
      <span className="text-red-400 font-medium">
        {blog.category.join(", ")}
      </span>
      <span className="text-gray-400">
        {timeAgo(blog.date)}
      </span>
    </div>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>
          {blog.description}
        </CardDescription>

      </CardHeader>
      </Card>
  )
}

export default BlogCard