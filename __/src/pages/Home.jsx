import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { Footer } from "../components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* {Theme toggle } */}
        <ThemeToggle/>
        {/* {Background effects} */}
        <StarBackground/>
        {/* {Navbar} */}
        <NavBar/>
        {/* {Main Content} */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
        </main>
        <Footer/>
        {/* Footer */}
        
    </div>
    }