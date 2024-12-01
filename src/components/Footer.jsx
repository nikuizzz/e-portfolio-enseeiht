import clsx from "clsx"
import { ContentWrapper, Strings } from "../exports"


const Footer = () => {
    return (
        <div className="mt-section-offset flex justify-center">
            <ContentWrapper className={clsx(
                "md:border-x-3 border-t-3 border-violet-400 md:card-shadow bg-violet-500 z-10"
            )}>
                <div className="flex flex-col pt-5 pb-2 md:px-8">
                    <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-6">
                        <p className="text-4xl">
                            <span>Nikita</span>
                            <br />
                            <span>Ziuzin</span>
                        </p>

                        <div className="flex md:flex-row flex-col md:gap-12 gap-6">
                            <div className="flex flex-col gap-0.5">
                                <p className="mb-2">General Information</p>
                                <a href="" target="_blank" className="no-a-underline pointer-events-none text-violet-300 text-sm">Terms and Conditions</a>
                                <a href="" target="_blank" className="no-a-underline pointer-events-none text-violet-300 text-sm">Legal Notices</a>
                                <a href="" target="_blank" className="no-a-underline pointer-events-none text-violet-300 text-sm">Privacy Policy</a>
                                <a href="" target="_blank" className="no-a-underline pointer-events-none text-violet-300 text-sm">Terms of Use</a>
                            </div>

                            <div className="flex flex-col gap-0.5">
                                <p className="mb-2">Useful links</p>
                                <a href={Strings.links.linkedin} target="_blank" className="text-violet-300 text-sm">LinkedIn</a>
                                <a href={Strings.links.youtube} target="_blank" className="text-violet-300 text-sm">YouTube</a>
                                <a href={Strings.links.ampere} target="_blank" className="text-violet-300 text-sm">Ampere Cars</a>
                                <a href={Strings.links.enseeiht} target="_blank" className="text-violet-300 text-sm">ENSEEIHT</a>
                            </div>

                            <div className="flex flex-col gap-0.5">
                                <p className="mb-2">Resume</p>
                                <a href={Strings.career_development.resume.en} target="_blank" className="text-violet-300 text-sm">English</a>
                                <a href={Strings.career_development.resume.fr} target="_blank" className="text-violet-300 text-sm">French</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full h-[3px] bg-violet-400 mt-6 mb-2" />

                    <div className="flex justify-between">
                        <p>&copy; 2024, Nikita Ziuzin</p>
                        <a href={`mailto:${Strings.links.email}`}>{Strings.links.email}</a>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Footer