"use client";

import { useState, useEffect, useRef } from "react";
import { useOrganizationList } from "@clerk/nextjs";
import { Button } from "@nebutra/custom-ui/primitives";
import { Input } from "@nebutra/custom-ui/primitives";
import { Label } from "@nebutra/custom-ui/primitives";
import { cn } from "@nebutra/custom-ui";

interface CreateWorkspaceStepProps {
  onComplete: () => void;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

export function CreateWorkspaceStep({ onComplete }: CreateWorkspaceStepProps) {
  const { createOrganization, setActive } = useOrganizationList();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const workspaceNameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!slugEdited) {
      setSlug(slugify(name));
    }
  }, [name, slugEdited]);

  useEffect(() => {
    workspaceNameRef.current?.focus();
  }, []);

  const slugValid =
    /^[a-z0-9][a-z0-9-]{1,46}[a-z0-9]$/.test(slug) || slug.length >= 3;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!createOrganization || !setActive) return;

    setLoading(true);
    setError("");

    try {
      const org = await createOrganization({ name, slug });
      await setActive({ organization: org.id });
      onComplete();
    } catch (err: unknown) {
      const clerkError = err as { errors?: Array<{ message: string }> };
      setError(
        clerkError.errors?.[0]?.message || "Failed to create workspace.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Set up your workspace
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          This is where your team will collaborate.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="workspace-name">Workspace name</Label>
          <Input
            ref={workspaceNameRef}
            id="workspace-name"
            placeholder="e.g. Acme Corp"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="workspace-slug">Workspace URL</Label>
          <div className="flex items-center rounded-[var(--radius-md)] border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <span className="select-none border-r border-input px-3 py-2 text-sm text-muted-foreground">
              nebutra.app /
            </span>
            <input
              id="workspace-slug"
              className={cn(
                "flex-1 bg-transparent px-3 py-2 text-sm outline-none",
                "placeholder:text-muted-foreground",
              )}
              placeholder="my-workspace"
              value={slug}
              onChange={(e) => {
                setSlug(
                  slugify(e.target.value) || e.target.value.toLowerCase(),
                );
                setSlugEdited(true);
              }}
              pattern="[a-z0-9][a-z0-9\-]{1,46}[a-z0-9]"
              required
            />
          </div>
          {slug.length > 0 && !slugValid && (
            <p className="text-xs text-muted-foreground">
              3–48 characters, lowercase letters, numbers, and hyphens only.
            </p>
          )}
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading || !name}>
          {loading ? "Creating…" : "Create Workspace →"}
        </Button>
      </form>
    </div>
  );
}
