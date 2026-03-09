import { VideoText } from "@nebutra/ui/primitives";

export function VideoTextDemo() {
    return (
        <div className="w-full max-w-4xl px-4 py-8 h-[300px]">
            <div className="relative h-full w-full overflow-hidden bg-background border border-border rounded-xl flex items-center justify-center">
                <VideoText
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    fontSize="24vw"
                    fontWeight={900}
                >
                    NEBUTRA
                </VideoText>
            </div>
        </div>
    )
}
