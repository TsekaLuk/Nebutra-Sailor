import { Announcement, AnnouncementTag, AnnouncementTitle } from "@nebutra/ui/primitives";
import { ArrowUpRight } from "lucide-react";

export function AnnouncementDemo() {
    return (
        <div className="w-full max-w-md px-4 py-8 flex flex-col items-center justify-center space-y-4">
            <Announcement>
                <AnnouncementTag>Beta</AnnouncementTag>
                <AnnouncementTitle>Multi-agent workflows are now available</AnnouncementTitle>
            </Announcement>

            <Announcement>
                <AnnouncementTag>New</AnnouncementTag>
                <AnnouncementTitle>
                    Read the release notes
                    <ArrowUpRight size={14} />
                </AnnouncementTitle>
            </Announcement>
        </div>
    );
}
