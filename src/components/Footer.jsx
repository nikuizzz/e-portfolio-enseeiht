import clsx from "clsx"
import { ContentWrapper, Strings } from "../exports"


const Footer = () => {
    return (
        <div className=" mt-section-offset flex justify-center">
            <ContentWrapper className={clsx(
                "border-x-3 border-t-3 border-violet-400 card-shadow px-8 pt-5 pb-2 flex flex-col bg-violet-500"
            )}>
                <div className="flex justify-between">
                    <p className="text-4xl">
                        <span>Nikita</span>
                        <br />
                        <span>Ziuzin</span>
                    </p>

                    <div className="flex gap-12">
                        <div className="flex flex-col gap-0.5">
                            <p className="mb-2">General Information</p>
                            <a href="" className="text-violet-300 text-sm">Terms and Conditions</a>
                            <a href="" className="text-violet-300 text-sm">Legal Notices</a>
                            <a href="" className="text-violet-300 text-sm">Privacy Policy</a>
                            <a href="" className="text-violet-300 text-sm">Terms of Use</a>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <p className="mb-2">Useful links</p>
                            <a href={Strings.links.linkedin} className="text-violet-300 text-sm">LinkedIn</a>
                            <a href={Strings.links.youtube} className="text-violet-300 text-sm">YouTube</a>
                            <a href={Strings.links.ampere} className="text-violet-300 text-sm">Ampere Cars</a>
                            <a href={Strings.links.enseeiht} className="text-violet-300 text-sm">ENSEEIHT</a>
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <p className="mb-2">Resume</p>
                            <a href="TODO" className="text-violet-300 text-sm">English</a>
                            <a href="TODO " className="text-violet-300 text-sm">French</a>
                        </div>
                    </div>
                </div>
                
                <div className="w-full h-[3px] bg-violet-400 mt-6 mb-1"></div>

                <div className="flex justify-between">
                    <p>&copy; 2024, Nikita Ziuzin</p>
                    <a href={`mailto:${Strings.links.email}`}>{Strings.links.email}</a>
                </div>
                
            </ContentWrapper>
        </div>
    )
}

export default Footer