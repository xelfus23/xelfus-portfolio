"use client";
import About from "@/components/customs/about";
import GameIcons from "@/components/customs/games";
import Letters from "@/components/customs/letters";
import Nav from "@/components/customs/nav";
import StarryBg from "@/components/customs/starryBg";
import MyColors from "@/components/myColors";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Debug from "@/components/debug";

const Cursor = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${MyColors(0.1).black};
    pointer-events: none;
    z-index: 1000;
    backdrop-filter: invert(1);
    transition: "transform 0.1s ease-out";
    transform: scale(${({ $cursor }) => ($cursor ? 2.5 : 1)});
    left: ${({ $mouse }) => `${$mouse.x}px`};
    top: ${({ $mouse }) => `${$mouse.y}px`};
`;

export default function Pages() {
    const [YOffset, setYOffset] = useState(0);
    const [cursorState, setCursorState] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setYOffset(window.scrollY);
        };

        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX + window.scrollX,
                y: event.clientY + window.scrollY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const MemoizedCursor = React.memo(Cursor);



    const AbsoluteComponents = () => (
        <>
            <img
                src="images/ui/pages/purple-grid.png"
                className="opacity-10 -z-10 fixed inset-0 object-cover"
                alt="Background Grid"
            />
        </>
    );

    return (
        <div className="w-screen h-auto items-center flex flex-col">
            {/* <MemoizedCursor $mouse={mousePosition} $cursor={cursorState} /> */}
            <Debug YOffset={YOffset} />
            <Nav YOffset={YOffset} />
            <AbsoluteComponents />
            <StarryBg />
            <div
                className="h-auto flex flex-col items-center"
                style={{
                    width: "80%",
                }}
            >
                <Letters YOffset={YOffset} setCursorState={setCursorState} />
                <div style={{ height: "20vh" }} />
                <About YOffset={YOffset} />
                <div style={{ height: "0vh" }} />
                <GameIcons YOffset={YOffset} setCursorState={setCursorState} />
            </div>
        </div>
    );
}
