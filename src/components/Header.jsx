import clsx from "clsx"
import { ContentWrapper } from "../exports"

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
                    <a href="TODO" className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">Welcome</a>
                    <a href="TODO" className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">Engineering course</a>
                    <a href="TODO" className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">International</a>
                    <a href="TODO" className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">Civic engagement</a>
                    <a href="TODO" className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">Sports</a>
                    <a href="TODO" className="font-pixel text-violet-100 highlight animated-highlight after:bg-violet-400 transition-colors duration-100 ease-in">Career development</a>
                </div>
            </ContentWrapper>
        </header>
    )
}

export default Header