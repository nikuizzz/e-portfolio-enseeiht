import { a } from "framer-motion/client";
import { Strings, ContentWrapper, Button } from "../exports";

const OtherSection = (other) => {
    other = other.other;

    return (
        <div className="flex h-fit gap-10">
            <img
                src={other.img}
                alt={other.title}
                className="card-shadow size-52 border-3 border-violet-400 object-fill"
            />

            <div className="flex grow flex-col gap-4">
                <div className="z-10 text-sm text-violet-200">
                    <p className="text-2xl text-violet-500">{other.title}</p>
                    <span>Fun fact: </span>
                    <a
                        href={other.fun_fact.url}
                        target="_blank"
                        className="underline underline-offset-4"
                    >
                        {other.fun_fact.text}
                    </a>
                </div>

                <p className="text-justify">{other.description}</p>

                {other.button.present && (
                    <Button
                        text={other.button.text}
                        src={other.button.img}
                        fun={() => window.open(other.button.url, "_blank")}
                        className={"self-end"}
                    />
                )}
            </div>
        </div>
    );
};

const Other = () => {
    const other = Strings.other.tabs;

    return (
        <div
            className="flex justify-center pt-section-offset"
            id={Strings.other.id}
        >
            <ContentWrapper className="mb-section-title-offset flex flex-col items-center justify-center">
                <p className="mb-20 font-pixel text-5xl text-violet-500">
                    {Strings.other.title}
                </p>

                <div className="flex flex-col gap-8">
                    {other.map((other, index) => (
                        <OtherSection other={other} key={index} />
                    ))}
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Other;
