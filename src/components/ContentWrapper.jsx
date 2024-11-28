import clsx from "clsx"

const ContentWrapper = ({children, className=""}) => {
    return (
        <div className={clsx(
            "max-w-6xl w-full h-fit",
            className
        )}>{children}</div>
    )
}

export default ContentWrapper