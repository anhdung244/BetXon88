import React from "react";
import "../style.scss";

interface FooterData {
    title: string;
    content: string[];
}
const FooterColumns: React.FC<{data: FooterData}> = ({data}) => {
    return (
        <div>
            <h3 className="footer-columns-title">{data.title}</h3>
            {data.content &&
                data.content.map((item) => (
                    <div className="footer-columns-content">
                        <img
                            src="https://pixner.net/sportsodds/sportsbet/assets/img/footer/rightarrow.png"
                            alt="test"
                            className="icon"
                        />
                        {item}
                    </div>
                ))}
        </div>
    );
};

export default FooterColumns;
