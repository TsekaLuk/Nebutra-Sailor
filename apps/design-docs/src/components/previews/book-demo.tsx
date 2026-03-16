/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Book } from "@nebutra/ui/primitives";
import { BookOpen } from "lucide-react";

export function BookDemo() {
    return (
        <div className="w-full flex-col md:flex-row flex items-center justify-center gap-12 p-8">
            {/* 3D Book with Texture and Icon */}
            <Book
                title="Frontend Engineering"
                color="#3b82f6" /* blue-500 */
                textColor="#ffffff"
                textured={true}
                logo={<BookOpen size={24} />}
                width={{ sm: 140, md: 180 }}
            />

            {/* Simple Flat Book */}
            <Book
                title="CSS Mastery"
                color="#10b981" /* emerald-500 */
                textColor="#ffffff"
                variant="simple"
                width={{ sm: 140, md: 180 }}
            />

            {/* Book with Illustration */}
            <Book
                title="Design Systems"
                color="#f97316" /* orange-500 */
                textColor="#ffffff"
                textured={true}
                illustration={
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-white/30 border-t-white animate-spin" />
                    </div>
                }
                width={{ sm: 140, md: 180 }}
            />
        </div>
    );
}
