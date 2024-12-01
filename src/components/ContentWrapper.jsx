import clsx from "clsx"

const ContentWrapper = ({children, className=""}) => {
    return (
        <div className={clsx(
            "md:max-w-6xl md:w-full lg:px-2 md:px-8 h-fit w-full px-6",
            className
        )}>{children}</div>
    )
}

export default ContentWrapper