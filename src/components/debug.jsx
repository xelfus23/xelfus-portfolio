import MyColors from "./myColors"


export default function Debug({ YOffset }) {
    return (
        <div style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            height: '20vh',
            position: 'fixed',
            padding: '20px'
        }}>
            <h1
                style={{
                    color: MyColors(0.8).yellow,
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                Offset: <span style={{
                    color: MyColors(1).orange
                }}>{(YOffset).toFixed(2)}</span>
            </h1>
            <h1
                style={{
                    color: MyColors(0.8).yellow,
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                Offset * 0.2: <span style={{
                    color: MyColors(1).orange
                }}>{(YOffset * 0.2).toFixed(2)}</span>
            </h1>
            <h1
                style={{
                    color: MyColors(0.8).yellow,
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                Offset * 0.1: <span style={{
                    color: MyColors(1).orange
                }}>{(YOffset * 0.1).toFixed(2)}</span>
            </h1>
            <h1
                style={{
                    color: MyColors(0.8).yellow,
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                Offset * 0.05: <span style={{
                    color: MyColors(1).orange
                }}>{(YOffset * 0.05).toFixed(2)}</span>
            </h1>

            <h1
                style={{
                    color: MyColors(0.8).yellow,
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                Offset * 0.01: <span style={{
                    color: MyColors(1).orange
                }}>{(YOffset * 0.01).toFixed(2)}</span>
            </h1>

            <h1
                style={{
                    color: MyColors(0.8).yellow,
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                Offset * 0.005: <span style={{
                    color: MyColors(1).orange
                }}>{(YOffset * 0.005).toFixed(2)}</span>

                {" "}

            </h1>
            <h1
                style={{
                    color: MyColors(0.8).yellow,
                    fontWeight: "bold",
                    zIndex: 1000,
                }}
            >
                Offset * 0.001: <span style={{
                    color: MyColors(1).orange
                }}>{(YOffset * 0.001).toFixed(2)}</span>
            </h1>
            {Math.floor((((YOffset * 0.005) - 3) * 3.5))}
        </div>

    )
}