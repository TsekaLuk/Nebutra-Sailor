/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Avatar } from "@nebutra/ui/primitives";

export function Avatar4Demo() {
  return (
    <div className="flex gap-4 items-center">
      <GitHubAvatar username="rauchg" size="md" />
      <GitLabAvatar username="leerob" size="md" />
      <BitbucketAvatar username="evilrabbit" size="md" />
    </div>
  );
}

function GitHubAvatar({ username, size: _size }: { username: string; size: string }) { return <Avatar src={`https://github.com/${username}.png`} fallback={username} /> }
function GitLabAvatar({ username, size: _size }: { username: string; size: string }) { return <Avatar src={`https://gitlab.com/${username}.png`} fallback={username} /> }
function BitbucketAvatar({ username, size: _size }: { username: string; size: string }) { return <Avatar src={`https://bitbucket.org/${username}.png`} fallback={username} /> }
