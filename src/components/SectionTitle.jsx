import clsx from "clsx";

const SectionTitle = ({ title, className = "" }) => {
    return (
        <p className={clsx("text-4xl text-violet-500 md:text-5xl", className)}>
            {title}
        </p>
    );
};

export default SectionTitle;
