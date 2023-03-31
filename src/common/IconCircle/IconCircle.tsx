import React, {ReactNode, useState} from "react";
import "./style.scss";

interface colorOptions {
    background: string;
    fill: string;
}

interface color {
    default: colorOptions;
    hover?: colorOptions;
}
interface IIconCircle {
    children: ReactNode;
    width: number;
    height: number;
    color: color;
}
const IconCircle = ({children, width, height, color}: IIconCircle) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <div
            style={{
                borderRadius: "50%",
                width: width,
                height: height,
                background:
                    isHover && color.hover
                        ? color.hover?.background
                        : color.default.background,
                border:
                    isHover && color.hover
                        ? `1px solid ${color.hover.background}`
                        : `1px solid ${color.default.fill}`,
                fill:
                    isHover && color.hover
                        ? color.hover.fill
                        : color.default.fill,
                transitionTimingFunction: "ease-in-out",
                transitionDuration: "300ms",
            }}
            className="icon-svg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

export default IconCircle;
