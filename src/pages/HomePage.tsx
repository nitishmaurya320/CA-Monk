import { useEffect, useState } from "react";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/BlogCard";
import { Skeleton } from "@/components/ui/skeleton"


const fetchBlogs=async()=>{
    const res=await fetch("http://localhost:3001/blogs");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}
const fetchBlogsById=async(id:number)=>{
    const res=await fetch(`http://localhost:3001/blogs/${id}`);
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();

}

const HomePage = () => {
   
        

      const {
    data: blogs=[],
    isLoading:isBlogsLoading,
    // error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
   const [blogId,setBlogId]=useState<number|null>(null)

    const {
    data: blog,
    isLoading:isBlogLoading,
    // error,
  } = useQuery({
    queryKey: ["blog",blogId],
    queryFn:()=> fetchBlogsById(blogId as number),
    enabled:!!blogId
  });

  console.log("Selected blogId:", blogId);
console.log("Fetched blog:", blogs);
useEffect(() => {
  if (blogs.length > 0 && blogId === null) {
    setBlogId(blogs[0].id);
  }
}, [blogs, blogId]);

    

  return (
    <>
    
    <Hero/>
    <div className="flex w-full p-10 bg-gray-200">
        <div className="w-[40%] space-y-6 ">
            {
                blogs?.map((blog:any)=>{
                    return <BlogCard  onClick={()=>{setBlogId(blog.id)}}  key={blog.id} blog={blog} />
                })
                
            }
            
        </div>
        <div className="w-full rounded-t-4xl bg-white ">
      {isBlogLoading ? (
        <Skeleton className="h-[500px] rounded-t-4xl w-full border-2" />
      ) : (
        <div className="overflow-hidden rounded-t-4xl border-2 h-[500px]">
          <img
            className="w-full h-full object-cover"
            src={blog?.coverImage}
            alt="Blog cover"
          />
        </div>
      )}
        <div className="w-full mx-auto px-10  bg-white mt-6">
          
          

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blog?.title}
          </h1>

          {/* Share button */}
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-indigo-700 transition">
            Share Article
          </button>

          {/* Info box */}
          <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg mb-8 text-center">
            <div>
              <p className="text-xs text-gray-500 uppercase">Category</p>
              {
                blog?.category.map((category:string)=>{
                  return  <p className="font-semibold">{category}</p>
                })
              }
             
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Read Time</p>
              <p className="font-semibold">5 Mins</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Date</p>
              <p className="font-semibold">{new Date(blog?.date).toLocaleDateString("en-US",{
            month: "short",
            day: "numeric",
            year: "numeric",
    })}</p>
            </div>
          </div>

          {/* description */}
          <p className="text-gray-700 text-2xl leading-7 mb-6">
            {blog?.description}
          </p>

          

          

          
              {/* blog content */}
          <p className="text-gray-700 leading-7 mb-6">
            {blog?.content}
          </p>

          
        </div>

    </div>
    </div>
    </>
  )
}

export default HomePage