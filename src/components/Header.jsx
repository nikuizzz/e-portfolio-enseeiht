import clsx from "clsx"
import { Strings, ContentWrapper } from "../exports"

const Header = () => {
    return (
        <header className="fixed flex justify-center bg-violet-500 w-full border-b-3 border-violet-400 z-50">
            <ContentWrapper className={clsx(
                "flex justify-between items-center py-2", 
                )}>
                {/* LOGO */}
                <div className="size-12 rounded-lg overflow-hidden">
                    <img src="/logo.png" alt="NZ company" className="size-full"/>
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                    <a href={`#${Strings.welcome.id}`} className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">{Strings.welcome.title}</a>
                    <a href={`#${Strings.engineering_course.id}`} className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">{Strings.engineering_course.title}</a>
                    <a href={`#${Strings.international.id}`} className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">{Strings.international.title}</a>
                    <a href={`#${Strings.civic_engagement.id}`} className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">{Strings.civic_engagement.title}</a>
                    <a href={`#${Strings.career_development.id}`} className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">{Strings.career_development.title}</a>
                    <a href={`#${Strings.other.id}`} className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">{Strings.other.title}</a>
                </div>
            </ContentWrapper>
        </header>
    )
}

export default Header