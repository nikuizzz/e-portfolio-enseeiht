import { useState } from "react";
import {
    Strings,
    Button,
    ContentWrapper,
    SectionMotionContainer,
} from "../exports";
import clsx from "clsx";
import { motion, steps } from "framer-motion";

const VideoSection = () => {
    return (
        <SectionMotionContainer
            className={clsx(
                "flex aspect-video w-3/4 flex-col items-center justify-center gap-10",
                "card-shadow border-3 border-violet-400 bg-zinc-800",
            )}
        >
            {/* <video controls>
                <source src="https://www.youtube.com/watch?v=lkoTb4LSH_8" type="video/mp4" />
                I'm sorry, it looks like your browser does not support this video tag...
            </video> */}
            <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/lkoTb4LSH_8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </SectionMotionContainer>
    );
};

const ProfileCard = (profile) => {
    profile = profile.profile;

    return (
        <motion.div
            className="card-shadow group flex flex-1 shrink-0 grow flex-col gap-2 border-3 border-violet-400 bg-zinc-800 p-5 hover:bg-violet-600"
            initial={{
                scale: 0.75,
            }}
            animate={{
                scale: 1,
            }}
            transition={{
                duration: 0.25,
                ease: steps(5, "jump-end"),
            }}
        >
            <div className="flex gap-4">
                <img
                    src={profile.img}
                    alt={profile.name}
                    className="size-24 border-3 border-violet-400"
                />

                <div className="flex flex-col">
                    <p className="text-lg text-violet-500 group-hover:text-violet-400">
                        {profile.url === "" ? (
                            profile.name
                        ) : (
                            <a href={profile.url} className="-underline">
                                {profile.name}
                            </a>
                        )}
                    </p>
                    <p className="text-sm">
                        {profile.situation.charAt(0).toUpperCase() +
                            profile.situation.slice(1)}{" "}
                        at{" "}
                        <a
                            href={profile.institution.url}
                            className="-underline"
                        >
                            {profile.institution.name}
                        </a>
                    </p>
                </div>
            </div>

            <p className="mt-6 text-lg text-violet-500 group-hover:text-violet-400">
                Exchange details
            </p>
            <p className="text-justify text-sm">{profile.description}</p>
        </motion.div>
    );
};
const ProfilesSection = () => {
    const profiles = Strings.career_development.profiles;

    return (
        <div className="flex w-full justify-center gap-10 px-16">
            {profiles.map((profile, index) => (
                <ProfileCard profile={profile} key={index} />
            ))}
        </div>
    );
};

const CareerDevelopment = () => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div
            className="flex justify-center pt-section-offset"
            id={Strings.career_development.id}
        >
            <ContentWrapper className="flex flex-col items-center">
                <p className="font-pixel text-5xl text-violet-500">
                    {Strings.career_development.title}
                </p>

                <div className="mb-section-title-offset mt-8 flex gap-4">
                    <Button
                        text={"Elevator pitch"}
                        fun={() => setActiveSection(0)}
                        className={clsx({
                            "opacity-25": activeSection !== 0,
                        })}
                        active={activeSection === 0}
                    />
                    <Button
                        text={"Model profiles"}
                        fun={() => setActiveSection(1)}
                        className={clsx({
                            "opacity-25": activeSection !== 1,
                        })}
                        active={activeSection === 1}
                    />
                    <span className="mx-4 my-auto h-4 w-[1.5px] bg-violet-500"></span>
                    <Button
                        text={"English resume"}
                        fun={() => console.log("TODO english resume")}
                        img={"/8bit_images/flag_us.png"}
                    />

                    <Button
                        text={"French resume"}
                        fun={() => console.log("TODO english resume")}
                        img={"/8bit_images/flag_fr.png"}
                    />
                </div>

                {activeSection === 0 && <VideoSection />}
                {activeSection === 1 && <ProfilesSection />}
            </ContentWrapper>
        </div>
    );
};

export default CareerDevelopment;
