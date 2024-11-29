import React, { useState } from "react";
import { Strings, ContentWrapper, Button } from "../exports";
import clsx from "clsx";
import { easeOut, motion, steps } from "framer-motion";

const SectionMotionContainer = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 1,
                ease: easeOut,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ProjectSection = ({ children, img, title, tech }) => {
    return (
        <SectionMotionContainer className="flex gap-10">
            {/* <> */}
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
            {/* </> */}
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

            <div className="flex gap-4">
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
                <p>
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
                <p>
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
        <SectionMotionContainer className="mt-20 flex flex-col items-center justify-center gap-10">
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
                <p className="text-9xl text-violet-500">Error 501</p>
                <p className="text-violet-500">
                    This part is not implemented (yet).
                </p>
            </motion.div>

            <div className="flex flex-col w-3/4 gap-8">
                <p className="text-justify">{Strings.engineering_course.coming_soon.description}</p>

                <p className="text-justify">I suggest you following me on my professionnal social media to keep track of my incoming projects!</p>
                
                <div className="flex gap-4">
                    <a href={Strings.links.linkedin} target="_blank">
                        <Button 
                            text={"Follow me on LinkedIn"}
                            src={"/8bit_images/linkedin.png"}
                            />
                    </a>
                    <a href={Strings.links.youtube} target="_blank">
                        <Button 
                            text={"Follow me on YouTube"}
                            src={"/8bit_images/youtube.png"}
                            />
                    </a>
                </div>
            </div>
        </SectionMotionContainer>
    );
};

const Engineering = () => {
    const [activeTab, setActiveTab] = useState(2);

    return (
        <div className="mb-96 flex justify-center">
            <ContentWrapper className="flex flex-col items-center justify-center">
                <p className="mb-20 font-pixel text-5xl text-violet-500">
                    Engineering course
                </p>

                {/* TIMELINE */}
                <div className="relative flex items-center">
                    {/* IUT SAINT-MALO */}
                    <div
                        className={clsx("relative", {
                            "pointer-events-none": activeTab === 1,
                            "opacity-25": activeTab !== 1,
                        })}
                    >
                        <span className="absolute bottom-[-50%] w-full text-center font-pixel">
                            2022-2024
                        </span>
                        <Button
                            text={Strings.engineering_course.iut.title}
                            fun={() => setActiveTab(1)}
                            active={activeTab === 1}
                        />
                    </div>

                    <div
                        className={clsx("h-[3px] w-40 shrink", {
                            "bg-gradient-to-r from-violet-600 to-violet-600/25":
                                activeTab === 1,
                            "bg-gradient-to-l from-violet-600 to-violet-600/25":
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
                        <span className="absolute bottom-[-50%] w-full text-center font-pixel">
                            2024-2027
                        </span>
                        <Button
                            text={Strings.engineering_course.enseeiht.title}
                            fun={() => setActiveTab(2)}
                            active={activeTab === 2}
                        />
                        <div className="absolute left-[-50%] right-[-50%] top-[-100%] flex flex-col items-center justify-center font-pixel">
                            <p className="inline-block w-fit">We're here...</p>
                            <span className="rotate-180 text-3xl leading-3">
                                ^
                            </span>
                        </div>
                    </div>

                    <div
                        className={clsx("h-[3px] w-40 shrink", {
                            "bg-violet-600/50": activeTab === 1,
                            "bg-gradient-to-r from-violet-600 to-violet-600/25":
                                activeTab === 2,
                            "bg-gradient-to-l from-violet-600 to-violet-600/25":
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

export default Engineering;
