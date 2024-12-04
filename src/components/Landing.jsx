import clsx from "clsx";
import { ContentWrapper, Strings, Button } from "@/exports";
import { motion, steps } from "framer-motion";

const Photo = ({ className }) => {
    return (
        <div
            className={clsx(
                "card-shadow group relative aspect-square w-full shrink-0 overflow-hidden border-3 border-violet-400 md:w-40 lg:w-96",
                className,
            )}
        >
            <img
                src={Strings.images.photo_cv}
                alt="nikita"
                className="absolute inset-0"
            />

            <motion.img
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: [0.4, 0, 0, 0, 0.6, 0, 0.8, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: steps(7),
                }}
                src={Strings.images.photo_cv_8bit}
                alt="8bit_nikita"
                className="absolute inset-0"
            />
        </div>
    );
};

const Landing = () => {
    return (
        <main
            className="flex h-fit w-full items-center justify-center pt-24 md:h-screen md:pt-0"
            id={Strings.welcome.id}
        >
            <ContentWrapper>
                <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
                    <Photo className={"block md:hidden lg:block"} />

                    {/* TEXT */}
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-6">
                            <Photo className={"hidden md:block lg:hidden"} />
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-6">
                                    <p className="inline-block font-pixel text-4xl text-violet-500 md:text-5xl">
                                        Nikita Ziuzin &lt;
                                        <motion.span
                                            initial={{
                                                opacity: 1,
                                            }}
                                            animate={{
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 1,
                                                ease: steps(2),
                                                repeat: Infinity,
                                            }}
                                        >
                                            /
                                        </motion.span>
                                        &gt;
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 font-pixel text-sm text-violet-200 md:flex-row md:items-center">
                                    <span className="">20 years old</span>
                                    <span className="hidden h-5 w-[2px] bg-violet-500 md:inline" />
                                    <span className="">
                                        IT student at&nbsp;
                                        <a
                                            href={Strings.links.enseeiht}
                                            target="_blank"
                                        >
                                            ENSEEIHT
                                        </a>
                                    </span>
                                    <span className="hidden h-5 w-[2px] bg-violet-500 md:inline" />
                                    <span className="">
                                        Apprentice android developer for&nbsp;
                                        <a
                                            href={Strings.links.ampere}
                                            target="_blank"
                                        >
                                            Renault Group
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            {Strings.welcome.elevator_speech.map(
                                (speech, index) => (
                                    <p
                                        className="text-justify text-sm"
                                        key={index}
                                    >
                                        {speech}
                                    </p>
                                ),
                            )}
                        </div>

                        <div className="flex gap-4 lg:self-end">
                            <Button
                                text={"Github profile"}
                                fun={() =>
                                    window.open(Strings.links.github, "_blank")
                                }
                                img={Strings.images.github}
                                className=""
                            />

                            <Button
                                text={"LinkedIn profile"}
                                fun={() =>
                                    window.open(
                                        Strings.links.linkedin,
                                        "_blank",
                                    )
                                }
                                img={Strings.images.linkedin}
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </main>
    );
};

export default Landing;
