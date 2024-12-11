"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CatchAll() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/error");
  }, [router]);

  return null;
}

export const runtime = "edge";
