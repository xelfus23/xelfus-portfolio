import MyColors from "../myColors";
import React, { useState, useEffect, useRef, useMemo } from "react";

export default function About({ YOffset }) {

    const container1Style = useMemo(() => ({
        transform: `translateY(-${YOffset * 0.099}px)`,
        width: `calc(2% + ${Math.min(YOffset * 0.5, 1900 * 0.5)}px)`,
        maxWidth: "2%",
        height: `calc(70% + ${YOffset * 0.05}px)`,
        backgroundColor: MyColors(0.2).lightBlue,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }), [YOffset]);

    const container2Style = useMemo(() => ({
        transform: `translateY(-${YOffset * 0.100}px)`,
        width: `calc(6% + ${Math.min(YOffset * 0.15, 1900 * 0.15)}px)`,
        height: `calc(75% + ${YOffset * 0.05}px)`,
        backgroundColor: MyColors(0.2).purple,
        maxWidth: "4%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    }), [YOffset]);

    const container3Style = useMemo(() => ({
        transform: `translateY(${-YOffset * 0.099}px)`,
        width: `calc(10% + ${Math.min(YOffset * 0.452, 2000 * 0.452)}px)`,
        height: `calc(80% + ${YOffset * 0.05}px)`,
        backgroundColor: MyColors(0.2).violet,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: "100%",
    }), [YOffset]);

    const [users, setUsers] = useState()

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('http://localhost:3000/api/postgres');

                // Log the response to inspect if it's successful
                console.log('Response status:', res.status);

                if (!res.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await res.json();
                setUsers(data);  // Set the fetched users to state
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);  // Empty dependency array to run once when the component mounts


    return (
        <div className="relative h-screen w-full">
            <div
                className="flex absolute"
                style={{
                    height: "100vh",
                    width: "80vw",
                    alignItems: "center",
                }}
            >
                <div style={container1Style} />
                <div className="-z-10" style={container2Style} />
                <div
                    className="-z-10"
                    style={container3Style}
                >
                    {users}
                    <img src={'images/ui/icons/dev/JavaScript_logo.png'} width={200} height={200} />
                </div>
            </div>
        </div>
    )
}