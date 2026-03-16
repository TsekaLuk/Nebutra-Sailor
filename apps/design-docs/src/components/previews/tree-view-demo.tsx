/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import {
    TreeView,
    TreeProvider,
    TreeNode,
    TreeNodeTrigger,
    TreeExpander,
    TreeIcon,
    TreeLabel,
    TreeNodeContent
} from "@nebutra/ui/primitives";

export function TreeViewDemo() {
    return (
        <div className="w-full max-w-md mx-auto p-4 md:p-8">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="p-4 border-b bg-muted/50">
                    <h3 className="font-semibold text-sm">Project Structure</h3>
                </div>

                <div className="p-2 h-[400px] overflow-y-auto">
                    <TreeProvider defaultExpandedIds={["root", "src", "components"]}>
                        <TreeView>

                            <TreeNode nodeId="root">
                                <TreeNodeTrigger>
                                    <TreeExpander hasChildren />
                                    <TreeIcon hasChildren />
                                    <TreeLabel>nebutra-sailor</TreeLabel>
                                </TreeNodeTrigger>

                                <TreeNodeContent hasChildren>

                                    <TreeNode nodeId="apps">
                                        <TreeNodeTrigger>
                                            <TreeExpander hasChildren />
                                            <TreeIcon hasChildren />
                                            <TreeLabel>apps</TreeLabel>
                                        </TreeNodeTrigger>
                                        <TreeNodeContent hasChildren>
                                            <TreeNode nodeId="docs">
                                                <TreeNodeTrigger>
                                                    <TreeExpander />
                                                    <TreeIcon />
                                                    <TreeLabel>design-docs</TreeLabel>
                                                </TreeNodeTrigger>
                                            </TreeNode>
                                            <TreeNode nodeId="web" isLast>
                                                <TreeNodeTrigger>
                                                    <TreeExpander />
                                                    <TreeIcon />
                                                    <TreeLabel>web-app</TreeLabel>
                                                </TreeNodeTrigger>
                                            </TreeNode>
                                        </TreeNodeContent>
                                    </TreeNode>

                                    <TreeNode nodeId="packages">
                                        <TreeNodeTrigger>
                                            <TreeExpander hasChildren />
                                            <TreeIcon hasChildren />
                                            <TreeLabel>packages</TreeLabel>
                                        </TreeNodeTrigger>
                                        <TreeNodeContent hasChildren>
                                            <TreeNode nodeId="ui">
                                                <TreeNodeTrigger>
                                                    <TreeExpander hasChildren />
                                                    <TreeIcon hasChildren />
                                                    <TreeLabel>ui</TreeLabel>
                                                </TreeNodeTrigger>
                                                <TreeNodeContent hasChildren>
                                                    <TreeNode nodeId="components">
                                                        <TreeNodeTrigger>
                                                            <TreeExpander hasChildren />
                                                            <TreeIcon hasChildren />
                                                            <TreeLabel>primitives</TreeLabel>
                                                        </TreeNodeTrigger>
                                                        <TreeNodeContent hasChildren>
                                                            <TreeNode nodeId="button">
                                                                <TreeNodeTrigger>
                                                                    <TreeExpander />
                                                                    <TreeIcon />
                                                                    <TreeLabel>button.tsx</TreeLabel>
                                                                </TreeNodeTrigger>
                                                            </TreeNode>
                                                            <TreeNode nodeId="tree" isLast>
                                                                <TreeNodeTrigger>
                                                                    <TreeExpander />
                                                                    <TreeIcon />
                                                                    <TreeLabel>tree.tsx</TreeLabel>
                                                                </TreeNodeTrigger>
                                                            </TreeNode>
                                                        </TreeNodeContent>
                                                    </TreeNode>
                                                    <TreeNode nodeId="utils" isLast>
                                                        <TreeNodeTrigger>
                                                            <TreeExpander />
                                                            <TreeIcon />
                                                            <TreeLabel>utils.ts</TreeLabel>
                                                        </TreeNodeTrigger>
                                                    </TreeNode>
                                                </TreeNodeContent>
                                            </TreeNode>
                                        </TreeNodeContent>
                                    </TreeNode>

                                    <TreeNode nodeId="package.json">
                                        <TreeNodeTrigger>
                                            <TreeExpander />
                                            <TreeIcon />
                                            <TreeLabel>package.json</TreeLabel>
                                        </TreeNodeTrigger>
                                    </TreeNode>

                                    <TreeNode nodeId="readme" isLast>
                                        <TreeNodeTrigger>
                                            <TreeExpander />
                                            <TreeIcon />
                                            <TreeLabel>README.md</TreeLabel>
                                        </TreeNodeTrigger>
                                    </TreeNode>

                                </TreeNodeContent>
                            </TreeNode>

                        </TreeView>
                    </TreeProvider>
                </div>
            </div>
        </div>
    );
}
