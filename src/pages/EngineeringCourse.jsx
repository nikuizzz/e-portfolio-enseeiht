import React, { useState } from "react";
import {
    Strings,
    ContentWrapper,
    Button,
    SectionMotionContainer,
    SectionTitle
} from "../exports";
import clsx from "clsx";
import { motion, steps } from "framer-motion";

const ProjectSection = ({ children, img, title, tech }) => {
    return (
        <SectionMotionContainer className="flex md:flex-row flex-col md:gap-10 gap-2">
            <img
                src={img}
                alt={title}
                className="card-shadow size-52 border-3 border-violet-400 object-fill"
            />

            <div className="flex flex-col">
                <p className="text-2xl text-violet-500">{title}</p>
                <div className="mb-8 flex items-center gap-2 text-sm text-violet-200">
                    <span>Used technologies: </span>
                    {tech.map((technology, index) => (
                        <React.Fragment key={index}>
                            <span>{technology}</span>
                            {index < tech.length - 1 && (
                                <span className="h-4 w-[1.5px] bg-violet-500"></span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {children}
            </div>
        </SectionMotionContainer>
    );
};

const SectionIUT = () => {
    const [activeProjet, setActiveProject] = useState(0);

    return (
        <SectionMotionContainer className="mt-20 flex w-full flex-col gap-6">
            <p className="mb-4 font-pixel text-3xl font-bold text-violet-500">
                {Strings.engineering_course.iut.title}
            </p>

            <p className="text-justify">
                {Strings.engineering_course.iut.description}
            </p>

            <p className="text-justify">
                {Strings.engineering_course.iut.projects_intro}
            </p>

            <div className="flex md:flex-row flex-col gap-4">
                {Strings.engineering_course.iut.projects.map(
                    (project, index) => (
                        <Button
                            key={index}
                            text={project.title}
                            fun={() => setActiveProject(index)}
                            className={clsx({
                                "opacity-25": activeProjet !== index,
                            })}
                        />
                    ),
                )}
            </div>

            <ProjectSection
                key={activeProjet}
                title={
                    Strings.engineering_course.iut.projects[activeProjet].title
                }
                img={Strings.engineering_course.iut.projects[activeProjet].img}
                tech={
                    Strings.engineering_course.iut.projects[activeProjet].tech
                }
            >
                <p className="text-justify">
                    {
                        Strings.engineering_course.iut.projects[activeProjet]
                            .description
                    }
                </p>
            </ProjectSection>
        </SectionMotionContainer>
    );
};

const SectionENSEEIHT = () => {
    const [activeProjet, setActiveProject] = useState(0);

    return (
        <SectionMotionContainer className="mt-20 flex w-full flex-col gap-6">
            <p className="mb-4 font-pixel text-3xl font-bold text-violet-500">
                {Strings.engineering_course.enseeiht.title}
            </p>

            <p className="text-justify">
                {Strings.engineering_course.enseeiht.description}
            </p>

            <p className="text-justify">
                {Strings.engineering_course.enseeiht.projects_intro}
            </p>

            <div className="flex gap-4">
                {Strings.engineering_course.enseeiht.projects.map(
                    (project, index) => (
                        <Button
                            key={index}
                            text={project.title}
                            fun={() => setActiveProject(index)}
                            active={activeProjet === index}
                            className={clsx({
                                "opacity-25": activeProjet !== index,
                            })}
                        />
                    ),
                )}
            </div>

            <ProjectSection
                key={activeProjet}
                title={
                    Strings.engineering_course.enseeiht.projects[activeProjet]
                        .title
                }
                img={
                    Strings.engineering_course.enseeiht.projects[activeProjet]
                        .img
                }
                tech={
                    Strings.engineering_course.enseeiht.projects[activeProjet]
                        .tech
                }
            >
                <p className="text-justify">
                    {
                        Strings.engineering_course.enseeiht.projects[
                            activeProjet
                        ].description
                    }
                </p>
            </ProjectSection>
        </SectionMotionContainer>
    );
};

const SectionComingSoon = () => {
    return (
        <SectionMotionContainer
            className={clsx(
                "mt-20 flex flex-col items-center justify-center gap-10 md:p-10",
                "md:card-shadow md:border-3 md:border-violet-400 md:bg-zinc-800 z-10",
            )}
        >
            <motion.div
                initial={{
                    opacity: 1,
                }}
                animate={{
                    opacity: 0,
                }}
                transition={{
                    duration: 2,
                    ease: steps(2),
                    repeat: Infinity,
                }}
                className="flex flex-col items-center gap-2"
            >
                <p className="md:text-9xl text-7xl text-violet-500">Error 501</p>
                <p className="text-violet-500 md:text-md text-sm">
                    This part is not implemented (yet).
                </p>
            </motion.div>

            <div className="flex md:w-3/4 flex-col gap-8">
                <p className="text-justify">
                    {Strings.engineering_course.coming_soon.description}
                </p>

                <p className="text-justify">
                    I suggest you following me on my professionnal social media
                    to keep track of my incoming projects!
                </p>

                <div className="flex md:flex-row flex-col gap-4">
                    <Button
                        text={"Follow me on LinkedIn"}
                        img={"/8bit_images/linkedin.png"}
                        fun={() =>
                            window.open(Strings.links.linkedin, "_blank")
                        }
                    />
                    <Button
                        text={"Follow me on YouTube"}
                        img={"/8bit_images/youtube.png"}
                        fun={() => window.open(Strings.links.youtube, "_blank")}
                    />
                    <Button
                        text={"Follow me on Github"}
                        img={"/8bit_images/github.png"}
                        fun={() => window.open(Strings.links.github, "_blank")}
                    />
                </div>
            </div>
        </SectionMotionContainer>
    );
};

const EngineeringCourse = () => {
    const [activeTab, setActiveTab] = useState(2);

    return (
        <div
            className="flex justify-center pt-section-offset"
            id={Strings.engineering_course.id}
        >
            <ContentWrapper className="flex flex-col items-center justify-center">
                <SectionTitle title={Strings.engineering_course.title} className="mb-20"/>

                {/* TIMELINE */}
                <div className="relative flex md:flex-row flex-col items-center">
                    {/* IUT SAINT-MALO */}
                    <div
                        className={clsx("relative", {
                            "pointer-events-none": activeTab === 1,
                            "opacity-25": activeTab !== 1,
                        })}
                    >
                        <span className="absolute md:bottom-[-50%] md:top-auto top-[-50%] w-full text-center font-pixel">
                            2022-2024
                        </span>
                        <Button
                            text={Strings.engineering_course.iut.title}
                            fun={() => setActiveTab(1)}
                            active={activeTab === 1}
                        />
                    </div>

                    <div
                        className={clsx("md:h-[3px] md:w-40 h-14 w-[3px] shrink", {
                            "md:bg-gradient-to-r bg-gradient-to-b from-violet-600 to-violet-600/25":
                                activeTab === 1,
                            "md:bg-gradient-to-l bg-gradient-to-t from-violet-600 to-violet-600/25":
                                activeTab === 2,
                            "bg-violet-600/50": activeTab === 3,
                        })}
                    />

                    {/* ENSEEIHT */}
                    <div
                        className={clsx("relative", {
                            "pointer-events-none": activeTab === 2,
                            "opacity-25": activeTab !== 2,
                        })}
                    >
                        <span className="absolute md:bottom-[-50%] left-[-100%] translate-y-1/2 w-full text-center font-pixel">
                            2024-2027
                        </span>
                        <Button
                            text={Strings.engineering_course.enseeiht.title}
                            fun={() => setActiveTab(2)}
                            active={activeTab === 2}
                        />
                        <div className={clsx(
                            "absolute flex md:flex-col flex-row-reverse items-center justify-center font-pixel",
                            "md:left-[-50%] md:right-[-50%] md:top-[-100%]",
                            "right-[-135%] top-1/2 -translate-y-1/2"
                            )}>
                            <p className="inline-block w-fit">We're here...</p>
                            <span className="md:rotate-180 -rotate-90 text-3xl leading-3">
                                ^
                            </span>
                        </div>
                    </div>

                    <div
                        className={clsx("md:h-[3px] md:w-40 h-14 w-[3px] shrink", {
                            "bg-violet-600/50": activeTab === 1,
                            "md:bg-gradient-to-r bg-gradient-to-b from-violet-600 to-violet-600/25":
                                activeTab === 2,
                            "md:bg-gradient-to-l bg-gradient-to-t from-violet-600 to-violet-600/25":
                                activeTab === 3,
                        })}
                    />

                    {/* COMING SOON */}
                    <div
                        className={clsx("relative", {
                            "pointer-events-none": activeTab === 3,
                            "opacity-25": activeTab !== 3,
                        })}
                    >
                        <span className="absolute bottom-[-50%] w-full text-center font-pixel">
                            2027-...
                        </span>
                        <Button
                            text={Strings.engineering_course.coming_soon.title}
                            fun={() => setActiveTab(3)}
                            active={activeTab === 3}
                        />
                    </div>
                </div>

                {/* CONTENT */}
                {activeTab === 1 && <SectionIUT />}
                {activeTab === 2 && <SectionENSEEIHT />}
                {activeTab === 3 && <SectionComingSoon />}
            </ContentWrapper>
        </div>
    );
};

export default EngineeringCourse;
