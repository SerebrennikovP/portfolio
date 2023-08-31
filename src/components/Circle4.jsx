import { ResponsivePie } from "@nivo/pie";
import { Circle4Data } from "../data/constData";
import { usePageContext } from "../context/PageContext";
import "../CSS/homepage.css";
import { useState, useEffect } from "react";
import { useResizeDetector } from "react-resize-detector";

const Circle4 = () => {
    const { marker, setMarker } = usePageContext();
    const { width, ref } = useResizeDetector();

    return (
        <div
            ref={ref}
            className={`${marker === 4
                ? "opacity-100 rotate-[0deg] "
                : marker < 4
                    ? "opacity-[0%]  rotate-[-540deg]  "
                    : "opacity-[0%]  rotate-[540deg] "
                }transition-all ease-in-out duration-700 tall:h-[95vw] tall:w-[95vw] h-[95vw] w-[95vw] sm:h-[66vw] sm:w-[66vw] wide:h-[128vh] wide:w-[128vh]  rounded-full overflow-hidden relative `}
        >
            <ResponsivePie
                data={Circle4Data}
                margin={{
                    top: 0.16 * width,
                    right: 0.16 * width,
                    left: 0.16 * width,
                    bottom: 0.16 * width,
                }}
                innerRadius={0.3}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={3}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsOffset={-3}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.3)",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: "JavaScript",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "CSS3",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "React",
                        },
                        id: "dots",
                    },
                ]}
                legends={[]}
            />
        </div>
    );
};

export default Circle4;
