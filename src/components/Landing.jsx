import clsx from "clsx";
import { ContentWrapper, Strings, Button } from "../exports";
import { motion, steps } from "framer-motion";
import { Quote } from "react-bootstrap-icons";

const Landing = () => {
    return (
        <main className="flex h-svh w-svw items-center justify-center">
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
                                opacity: [0.2, 0, 0, 0, 0.35, 0, 0.5, 0]
                            }}
                            
                            transition={{
                                duration: 3, repeat: Infinity, ease: steps(7)
                            }}
                            src="/photo_cv_8bit.png"
                            alt="8bit_nikita"
                            className="absolute inset-0"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="flex flex-col gap-20">
                        
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-6">
                                <p className="font-pixel text-5xl inline-block">Nikita Ziuzin</p>
                                <img src="/8bit_laptop.png" alt="Laptop image" className="w-14 h-10 mt-auto"/>
                            </div>

                            <div className="flex items-center gap-3 font-pixel text-violet-200 text-sm">
                                <span className="">20 years old</span>
                                <span className="h-5 w-[2px] bg-violet-500"></span>
                                <span className="">
                                    IT student at&nbsp;
                                    <a href="https://www.enseeiht.fr/fr/index.html" 
                                        className="underline underline-offset-4">
                                            ENSEEIHT
                                        </a>
                                </span>
                                <span className="h-5 w-[2px] bg-violet-500"></span>
                                <span className="">
                                    Apprentice android developer for&nbsp;
                                    <a href="https://www.ampere.cars/" 
                                        className="underline underline-offset-4">
                                            Renault Group
                                        </a>
                                </span>
                            </div>
                        </div>

                        <p className="text-sm">{Strings.elevator_speech}</p>

                        <div className="flex gap-6 self-end">
                            <Button 
                                text={"See my english resume"}
                                fun={() => console.log("TODO english resume")}
                                src={"/8bit_usa_flag.png"}
                            />
                            
                            <Button 
                                text={"See my french resume"}
                                fun={() => console.log("TODO english resume")}
                                src={"/8bit_french_flag.png"}
                            />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </main>
    );
};

export default Landing;
