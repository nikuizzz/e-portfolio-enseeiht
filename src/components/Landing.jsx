import clsx from "clsx";
import { ContentWrapper, Strings, Button } from "../exports";
import { motion, steps } from "framer-motion";

const Landing = () => {
    return (
        <main className="flex h-screen w-full items-center justify-center" id={Strings.welcome.id}>
            <ContentWrapper>
                <div className="flex items-center justify-center gap-10">

                    {/* PHOTO */}
                    <div className="shrink-0 group relative size-96 overflow-hidden border-3 border-violet-400 card-shadow">
                        <img
                            src="/photo_cv.png"
                            alt="nikita"
                            className="absolute inset-0"
                        />
                        
                        <motion.img
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: [0.4, 0, 0, 0, 0.6, 0, 0.8, 0]
                            }}
                            
                            transition={{
                                duration: 5, repeat: Infinity, ease: steps(7)
                            }}
                            src="/8bit_images/photo_cv_8bit.png"
                            alt="8bit_nikita"
                            className="absolute inset-0"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col gap-10">
                        
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-6">
                                <p className="font-pixel text-5xl inline-block text-violet-500">Nikita Ziuzin &lt;
                                    <motion.span
                                        initial={{
                                            opacity: 1
                                        }}
                                        animate={{
                                            opacity: 0
                                        }}
                                        transition={{
                                            duration: 1, ease: steps(2), repeat: Infinity
                                        }}
                                        >/
                                    </motion.span>
                                    &gt;
                                </p>
                            </div>

                            <div className="flex items-center gap-3 font-pixel text-violet-200 text-sm">
                                <span className="">20 years old</span>
                                <span className="h-5 w-[2px] bg-violet-500"></span>
                                <span className="">
                                    IT student at&nbsp;
                                    <a href={Strings.links.enseeiht}
                                        className="underline underline-offset-4">
                                            ENSEEIHT
                                        </a>
                                </span>
                                <span className="h-5 w-[2px] bg-violet-500"></span>
                                <span className="">
                                    Apprentice android developer for&nbsp;
                                    <a href={Strings.links.ampere}
                                        className="underline underline-offset-4">
                                            Renault Group
                                        </a>
                                </span>
                            </div>
                        </div>
                                        
                        <div className="flex flex-col gap-2">
                            {Strings.welcome.elevator_speech.map ( (speech, index) => (
                                <p className="text-sm" key={index}>{speech}</p>
                            ))}
                        </div>

                        <div className="flex gap-4 self-end">
                            <Button 
                                text={"See my english resume"}
                                fun={() => console.log("TODO english resume")}
                                src={"/8bit_images/flag_us.png"}
                            />
                            
                            <Button 
                                text={"See my french resume"}
                                fun={() => console.log("TODO english resume")}
                                src={"/8bit_images/flag_fr.png"}
                            />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </main>
    );
};

export default Landing;
