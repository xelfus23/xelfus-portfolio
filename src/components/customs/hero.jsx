import MyColors from "../myColors";
import React from "react";

export default function Hero({ YOffset }) {
    const paragraphStyle =
        YOffset > 300
            ? {
                opacity: 1,
                transform: `
                    translateX(${Math.min(YOffset * 0.2, 400 * 0.5)}px) 
                    translateY(${YOffset * 0.15}px)`,
                transition: "opacity 1s ease-out, transform 1s ease-out", // Smooth transition
            }
            : {
                opacity: 0,
                transform: `
                    translateX(${Math.min(YOffset * 0.2, 400 * 0.5)}px) 
                    translateY(${YOffset * 0.15}px)`,
                transition: "opacity 1s ease-out, transform 1s ease-out", // Smooth transition
            };

    const fade =
        YOffset > 200
            ? {
                opacity: 1,
            }
            : {
                opacity: 0,
            };

    const name = 'Patrick John Medenilla'.split('')

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
            }}
        >
            <div
                className="h-2/3 absolute"
                style={{
                    ...fade,
                    transition: "opacity 1s ease-out, transform 1s ease-out", // Smooth transition
                    transform: `
                        translateX(${Math.min(YOffset * 0.5, 380 * 0.5)}px) 
                        translateY(${YOffset * 0.1}px)`, // Adjust scroll speed
                    height: `${YOffset * 0.5}px`,
                    maxHeight: `65vh`,
                    width: `calc((40vw - 10vw) + ${YOffset * 0.5}px)`,
                    maxWidth: `60vw`,
                    backgroundColor: MyColors(0.1).violet,
                }}
            ></div>
            <div
                className="h-2/3 absolute"
                style={{
                    ...fade,
                    transform: `translateY(${YOffset * 0.1}px)`, // Adjust scroll speed
                    width: `calc((20vw - 10vw) + ${YOffset * 0.2}px)`,
                    height: `${YOffset * 0.6}px`,
                    maxWidth: `20vw`,
                    backgroundColor: MyColors(0.1).purple,
                    right: "10vw",
                    transition: "opacity 1s ease-out, transform 1s ease-out", // Smooth transition
                }}
            ></div>

            <div
                className="flex gap-6"
                style={{
                    transform: `translateX(${Math.min(
                        YOffset * 0.5,
                        1000 * 0.05
                    )}px) translateY(${YOffset * 0.15}px)`, // Adjust scroll speed
                }}
            >
                <div
                    className="h-2/6 w-3"
                    style={{
                        ...fade,
                        background: `linear-gradient(
                                to bottom, 
                                ${MyColors(1).lightBlue}, 
                                ${MyColors(1).purple}
                            )`,
                        transform: `
                            translateX(${Math.min(YOffset * 0.18, 400 * 0.5)}px) 
                            translateY(${YOffset * 0.12}px)`, // Adjust scroll speed
                        transition:
                            "opacity 1s ease-out, transform 2s ease-out", // Smooth transition
                        height: `${YOffset * 0.2}px`,
                        maxHeight: `30vh`,
                    }}
                />
                <div>
                    <h1
                        className="text-3xl"
                        style={{
                            ...fade,
                            transform: `
                                translateX(${Math.min(YOffset * 0.3, 400 * 0.5)}px) 
                                translateY(${YOffset * 0.15}px)`,
                            color: MyColors(0.8).white,
                            transition:
                                "opacity 1s ease-out, transform 1s ease-out", // Smooth transition
                            fontSize: 24,
                        }}
                    >
                        Hi, I'm{" "}
                        <span
                            className="font-bold text-4xl"
                            style={{
                                fontSize: `calc(30px + ${Math.min(YOffset * 0.01, 1000 * 0.01)}px)`,
                                color: MyColors(1).white, // Make text transparent when active
                                transition: "transform 0.3s ease-out, background 0.3s ease-out", // Smooth transition
                            }}
                        >
                            Patrick John Medenilla
                        </span>

                    </h1>

                    <div>
                        <p
                            style={{
                                ...fade,
                                transform: `
                                    translateX(${Math.min(YOffset * 0.25, 400 * 0.5)}px) 
                                    translateY(${YOffset * 0.15}px)`, // Adjust scroll speed
                                transition:
                                    "opacity 1.5s ease-out, transform 1s ease-out", // Smooth transition
                                color: MyColors(0.8).white,
                            }}
                        >
                            Web Developer | Creating Interactive, User-Friendly
                            Web Applications
                        </p>

                        <p
                            id="paragraph"
                            style={{
                                ...paragraphStyle, // Apply the conditional style
                                maxWidth: "50vw",
                                marginTop: "1em",
                                color: MyColors(0.8).white,
                            }}
                        >
                            I’m a passionate web developer with experience in
                            front-end and back-end technologies. Welcome to my
                            portfolio, where I showcase the projects that drive
                            my growth and creativity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
