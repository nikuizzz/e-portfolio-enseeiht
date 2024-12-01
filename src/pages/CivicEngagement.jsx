import { motion, steps } from "framer-motion";
import { Strings, SectionMotionContainer, ContentWrapper, SectionTitle } from "../exports";
import { useState } from "react";

const Timeline = (experiences) => {
    experiences = experiences.experiences;
    const civicEngagementHoursGoal = 40;
    var fillPercentage =
        (experiences
            .map((experience, _) => experience.duration)
            .reduce((acc, curr) => acc + curr, 0) /
            civicEngagementHoursGoal) *
        100;
    fillPercentage = fillPercentage > 100 ? 100 : fillPercentage;

    const [fillInitialized, setFillInitialized] = useState(false);

    return (
        <div className="mb-section-title-offset flex md:w-3/4 w-full flex-col bg-yellow-400">
            <div className="relative h-5 w-full bg-violet-900">
                <motion.div
                    initial={{
                        width: 0,
                    }}
                    animate={
                        fillInitialized
                            ? {
                                  width: `${fillPercentage}%`,
                              }
                            : {}
                    }
                    whileInView={() => {
                        if (!fillInitialized) setFillInitialized(true);
                    }}
                    transition={{
                        duration: 1,
                        ease: steps(fillPercentage),
                    }}
                    className="absolute bottom-0 left-0 top-0 flex items-center justify-end bg-violet-500 pe-2"
                >
                    {fillPercentage > 10 && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={
                                fillInitialized
                                    ? {
                                          opacity: 1,
                                      }
                                    : {}
                            }
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                            }}
                        >
                            {Math.round(fillPercentage)} %
                        </motion.div>
                    )}
                </motion.div>

                <span className="absolute left-0 w-fit md:-translate-x-1/2 translate-y-2/3 pt-1">
                    0 hours
                </span>
                <span className="absolute right-0 md:translate-x-1/2 translate-y-2/3 pt-1">
                    {civicEngagementHoursGoal} hours
                </span>
            </div>

            {/* <div className="flex justify-between">
                <span>0 hours</span>
                <span>{civicEngagementHoursGoal} hours</span>
            </div> */}
        </div>
    );
};

const ExperienceSection = (experience) => {
    experience = experience.experience;

    return (
        <SectionMotionContainer className="flex md:flex-row flex-col gap-10">
            <div className="flex gap-4 shrink-0">
                <img
                    src={experience.img}
                    alt={experience.title}
                    className="card-shadow md:size-72 size-32 border-3 border-violet-400 object-fill"
                />

                {/* SAME DIV 1 */}
                <div className="flex flex-col md:hidden gap-4">
                    <p className="text-xl text-violet-500">{experience.title}</p>
                    <div className="flex flex-col text-sm text-violet-200">
                        <span>Date: {experience.date}</span>
                        <span>Duration: {experience.duration} hours</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">

                {/* SAME DIV 2 */}
                <div className="md:flex flex-col hidden">
                    <p className="text-2xl text-violet-500">{experience.title}</p>
                    <div className="mb-8 flex items-center gap-2 text-sm text-violet-200">
                        <span>Date: {experience.date}</span>
                        <span className="h-4 w-[1.5px] bg-violet-500"></span>
                        <span>Duration: {experience.duration} hours</span>
                        {/* BE CAREFUL - IS IT HOURS? */}
                    </div>
                </div>

                <p className="text-justify">{experience.description}</p>
            </div>
        </SectionMotionContainer>
    );
};

const CivicEngagement = () => {
    const experiences = Strings.civic_engagement.experiences;

    return (
        <div
            className="flex justify-center pt-section-offset"
            id={Strings.civic_engagement.id}
        >
            <ContentWrapper className="flex flex-col items-center justify-center">
                <div className="md:mb-section-title-offset mb-10 flex flex-col gap-2">
                    <SectionTitle title={Strings.civic_engagement.title} />

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

                <div className="flex w-full flex-col gap-8">
                    {experiences.map((experience, index) => (
                        <ExperienceSection
                            experience={experience}
                            key={index}
                        />
                    ))}
                </div>
            </ContentWrapper>
        </div>
    );
};

export default CivicEngagement;
