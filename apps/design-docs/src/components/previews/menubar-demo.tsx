"use client";

import { usePathname } from "next/navigation";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@nebutra/ui/primitives";

export function MenubarDemo() {
    const pathname = usePathname();
    const isZh = pathname?.includes("/zh/");

    return (
        <div className="min-h-[250px] flex justify-center items-start pt-10 w-full">
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>{isZh ? "文件 (File)" : "File"}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            {isZh ? "新建标签页 (New Tab)" : "New Tab"} <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            {isZh ? "新建窗口 (New Window)" : "New Window"} <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            {isZh ? "打印... (Print...)" : "Print..."} <MenubarShortcut>⌘P</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>{isZh ? "编辑 (Edit)" : "Edit"}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            {isZh ? "撤销 (Undo)" : "Undo"} <MenubarShortcut>⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            {isZh ? "重做 (Redo)" : "Redo"} <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>{isZh ? "查找 (Find)" : "Find"}</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>{isZh ? "搜索网页 (Search the web)" : "Search the web"}</MenubarItem>
                                <MenubarItem>{isZh ? "查找... (Find...)" : "Find..."}</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
}
