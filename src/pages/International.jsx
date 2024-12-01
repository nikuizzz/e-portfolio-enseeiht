import clsx from "clsx";
import {
    Strings,
    ContentWrapper,
    Button,
    SectionMotionContainer,
    SectionTitle
} from "../exports";
import React, { useState } from "react";

const DestinationSection = (destination) => {
    destination = destination.destination;

    return (
        <SectionMotionContainer>
            <div className="flex gap-2">
                <span className="text-2xl text-violet-500">
                    {destination.country}
                </span>
                <div className="flex w-10 gap-2">
                    {typeof destination.img === "string" && (
                        <img
                            src={destination.img}
                            alt={`${destination.country} flag`}
                        />
                    )}
                    {Array.isArray(destination.img) && (
                        <>
                            <img
                                src={destination.img[0]}
                                alt={`${destination.country} flag`}
                            />
                            <img
                                src={destination.img[1]}
                                alt={`${destination.country} flag`}
                            />
                        </>
                    )}
                </div>
            </div>

            <div className="mb-8 flex lg:items-center gap-2 text-sm text-violet-200">
                <span>Universities: </span>
                {destination.universities.map((university, index) => (
                    <React.Fragment key={index}>
                        <a href={university.link} target="_blank" className="-underline">
                            {university.name}
                        </a>
                        {index < destination.universities.length - 1 && (
                            <span className="h-4 w-[1.5px] bg-violet-500"></span>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <p className="text-justify">{destination.description}</p>
        </SectionMotionContainer>
    );
};

const International = () => {
    const destinations = Strings.international.destinations;
    const [currentDestination, setCurrentDestination] = useState(0);

    return (
        <div
            className="flex justify-center pt-section-offset"
            id={Strings.international.id}
        >
            <ContentWrapper className="flex flex-col items-center justify-center">
                <SectionTitle title={Strings.international.title} className="mb-20"/>

                <div className="flex md:flex-row flex-col w-full">
                    <div className="flex flex-1 flex-col gap-8">
                        <p className="text-justify">
                            {Strings.international.description}
                        </p>

                        <div className="flex lg:flex-row flex-col gap-4">
                            {destinations.map((destination, index) => (
                                <Button
                                    key={index}
                                    text={destination.country}
                                    fun={() => setCurrentDestination(index)}
                                    className={clsx({
                                        "opacity-25":
                                            currentDestination !== index,
                                    })}
                                    img={destination.img}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="z-10 mx-10 md:flex w-1 bg-violet-500 hidden" />

                    <div className="z-10 flex flex-1 flex-col gap-8 md:mt-0 mt-8">
                        <DestinationSection
                            destination={destinations[currentDestination]}
                            key={currentDestination}
                        />
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default International;
