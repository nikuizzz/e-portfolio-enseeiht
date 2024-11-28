import { BackgroundBoxes } from "../exports"


const Background = () => {
    return (
        // <div className="fixed inset-0 bg-zinc-800" />
        <div className="fixed flex inset-0 z-[0]">
            <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />
            <BackgroundBoxes/>
        </div>
    )
}

export default Background