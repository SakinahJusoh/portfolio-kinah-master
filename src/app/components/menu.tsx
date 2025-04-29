const MenuBar = () => {
    // Navigation  menu items
    const navItems = [
        {title: "About Me", active: true},
        {title: "Skills", active: false},
        {title: "Projects", active: false},
        {title: "Others", active: false},
    ];


    return (
        
        <div className="w-full justify-end mb-12">
            <div className="flex gap-12 md:gap-8 flex-wrap justify-center md:justify-center">
                {navItems.map((item, index) => (
                    <div key={index}>
                        <div
                            className={`text-2xl md:text-lg lg:text-xl ${
                                item.active
                                    ? "[font-family: 'Inter-BoldItalic', Helvetica] font-bold italic"
                                    : "[font-family: 'Inter-Italic', Helvetica] font-normal italic"
                            }text-black leading-tight`}
                            >
                                {item.title}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default MenuBar;