"use client";

/**
 * Extended Avatar Components
 *
 * Geist-inspired avatar variants beyond the base Radix Avatar:
 *
 *   GitHubAvatar    — loads from github.com/{username}.png
 *   GitLabAvatar    — loads from gitlab.com/{username}
 *   BitbucketAvatar — loads from bitbucket.org/{workspace}
 *   AvatarWithIcon  — avatar + small icon badge (bottom-right corner)
 *   DiceBearAvatar  — procedurally generated avatar via api.dicebear.com
 *
 * All extend the base Avatar component so they inherit size, className, etc.
 */

import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import type { AvatarProps } from "./avatar";
import { cn } from "../utils/cn";

// ─── Shared helper ─────────────────────────────────────────────────────────────

function initials(name: string): string {
  return name
    .split(/[\s._-]+/)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ─── GitHubAvatar ─────────────────────────────────────────────────────────────

export interface GitHubAvatarProps extends AvatarProps {
  /** GitHub username */
  username: string;
}

/**
 * Avatar loaded from GitHub's CDN.
 * URL: `https://github.com/{username}.png?size={px}`
 *
 * @example
 *   <GitHubAvatar username="rauchg" size="sm" />
 */
export function GitHubAvatar({
  username,
  size = "sm",
  className,
  ...props
}: GitHubAvatarProps) {
  const px = { xs: 20, sm: 32, md: 40, lg: 56, xl: 80 }[size] ?? 40;
  return (
    <Avatar size={size} className={className} {...props}>
      <AvatarImage
        src={`https://github.com/${username}.png?size=${px * 2}`}
        alt={`@${username} on GitHub`}
      />
      <AvatarFallback size={size}>{initials(username)}</AvatarFallback>
    </Avatar>
  );
}

// ─── GitLabAvatar ─────────────────────────────────────────────────────────────

export interface GitLabAvatarProps extends AvatarProps {
  /** GitLab username or numeric user id */
  username: string;
}

/**
 * Avatar loaded from GitLab.
 * URL: `https://gitlab.com/{username}.png`
 *
 * @example
 *   <GitLabAvatar username="leerob" size="sm" />
 */
export function GitLabAvatar({
  username,
  size = "sm",
  className,
  ...props
}: GitLabAvatarProps) {
  return (
    <Avatar size={size} className={className} {...props}>
      <AvatarImage
        src={`https://gitlab.com/${username}.png`}
        alt={`@${username} on GitLab`}
      />
      <AvatarFallback size={size}>{initials(username)}</AvatarFallback>
    </Avatar>
  );
}

// ─── BitbucketAvatar ──────────────────────────────────────────────────────────

export interface BitbucketAvatarProps extends AvatarProps {
  /** Bitbucket account slug (username or workspace) */
  username: string;
}

/**
 * Avatar loaded from Bitbucket.
 * URL: `https://bitbucket.org/account/{username}/avatar`
 *
 * @example
 *   <BitbucketAvatar username="evilrabbit" size="sm" />
 */
export function BitbucketAvatar({
  username,
  size = "sm",
  className,
  ...props
}: BitbucketAvatarProps) {
  return (
    <Avatar size={size} className={className} {...props}>
      <AvatarImage
        src={`https://bitbucket.org/account/${username}/avatar`}
        alt={`@${username} on Bitbucket`}
      />
      <AvatarFallback size={size}>{initials(username)}</AvatarFallback>
    </Avatar>
  );
}

// ─── AvatarWithIcon ───────────────────────────────────────────────────────────

export interface AvatarWithIconProps extends AvatarProps {
  /** Icon element to render in the badge (e.g. <CheckCircleFill size={14} />) */
  icon: React.ReactNode;
  /** Background color class for the icon badge (default: bg-background) */
  iconBackground?: string;
  /** Image src for the avatar */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback text (initials) when image fails */
  fallback?: string;
}

/**
 * Avatar with a small icon badge anchored to the bottom-right corner.
 *
 * @example
 *   <AvatarWithIcon
 *     src="https://github.com/rauchg.png"
 *     alt="rauchg"
 *     fallback="RG"
 *     icon={<CheckCircleFill size={14} color="gray-900" />}
 *     iconBackground="bg-background"
 *   />
 */
export function AvatarWithIcon({
  icon,
  iconBackground = "bg-background",
  src,
  alt = "Avatar",
  fallback,
  size = "md",
  className,
  ...props
}: AvatarWithIconProps) {
  const badgeSizes = {
    xs: "h-3 w-3 -bottom-0.5 -right-0.5",
    sm: "h-4 w-4 -bottom-0.5 -right-0.5",
    md: "h-5 w-5 -bottom-0.5 -right-0.5",
    lg: "h-6 w-6 -bottom-1 -right-1",
    xl: "h-7 w-7 -bottom-1 -right-1",
  } as const;

  return (
    <div className="relative inline-flex">
      <Avatar size={size} className={className} {...props}>
        {src && <AvatarImage src={src} alt={alt} />}
        <AvatarFallback size={size}>{fallback ?? initials(alt)}</AvatarFallback>
      </Avatar>
      <span
        className={cn(
          "absolute flex items-center justify-center rounded-full border border-background",
          iconBackground,
          badgeSizes[size],
        )}
      >
        {icon}
      </span>
    </div>
  );
}

// ─── DiceBearAvatar ───────────────────────────────────────────────────────────

/**
 * DiceBear avatar styles.
 * Full list: https://www.dicebear.com/styles/
 */
export type DiceBearStyle =
  | "avataaars"
  | "avataaars-neutral"
  | "bottts"
  | "bottts-neutral"
  | "identicon"
  | "lorelei"
  | "lorelei-neutral"
  | "notionists"
  | "notionists-neutral"
  | "open-peeps"
  | "pixel-art"
  | "pixel-art-neutral"
  | "shapes"
  | "thumbs"
  | "fun-emoji"
  | "micah"
  | "miniavs"
  | "rings"
  | "croodles"
  | "croodles-neutral"
  | "dylan"
  | "glass";

export interface DiceBearAvatarProps extends Omit<AvatarProps, "style"> {
  /**
   * Seed string — deterministic: same seed always yields the same avatar.
   * Typically a username, email, or UUID.
   */
  seed: string;
  /**
   * DiceBear avatar style / collection.
   * @default "bottts-neutral"
   * @see https://www.dicebear.com/styles/
   */
  avatarStyle?: DiceBearStyle;
  /** Additional query params passed to the DiceBear API (e.g. backgroundColor, radius) */
  options?: Record<string, string | number>;
  /** CSS inline style for the Avatar wrapper */
  style?: React.CSSProperties;
}

function buildDiceBearUrl(
  seed: string,
  style: DiceBearStyle,
  options: Record<string, string | number>,
): string {
  const params = new URLSearchParams({
    seed,
    ...Object.fromEntries(
      Object.entries(options).map(([k, v]) => [k, String(v)]),
    ),
  });
  return `https://api.dicebear.com/9.x/${style}/svg?${params.toString()}`;
}

/**
 * Procedurally generated avatar using the DiceBear API.
 * Renders deterministically for the same `seed`.
 *
 * No npm package required — uses the free HTTP API.
 *
 * @example
 *   // Robot avatar for a user
 *   <DiceBearAvatar seed="rauchg" style="bottts-neutral" size="md" />
 *
 *   // Pixel art with rounded corners
 *   <DiceBearAvatar seed="user@example.com" style="pixel-art" options={{ radius: 50 }} />
 *
 *   // Fun emoji fallback for anonymous users
 *   <DiceBearAvatar seed="guest-session-123" style="fun-emoji" />
 */
export function DiceBearAvatar({
  seed,
  avatarStyle = "bottts-neutral",
  options = {},
  size = "md",
  className,
  ...props
}: DiceBearAvatarProps) {
  const url = buildDiceBearUrl(seed, avatarStyle, options);
  return (
    <Avatar size={size} className={className} {...props}>
      <AvatarImage src={url} alt={`Avatar for ${seed}`} />
      <AvatarFallback size={size}>{initials(seed)}</AvatarFallback>
    </Avatar>
  );
}
