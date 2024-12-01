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
                    <a className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in no-a-underline" href={`#${Strings.welcome.id}`}>{Strings.welcome.title}</a>
                    <a className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in no-a-underline" href={`#${Strings.engineering_course.id}`}>{Strings.engineering_course.title}</a>
                    <a className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in no-a-underline" href={`#${Strings.international.id}`}>{Strings.international.title}</a>
                    <a className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in no-a-underline" href={`#${Strings.civic_engagement.id}`}>{Strings.civic_engagement.title}</a>
                    <a className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in no-a-underline" href={`#${Strings.career_development.id}`}>{Strings.career_development.title}</a>
                    <a className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in no-a-underline" href={`#${Strings.other.id}`}>{Strings.other.title}</a>
                </div>
            </ContentWrapper>
        </header>
    )
}

export default Header