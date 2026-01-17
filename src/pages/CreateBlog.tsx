
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


const createBlog=async(data:any)=>{
    const res=await fetch("http://localhost:3001/blogs",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    });
      if (!res.ok) throw new Error("Failed to create blog");
      return res.json();

}
const CreateBlog = () => {
    type blog={
        title:string,
        category:string;
        description:string,
        coverImage:string,
        content:string

    }
    const [form,setForm]=useState<blog>({
        title:"",
        category:"",
        description:"",
        coverImage:"",
        content:""
    })
    const queryClient = useQueryClient();
      const { mutate, isPending, isError } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      // 🔥 THIS IS THE IMPORTANT PART
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setForm({
        title: "",
        category:"",
        description: "",
        coverImage: "",
        content: "",
      });
    },
  });
    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value}=e.target

        setForm((prev)=>({...prev,[name]:value}))
    }
     const handleSubmit = () => {
        const data={
            ...form,category:form.category.split(",").map((c)=>c.trim())
        }
    mutate(data);
  };

  return (
     <div className="max-w-2xl mx-auto space-y-6 p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold">Create New Blog</h1>

      {/* Title */}
      <Input
        name="title"
        placeholder="Blog title"
        value={form.title}
        onChange={handleChange}
      />

      {/* Category */}
      <Input
        name="category"
        placeholder="Category (FINANCE, TECH)"
        value={form.category}
        onChange={handleChange}
      />

      {/* Description */}
      <Textarea
        name="description"
        placeholder="Short description"
        value={form.description}
        onChange={handleChange}
      />

      {/* Cover Image */}
      <Input
        name="coverImage"
        placeholder="Cover image URL"
        value={form.coverImage}
        onChange={handleChange}
      />

      {/* Content */}
      <Textarea
        name="content"
        placeholder="Full blog content"
        className="min-h-[150px]"
        value={form.content}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit} className="w-full">
        Create Blog
      </Button>
    </div>
  )
}

export default CreateBlog