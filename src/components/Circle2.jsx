import React, { useRef, useEffect } from "react";
import { usePageContext } from "../context/PageContext";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useResizeDetector } from "react-resize-detector";

const Circle2 = () => {
    const { marker, setMarker } = usePageContext();
    const { width, height, ref } = useResizeDetector();

    let Sphere = () => {
        const meshRef = useRef();

        const radius = 3;
        const widthSegments = 16;
        const heightSegments = 16;

        return (
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <sphereGeometry args={[radius, widthSegments, heightSegments]} />
                <meshBasicMaterial color={0xffffff} wireframe />
            </mesh>
        );
    };
    useEffect(() => {
        Sphere = () => {
            const meshRef = useRef();

            const radius = 3;
            const widthSegments = 16;
            const heightSegments = 16;

            return (
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <sphereGeometry args={[radius, widthSegments, heightSegments]} />
                    <meshBasicMaterial color={0xffffff} wireframe />
                </mesh>
            );
        };
    }, [width, height]);

    return (
        <div
            ref={ref}
            className={`${marker === 2
                    ? "opacity-100 rotate-[0deg] "
                    : marker > 2
                        ? "opacity-[1%]  rotate-[540deg]  "
                        : "opacity-[1%]  rotate-[-540deg] "
                }  transition-all ease-in-out duration-700 tall:h-[71.5vw] tall:w-[71.5vw] h-[71.5vw] w-[71.5vw] sm:h-[38vw] sm:w-[38vw] wide:h-[74.5vh] rounded-full   relative`}
            style={{ clipPath: "circle(50% at center)" }}
        >
            <Canvas>
                <Sphere />
                <OrbitControls
                    enableDamping={true}
                    rotateSpeed={1}
                    enableZoom={false}
                    autoRotate={true}
                    autoRotateSpeed={2}
                />
            </Canvas>
        </div>
    );
};

export default Circle2;
