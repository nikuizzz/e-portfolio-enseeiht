import clsx from "clsx"

const Button = ({text, fun, src="", className="", active=false}) => {
    return (
        <button
            className={clsx(
                "border-3 border-violet-400 card-shadow",
                "px-4 py-3",
                "flex gap-3 items-center justify-center",
                "hover:bg-violet-500 hover:scale-[97.5%]",
                {
                    "bg-violet-600": active,
                    "bg-zinc-800": !active
                },
                className
            )}
            onClick={fun}
        >
            <span className="font-pixel">{text}</span>
            {src !== "" && (
                <img src={src} alt="" className="w-4"/>
            )}
        </button>
    )
}

export default Button