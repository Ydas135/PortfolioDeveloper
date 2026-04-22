import React from 'react'

export const MobileNavbar = ( { isOpen, setIsMenuOpen } ) => {
    const handleScroll = (sectionId) => {
        if (isOpen) setIsMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({ behavior : "smooth"});
    };
  return
    <div className='w-screen fixed top-0 z-20'>
        <div className='w-1/2 h-screen flex flex-col p-8 bg-background text-black'>
            <div className='ui-circle -ml-20 -mt-10'>
                <ul>
                    <li className='mb-5 '>
                        <a 
                        className="menuItem" 
                        onClick={() => handleScroll("hero")}>
                            Home
                        </a>
                    </li>
                    <li className='mb-5 '>
                        <a 
                        className="menuItem" 
                        onClick={() => handleScroll("skills")}>
                            Skills
                        </a>
                    </li>
                    <li className='mb-5 '>
                        <a 
                        className="menuItem" 
                        onClick={() => handleScroll("experience")}>
                            Work Experience
                        </a>
                    </li>
                    <li className='mb-5 '>
                        <a 
                        className="menuItem" 
                        onClick={() => handleScroll("about")}>
                            About Me
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
    

}
