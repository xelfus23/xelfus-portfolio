import Link from "next/link";
import MyColors from "../myColors";

export default function Nav({ YOffset, setCursorState }) {
    const navItems = [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Games", route: "/games" },
        { name: "Practice", route: "/practice" },
    ];

    return (
        <div
            className="flex-1 w-screen flex absolute items-center justify-center h-[8vh]"
            style={{ transform: `translateY(-${YOffset * 1}px)` }}
        >
            <ul className={`flex gap-10 items-center justify-center`}>
                {navItems.map((item, index) => (
                    <Link
                        href={item.route}
                        key={index}
                        className={`text-xl`} // Apply the font className
                        style={{
                            color: MyColors(1).white,
                            textShadow: `
                            0 0 10px ${MyColors(1).white}, 
                            0 0 20px ${MyColors(1).lightBlue}, 
                            0 0 40px ${MyColors(1).purple}`,
                        }}
                    >
                        {item.name}
                    </Link>
                ))}
            </ul>
        </div>
    );
}
