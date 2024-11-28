import React, { useState } from 'react'
import { Strings, ContentWrapper, Button } from '../exports'
import clsx from 'clsx'
import { easeOut, motion } from 'framer-motion'

const SectionMotionContainer = ({children, className=""}) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                duration: 1,
                ease: easeOut
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

const ProjectSection = ({children, img, title}) => {
    return (
        <SectionMotionContainer className="flex gap-10">
            {/* <> */}
            <img
                src={img}
                alt={title}
                className="size-52 border-3 border-violet-400 card-shadow"
                />

            <div className="flex flex-col gap-8">
                <p className="text-2xl">{title}</p>

                {children}
            </div>
            {/* </> */}
        </SectionMotionContainer>
    )
}

const SectionIUT = () => {
    const [activeProjet, setActiveProject] = useState(0)
    return (
        <SectionMotionContainer className="mt-20 flex flex-col w-full gap-6">
            <p className="font-pixel text-3xl font-bold text-violet-500 mb-4">IUT of Saint-Malo</p>

            <p className="text-justify">
                I've started my journey in the IT sphere by obtaining a bachelor's degree in Networks & Telecommunications 
                at the IUT of Saint-Malo, in France. During these two years I've gained solid knowledge in several domains of IT,
                such as networking, telecommunications and programming. All while studying at the university, I was also "working"
                as a network technician apprentice at the departamental council of Finistère (29), a precious experience that allowed
                me to consolidate the basics that I've obtained at the IUT by working on real projects.
            </p>

            <p className="text-justify">
                Talking about projects, here as some of them, realized both at university and at "work".
            </p>

            <div className="flex gap-4">
                {Strings.engineering_course.iut.project.map( (project, index) => (
                    <Button 
                        text={project.title}
                        fun={() => setActiveProject(index)}
                        active={activeProjet === index}
                        className={clsx(
                            {
                                "opacity-25": activeProjet !== index
                            }
                        )}
                    />
                ))}
            </div>

            <ProjectSection
                key={activeProjet}
                title={Strings.engineering_course.iut.project[activeProjet].title}
                img={Strings.engineering_course.iut.project[activeProjet].img}
            >
                <p>{Strings.engineering_course.iut.project[activeProjet].description}</p>
            </ProjectSection>
        </SectionMotionContainer>
    )
}

const SectionENSEEIHT = () => {
    return (
        <SectionMotionContainer>
            ENSEEIHT
        </SectionMotionContainer>
    )
}

const SectionComingSoon = () => {
    return (
        <SectionMotionContainer>
            Coming soon 
        </SectionMotionContainer>
    )
}


const Engineering = () => {
    const [activeTab, setActiveTab] = useState(2)

    return (
        <div className="flex justify-center mb-96">
            <ContentWrapper className="flex flex-col items-center justify-center">
                <p className="font-pixel text-5xl mb-20 text-violet-500">Engineering course</p>

                {/* TIMELINE */}
                <div className="relative flex items-center">
                    {/* IUT SAINT-MALO */}
                    <div className={clsx(
                        "relative",
                        {
                            "pointer-events-none": activeTab === 1,
                            "opacity-25": activeTab !== 1,
                        }
                        )}>
                        <span className="absolute font-pixel text-center w-full bottom-[-50%]">2022-2024</span>
                        <Button 
                            text={"IUT of Saint-Malo"}
                            fun={() => setActiveTab(1)}
                            active={activeTab === 1}
                            />
                    </div>

                    <div className={clsx(
                        "w-40 h-[3px] shrink",
                        {
                            "bg-gradient-to-r from-violet-600 to-violet-600/25": activeTab === 1,
                            "bg-gradient-to-l from-violet-600 to-violet-600/25": activeTab === 2,
                            "bg-violet-600/50": activeTab === 3
                        }

                        )} />

                    {/* ENSEEIHT */}
                    <div className={clsx(
                        "relative",
                        {
                            "pointer-events-none": activeTab === 2,
                            "opacity-25": activeTab !== 2,
                        }
                        )}>
                        <span className="absolute font-pixel text-center w-full bottom-[-50%]">2024-2027</span>
                        <Button 
                            text={"ENSEEIHT"}
                            fun={() => setActiveTab(2)}
                            active={activeTab === 2}
                            />
                        <div className="absolute flex flex-col items-center justify-center font-pixel left-[-50%] right-[-50%] top-[-100%]">
                            <p className="w-fit inline-block">We're here...</p>
                            <span className="text-3xl leading-3 rotate-180">^</span>
                        </div>
                    </div>
                    
                    <div className={clsx(
                        "w-40 h-[3px] shrink",
                        {
                            "bg-violet-600/50": activeTab === 1,
                            "bg-gradient-to-r from-violet-600 to-violet-600/25": activeTab === 2,
                            "bg-gradient-to-l from-violet-600 to-violet-600/25": activeTab === 3,
                        }

                        )} />
                    
                    {/* COMING SOON */}
                    <div className={clsx(
                        "relative",
                        {
                            "pointer-events-none": activeTab === 3,
                            "opacity-25": activeTab !== 3,
                        }
                        )}>
                        <span className="absolute font-pixel text-center w-full bottom-[-50%]">2027-...</span>
                        <Button 
                            text={"Coming soon..."}
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
    )
}

export default Engineering;