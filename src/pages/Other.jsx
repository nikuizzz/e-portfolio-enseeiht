import { Strings, ContentWrapper, Button } from "../exports";

const OtherSection = (other) => {
    other = other.other;

    return (
        <div className="flex h-fit flex-col gap-6 md:flex-row md:gap-10">
            <div className="flex shrink-0 gap-6">
                <img
                    src={other.img}
                    alt={other.title}
                    className="card-shadow size-32 border-3 border-violet-400 object-fill md:size-52 shrink-0"
                />

                <div className="z-10 flex flex-col gap-4 text-sm text-violet-200 md:hidden">
                    <p className="text-2xl text-violet-500">{other.title}</p>
                    <span>
                        Fun fact:{" "}
                        <a
                            href={other.fun_fact.url}
                            target="_blank"
                            className="-underline"
                        >
                            {other.fun_fact.text}
                        </a>
                    </span>
                </div>
            </div>

            <div className="flex flex-col grow gap-4">
                <div className="z-10 hidden text-sm text-violet-200 md:block">
                    <p className="text-2xl text-violet-500">{other.title}</p>
                    <span>
                        Fun fact:{" "}
                        <a
                            href={other.fun_fact.url}
                            target="_blank"
                            className="-underline"
                        >
                            {other.fun_fact.text}
                        </a>
                    </span>
                </div>

                <p className="text-justify">{other.description}</p>

                {other.button.present && (
                    <Button
                        text={other.button.text}
                        img={other.button.img}
                        fun={() => window.open(other.button.url, "_blank")}
                        className={"md:self-end md:w-fit w-full"}
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
            <ContentWrapper className="flex flex-col items-center justify-center">
                <p className="mb-20 font-pixel text-5xl text-violet-500">
                    {Strings.other.title}
                </p>

                <div className="flex flex-col md:gap-8 gap-16">
                    {other.map((other, index) => (
                        <OtherSection other={other} key={index} />
                    ))}
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Other;
