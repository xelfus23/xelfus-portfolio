import React, { useState, useEffect, useRef, useMemo } from "react";
import GamesData from "@/data/gameData";
import MyColors from "../myColors";

function useOnScreen(ref, threshold = 0.1) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.disconnect();
        };
    }, [ref, threshold]);

    return isIntersecting;
}

export default function GameIcons({ YOffset, setCursorState }) {
    const games = GamesData;
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    // UseMemo style for container1, container2, container3 as before
    const container1Style = useMemo(() => ({
        transform: `translateY(-${YOffset * 0.1}px)`,
        width: `calc(2% + ${Math.min(YOffset * 0.5, 1900 * 0.5)}px)`,
        maxWidth: "15%",
        height: `calc(40% + ${YOffset * 0.05}px)`,
        backgroundColor: MyColors(0.2).lightBlue,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }), [YOffset]);

    const container2Style = useMemo(() => ({
        transform: `translateY(-${YOffset * 0.1}px)`,
        width: `calc(6% + ${Math.min(YOffset * 0.15, 1900 * 0.15)}px)`,
        height: `calc(60% + ${YOffset * 0.05}px)`,
        backgroundColor: MyColors(0.2).purple,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }), [YOffset]);

    const container3Style = useMemo(() => ({
        transform: `translateY(${-YOffset * 0.1}px)`,
        width: `calc(4.5% + ${Math.min(YOffset * 0.25, 1895 * 0.25)}px)`,
        height: `calc(80% + ${YOffset * 0.05}px)`,
        backgroundColor: MyColors(0.2).violet,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }), [YOffset]);

    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div
            className="flex"
            style={{
                width: "100%",
                alignSelf: "center",
                justifySelf: "center",
            }}
        >
            <div
                className="flex absolute"
                style={{
                    height: "100vh",
                    width: "80vw",
                    alignItems: "center",
                }}
            >
                <div style={container1Style}>
                    {games
                        .filter((game) => ['Sky', 'Mobile Legends', 'Minecraft'].some(keyword => game.name.toLowerCase().includes(keyword.toLowerCase())))
                        .map((game, index) => (
                            <div
                                ref={game.ref}
                                key={game.name + index}
                                style={{
                                    display: "flex",
                                    transform: isVisible ? `translateX(30px)` : 'translateX(0)',
                                    transition: 'transform 1s ease',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    aspectRatio: 1,
                                    width: "40%",
                                }}
                            >
                                <img
                                    src={game.image}
                                    style={{
                                        aspectRatio: 1,
                                        borderWidth: 1,
                                        borderColor: MyColors(1).white,
                                        width: '100%',
                                        borderRadius: '10%',
                                    }}
                                    alt={`Game ${index}`}
                                    onMouseOver={() => setHoveredItem(game)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                />
                            </div>
                        ))
                    }
                </div>
                <div
                    className="-z-10"
                    style={container2Style}
                >
                    {games
                        .filter((game) => ['Roblox', 'League', 'Terraria', 'Monopoly'].some(keyword => game.name.toLowerCase().includes(keyword.toLowerCase())))
                        .map((game, index) => (
                            <div
                                ref={game.ref}
                                key={game.name + index}
                                style={{
                                    display: "flex",
                                    transform: isVisible ? `translateX(30px)` : 'translateX(0)',
                                    transition: 'transform 1s ease',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    aspectRatio: 1,
                                    width: "25%",
                                }}
                            >
                                <img
                                    src={game.image}
                                    style={{
                                        aspectRatio: 1,
                                        borderWidth: 1,
                                        borderColor: MyColors(1).white,
                                        width: '100%',
                                        borderRadius: '10%',
                                    }}
                                    alt={`Game ${index}`}
                                    onMouseOver={() => setHoveredItem(game)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                />
                            </div>
                        ))
                    }
                </div>
                <div
                    className="-z-10"
                    style={container3Style}
                >
                    {games
                        .filter((game) => ['Palworld', 'Valorant', 'Wild', 'Pizza', 'Utopia'].some(keyword => game.name.toLowerCase().includes(keyword.toLowerCase())))
                        .map((game, index) => (
                            <div
                                ref={game.ref}
                                key={game.name + index}
                                style={{
                                    display: "flex",
                                    transform: isVisible ? `translateX(30px)` : 'translateX(0)',
                                    transition: 'transform 1s ease',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: "100%",
                                    height: '20%',
                                    padding: '5%',
                                }}
                            >
                                <img
                                    src={game.image}
                                    style={{
                                        aspectRatio: 1,
                                        borderWidth: 1,
                                        borderColor: MyColors(1).white,
                                        width: '20%',
                                        borderRadius: '10%',
                                        zIndex: 2,
                                    }}
                                    alt={`Game ${index}`}
                                    onMouseOver={() => setHoveredItem(game)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                />
                                {hoveredItem?.name === game.name ? (
                                    <p style={{
                                        zIndex: 10, // Make sure it's above the image
                                        width: '80%',
                                        padding: '5%',
                                        fontSize: Math.min((YOffset * 0.01) / 1.4, (2100 * 0.01) / 1.4),
                                    }}>
                                        {game.description}
                                    </p>
                                ) : null}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
