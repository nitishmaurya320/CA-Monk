import { useEffect, useState } from "react";
import Hero from "../components/Hero"
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/BlogCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import BlogDetailSkeleton from "@/skeletons/BlogDetailSkeleton";
import BlogCardSkeleton from "@/skeletons/BlogCardSkeleton";

const fetchBlogs=async()=>{
  const res=await fetch("http://localhost:3001/blogs");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}
const fetchBlogsById=async(id:number)=>{
  const res=await fetch(`http://localhost:3001/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}

const HomePage = () => {

  const {
    data: blogs=[],
    isLoading:isBlogsLoading,
    error:isBlogsError
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  const [blogId,setBlogId]=useState<number|null>(null)

  const {
    data: blog,
    isLoading:isBlogLoading,
    error:isBlogError
  } = useQuery({
    queryKey: ["blog",blogId],
    queryFn:()=> fetchBlogsById(blogId as number),
    enabled:!!blogId
  });

  useEffect(() => {
    if (blogs.length > 0 && blogId === null) {
      setBlogId(blogs[0].id);
    }
  }, [blogs, blogId]);

  return (
    <>
      <Hero/>

      <div className="flex flex-col lg:flex-row w-full p-4 sm:p-6 lg:p-10 bg-gray-200 gap-6">

        <div className="w-full lg:w-[40%] flex flex-col space-y-6">
          <h1 className="text-2xl font-bold">Latest Blogs</h1>

          {isBlogsError && (
            <p className="text-red-500">
              {(isBlogsError as Error).message || "Failed to load blogs"}
            </p>
          )}

          {isBlogsLoading && (
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          )}

          <ScrollArea className="h-[400px] sm:h-[600px] lg:h-[1100px]">
            <div className="space-y-6">
              {blogs?.map((blog:any)=>(
                <BlogCard
                  onClick={()=>setBlogId(blog.id)}
                  key={blog.id}
                  blog={blog}
                />
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="w-full bg-white rounded-t-4xl overflow-hidden">

          {isBlogError && (
            <div className="p-6 text-red-500">
              {(isBlogError as Error).message || "Failed to load blog"}
            </div>
          )}

          {isBlogLoading ? <BlogDetailSkeleton/> : (
            <div>
              <div className="overflow-hidden rounded-t-4xl h-[240px] sm:h-[360px] lg:h-[500px]">
                <img
                  className="w-full h-full object-cover"
                  src={blog?.coverImage}
                  alt="Blog cover"
                />
              </div>

              <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 bg-white mt-6">

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {blog?.title}
                </h1>

                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-indigo-700 transition">
                  Share Article
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg mb-8 text-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Category</p>
                    {blog?.category.map((category:string)=>(
                      <p key={category} className="font-semibold">
                        {category}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase">Read Time</p>
                    <p className="font-semibold">5 Mins</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase">Date</p>
                    <p className="font-semibold">
                      {new Date(blog?.date).toLocaleDateString("en-US",{
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg sm:text-xl mb-6">
                  {blog?.description}
                </p>

                <p className="text-gray-700 leading-7 mb-6">
                  {blog?.content}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default HomePage;
