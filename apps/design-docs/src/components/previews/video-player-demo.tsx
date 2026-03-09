import { VideoPlayer } from "@nebutra/ui/primitives";

export function VideoPlayerDemo() {
    return (
        <div className="w-full max-w-4xl px-4 py-8">
            <VideoPlayer
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay={false}
                loop={true}
                className="rounded-xl overflow-hidden shadow-lg border border-border"
            />
        </div>
    )
}
