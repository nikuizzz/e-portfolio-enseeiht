import clsx from "clsx"

const ContentWrapper = ({children, className=""}) => {
    return (
        <div className={clsx(
            "w-full h-fit px-56",
            className
        )}>{children}</div>
    )
}

export default ContentWrapper