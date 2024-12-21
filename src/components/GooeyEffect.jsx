import React, { useState } from "react";

const GooeyCards = ({ id, direction, position, setCardPositions, initialDirection,image }) => {
    const handleMouseMove = (e) => {
        // Get the cursor position relative to the card
        const cardRect = e.target.getBoundingClientRect();
        const cursorX = e.clientX - cardRect.left;
        const cursorY = e.clientY - cardRect.top;

        const newDirection = { x: cursorX/2 , y: cursorY };

        const newZ = (cursorX + cursorY) ;

        setCardPositions((prevState) =>
            prevState.map((card) =>
                card.id === id
                    ? { ...card, direction: newDirection, zCoordinate: newZ }
                    : card
            )
        );
    };

    const handleMouseOut = () => {
        setCardPositions((prevState) =>
            prevState.map((card) =>
                card.id === id
                    ? { ...card, direction: initialDirection } // Reset the direction
                    : card
            )
        );
    };

    return (
        <div
            className={`bg-[#1f2025] text-[#6b727e] w-fit absolute  px-[80px] py-[10px] transition-all duration-300 shrink-0`}
            style={{
                top: position?.top,
                left: position?.left,
                right: position?.right,
                bottom: position?.bottom,
                transform: `translate3d(${direction?.x}px, ${direction?.y}px, ${position?.zCoordinate}px)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
        >
            <img src={image} alt={id} className={"shrink-0"}/>
        </div>
    );
};

const GooeyEffect = () => {
    const [cardPositions, setCardPositions] = useState([
        { id: 1, position: { top: "0%", left: "0", zCoordinate: 0 }, direction: { x: 0, y: 0 },image:"/js.png" },
        { id: 2, position: { top: "15%", left: "30%", zCoordinate: 0 }, direction: { x: 0, y: 0 },image:"/reactjs.png" },
        { id: 3, position: { top: "32%", left: "5%", zCoordinate: 0 }, direction: { x: 0, y: 0 },image:"/python.png" },
        { id: 4, position: { top: "48%", left: "45%", zCoordinate: 0 }, direction: { x: 0, y: 0 },image:"/shopify.png" },
    ]);

    return (
        <div className="relative w-full h-[400px]" style={{ filter: "url('#goo')" }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

          
            {cardPositions.map((card) => (
                <GooeyCards
                    key={card.id}  
                    id={card.id}   
                    direction={card.direction}
                    position={card.position}
                    setCardPositions={setCardPositions}
                    initialDirection={{ x: 0, y: 0 }}
                    image={card.image}
                />
            ))}
        </div>
    );
};

export default GooeyEffect;
