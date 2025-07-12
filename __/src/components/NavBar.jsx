
import {cn} from "@/lib/utils";

const navItems =[
    {name:"Home",link:"#hero"},
    {name:"About",link:"#about"},
    {name:"Skills",link:"#skills"},
    {name:"Projects",link:"#projects"},
    {name:"Contact",link:"#contact"},
    

]

export const NavBar= ()=>{

    const[isScrolled,setIsScrolled]=useState(false);

    useEffect(() => {},[]);


    
    return <div className={cn("fixed w-full z-40 transition-all duration-300",)}></div>
}