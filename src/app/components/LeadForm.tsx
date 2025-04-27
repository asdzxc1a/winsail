"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
      <input {...register("name")}
        placeholder="Name"
        className="w-full p-2 border rounded"
      />
      {errors.name && <span className="text-red-600">{errors.name.message}</span>}
      <input {...register("email")}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      {errors.email && <span className="text-red-600">{errors.email.message}</span>}
      <textarea {...register("message")}
        placeholder="Your message"
        className="w-full p-2 border rounded"
        rows={5}
      />
      {errors.message && <span className="text-red-600">{errors.message.message}</span>}
      <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-600 text-white rounded">
        {isSubmitting ? "Sending..." : "Send"}
      </button>
      {submitted && <p className="text-green-600">Thank you for reaching out!</p>}
    </form>
  );
}
