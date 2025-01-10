import React from "react";
import MyColors from "../myColors";
import { Kanit } from "next/font/google";

const kanit = Kanit({
    variable: "--font-Kanit",
    subsets: ["latin"],
    weight: "400",
});

export default function Letters({ YOffset, setCursorState }) {
    const letters = "XELFUS".split("");

    return (
        <div
            className="flex flex-col justify-center items-center h-screen z-0"
            style={{
                width: "100%",
            }}
        >
            <img
                src="images/ui/pages/cross.png"
                className="absolute w-3/4 drop-shadow-lg shadow-white"
                style={{
                    textShadow: `0 0 20px ${MyColors(1).white}`,
                }}
            ></img>
            <div
                className="flex justify-center items-center space-x-4"
                style={{
                    transform:
                        YOffset < 500
                            ? `translateY(${YOffset * 0.5}px)`
                            : `-translateY(${YOffset * 1.5}px)`,
                }}
            >
                {letters.map((letter, index) => (
                    <h1
                        key={index}
                        className={`${kanit.className}`}
                        style={{
                            textShadow:
                                YOffset < 100
                                    ? `
                                    0 0 10px ${MyColors(1).white}, 
                                    0 0 20px ${MyColors(1).blue}, 
                                    0 0 30px ${MyColors(1).lightBlue}`
                                    : `
                                    0 0 20px ${MyColors(1).white}, 
                                    0 0 50px ${MyColors(1).lightBlue}, 
                                    0 0 80px ${MyColors(1).purple},
                                    0 0 120px ${MyColors(1).purple}`,
                            color: MyColors(1).white,
                            fontSize: "10rem",
                            fontWeight: "bold",
                            transition: "ease-in-out 1s",
                        }}
                        onMouseOver={() => setCursorState(true)}
                        onMouseOut={() => setCursorState(false)}
                    >
                        {letter}
                    </h1>
                ))}
            </div>
        </div>
    );
}
