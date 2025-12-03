"use client";

import { motion } from "framer-motion";
import { Folder, FolderOpen, FileCode } from "lucide-react";
import { useState } from "react";
import { architectureContent } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

/**
 * ArchitectureShowcase - File tree visualization of project structure
 *
 * @see DESIGN.md Section 4
 */
export function ArchitectureShowcase() {
  const { headline, tagline, structure } = architectureContent;

  return (
    <section className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {headline}
          </h2>
          <p className="mt-4 font-mono text-sm text-white/50">{tagline}</p>
        </motion.div>

        {/* File Tree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-sm"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-white/40">
              Nebutra-Sailor
            </span>
          </div>

          {/* File Tree Body */}
          <div className="p-6 font-mono text-sm">
            <div className="space-y-1">
              {structure.map((folder, folderIndex) => (
                <FolderItem
                  key={folder.name}
                  folder={folder}
                  index={folderIndex}
                  defaultOpen
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FolderItemProps {
  folder: (typeof architectureContent.structure)[number];
  index: number;
  defaultOpen?: boolean;
}

function FolderItem({ folder, index, defaultOpen = false }: FolderItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
    >
      {/* Folder Row */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-2 rounded px-2 py-1 text-left transition-colors hover:bg-white/5"
      >
        {isOpen ? (
          <FolderOpen className="h-4 w-4 text-[#0BF1C3]" />
        ) : (
          <Folder className="h-4 w-4 text-[#0033FE]" />
        )}
        <span className="text-white">{folder.name}</span>
        <span className="ml-2 text-white/30">
          {folder.description && `// ${folder.description}`}
        </span>
      </button>

      {/* Children */}
      {isOpen && folder.children && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="ml-6 border-l border-white/10 pl-4"
        >
          {folder.children.map((child, childIndex) => (
            <motion.div
              key={child.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * childIndex }}
              className={cn(
                "flex items-center gap-2 rounded px-2 py-1 transition-colors hover:bg-white/5",
                child.name.includes("...") && "text-white/40",
              )}
            >
              {child.name.endsWith("/") ? (
                <Folder className="h-4 w-4 text-[#0033FE]" />
              ) : (
                <FileCode className="h-4 w-4 text-white/50" />
              )}
              <span className="text-white/80">{child.name}</span>
              {child.comment && (
                <span className="ml-2 text-white/30"># {child.comment}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

ArchitectureShowcase.displayName = "ArchitectureShowcase";
