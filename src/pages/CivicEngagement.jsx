import { motion, steps } from "framer-motion"
import { Strings, SectionMotionContainer, ContentWrapper } from "../exports"
import { useState } from "react"

const Timeline = (experiences) => {
    experiences = experiences.experiences
    const civicEngagementHoursGoal = 40
    var fillPercentage = ((experiences.map( (experience, _) => (experience.duration) )).reduce((acc, curr) => acc + curr, 0) / civicEngagementHoursGoal) * 100
    fillPercentage = fillPercentage > 100 ? 100 : fillPercentage

    const [fillInitialized, setFillInitialized] = useState(false)

    return (
        <div className="w-3/4 bg-yellow-400 flex flex-col mb-section-title-offset">
            <div className="relative w-full bg-violet-900 h-5">
                <motion.div
                    initial={{
                        width: 0
                    }}
                    animate={fillInitialized ? {
                        width: `${fillPercentage}%`
                    } : {}}
                    whileInView={() => {
                        if (!fillInitialized) setFillInitialized(true)
                    }}
                    transition={{
                        duration: 1,
                        ease: steps(fillPercentage)
                    }}
                    className="flex justify-end items-center pe-2 absolute left-0 top-0 bottom-0 bg-violet-500"
                >
                    {fillPercentage > 10 && (
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={fillInitialized ? {
                                opacity: 1
                            } : {}}
                            transition={{
                                duration: 2, ease: "easeIn"
                            }}
                        >{Math.round(fillPercentage)} %</motion.div>
                    )}
                </motion.div>

                <span className="absolute left-0 -translate-x-1/2 translate-y-2/3 pt-1 w-fit">0 hours</span>
                <span className="absolute right-0 translate-x-1/2 translate-y-2/3 pt-1">{civicEngagementHoursGoal} hours</span>
            </div>

            {/* <div className="flex justify-between">
                <span>0 hours</span>
                <span>{civicEngagementHoursGoal} hours</span>
            </div> */}

        </div>
    )
}

const ExperienceSection = (experience) => {
    experience = experience.experience

    return (
        <SectionMotionContainer className="flex gap-10">
            <img
                src={experience.img}
                alt={experience.title}
                className="card-shadow size-72 border-3 border-violet-400 object-fill"
            />

            <div className="flex flex-col">
                <p className="text-2xl text-violet-500">{experience.title}</p>
                <div className="mb-8 flex items-center gap-2 text-sm text-violet-200">
                    <span>Date: {experience.date}</span>
                    <span className="h-4 w-[1.5px] bg-violet-500"></span>
                    <span>Duration: {experience.duration} hours</span> 
                    {/* BE CAREFUL - IS IT HOURS? */}
                </div>

                <p className="text-justify">
                    {experience.description}
                </p>
            </div>
        </SectionMotionContainer>
    )
}

const CivicEngagement = () => {
    const experiences = Strings.civic_engagement.experiences

    return (
        <div className="mb-section-offset flex justify-center">
            <ContentWrapper className="mb-section-title-offset flex flex-col items-center justify-center">
                <div className="flex flex-col gap-2 mb-section-title-offset">
                    <p className="font-pixel text-5xl text-violet-500">
                        {Strings.civic_engagement.title}
                    </p>
                    
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
                        <p className="text-violet-500">(To be continued...)</p>
                    </motion.div>
                </div>


                <Timeline experiences={experiences} />

                <div className="flex flex-col w-full gap-8">
                    {
                        experiences.map( (experience, index) => (
                            <ExperienceSection 
                                experience={experience}
                                key={index}
                            />
                        ))
                    }
                </div>
            </ContentWrapper>
        </div>
    )
}

export default CivicEngagement