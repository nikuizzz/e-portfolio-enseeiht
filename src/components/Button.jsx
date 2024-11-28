import clsx from "clsx"

const Button = ({text, fun, src=""}) => {
    return (
        <button
            className={clsx(
                "border-3 border-violet-400 bg-zinc-800 card-shadow",
                "px-4 py-3",
                "flex gap-3 items-center justify-center",
                "hover:bg-violet-800 hover:scale-[97.5%]"
            )}
            onClick={() => fun}
        >
            <span className="font-pixel">{text}</span>
            {src !== "" && (
                <img src={src} alt="" className="w-4"/>
            )}
        </button>
    )
}

export default Button