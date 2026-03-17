import React from "react";

const icons = {
    cone: (
        <path d="M12 3l6 14H6L12 3zm0 0l-1.5 6h3L12 3zm-3 14h6l-3 4-3-4z" />
    ),
    cup: (
        <path d="M6 8h12l-1.5 9a2 2 0 0 1-2 1.7H9.5a2 2 0 0 1-2-1.7L6 8zm2-4h8l1 3H7l1-3z" />
    ),
    bottle: (
        <path d="M10 3h4l.5 2-1 1v2.5l2.5 3V20H8V11.5l2.5-3V6l-1-1 .5-2z" />
    ),
    popsicle: (
        <path d="M9 3h6a3 3 0 0 1 3 3v7a4 4 0 0 1-4 4h-1v3h-2v-3h-1a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3z" />
    ),
    kulfi: (
        <path d="M8 4h8a2 2 0 0 1 2 2v6a6 6 0 0 1-12 0V6a2 2 0 0 1 2-2zm4 14v3" />
    ),
    scoop: (
        <path d="M6 10a6 6 0 1 1 12 0v2H6v-2zm2 2h8v5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5z" />
    ),
    tub: (
        <path d="M4 9h16l-1.5 9a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7L4 9zm2-4h12l1 3H5l1-3z" />
    )
};

const layerOne = [
    { icon: "cone", top: "6%", left: "6%", rotate: -20 },
    { icon: "cup", top: "14%", left: "72%", rotate: 10 },
    { icon: "bottle", top: "32%", left: "18%", rotate: -10 },
    { icon: "popsicle", top: "46%", left: "82%", rotate: 20 },
    { icon: "kulfi", top: "62%", left: "10%", rotate: -10 },
    { icon: "scoop", top: "70%", left: "60%", rotate: 10 },
    { icon: "tub", top: "82%", left: "30%", rotate: -20 }
];

const layerTwo = [
    { icon: "cup", top: "10%", left: "40%", rotate: 0 },
    { icon: "popsicle", top: "24%", left: "8%", rotate: 10 },
    { icon: "cone", top: "30%", left: "58%", rotate: -10 },
    { icon: "scoop", top: "38%", left: "28%", rotate: 20 },
    { icon: "tub", top: "52%", left: "48%", rotate: -20 },
    { icon: "bottle", top: "64%", left: "86%", rotate: 10 },
    { icon: "kulfi", top: "78%", left: "70%", rotate: -10 },
    { icon: "cone", top: "88%", left: "12%", rotate: 20 }
];

const renderLayer = (items, sizeClass, opacityClass) =>
    items.map((item, index) => (
        <div
            key={`${sizeClass}-${item.icon}-${index}`}
            className={`pattern-item ${sizeClass} ${opacityClass}`}
            style={{
                top: item.top,
                left: item.left,
                transform: `rotate(${item.rotate}deg)`
            }}
        >
            <svg viewBox="0 0 24 24" aria-hidden="true">
                {icons[item.icon]}
            </svg>
        </div>
    ));

export default function BackgroundPattern() {
    return (
        <div className="pattern-layer" aria-hidden="true">
            {renderLayer(layerOne, "pattern-large", "pattern-faint")}
            {renderLayer(layerTwo, "pattern-small", "pattern-soft")}
        </div>
    );
}
