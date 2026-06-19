"use client";

interface SectionTagProps {
  tag: string;
}

export default function SectionTag({ tag }: SectionTagProps) {
  return (
    <span className="inline-block text-xs text-accent mb-3 tracking-widest uppercase font-semibold">
      — {tag}
    </span>
  );
}
