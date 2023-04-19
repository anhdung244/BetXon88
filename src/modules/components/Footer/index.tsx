import {Footer} from "antd/es/layout/layout";
import "./style.scss";
import FooterColumns from "./FooterColumns/footerColumns";

const footerContent = [
    {
        title: "General Info",
        content: [
            "About Us",
            "Contact Us",
            "Faq",
            "Sports",
            "Sportsbook",
            "Live Betting",
            "Virtual",
        ],
    },
    {
        title: "Casino",
        content: [
            "Top",
            "New",
            "Popular",
            "Slots",
            "Table Games",
            "Jackpots",
            "Live Casino",
            "All Games",
        ],
    },
    {
        title: "Live Casino",
        content: [
            "Top Rated",
            "Club Royale",
            "Roulette",
            "Blackjack",
            "Games Shows",
            "Baccarat & Dice",
            "Poker",
            "All Live Casino",
        ],
    },
    {
        title: "Promotions",
        content: [
            "Casino Promotions",
            "Sport Promotions",
            "Tournaments",
            "Achievements",
            "Bonus Shop",
        ],
    },
    {
        title: "Help",
        content: [
            "Help",
            "Bet Slip Check",
            "Deposites / Withdrwals",
            "Sports Results",
            "Sports Stats",
        ],
    },
];
const FooterComp = () => {
    return (
        <div>
            <div className="flex justify-between footer-content">
                {footerContent.map((item) => (
                    <FooterColumns data={item} />
                ))}
            </div>
            <div className="flex justify-between footer-content">
                <div className="flex gap-10">
                    <div className="footer-term">Affiliate program</div>
                    <div className="footer-term">Terms & conditions</div>
                    <div className="footer-term">Bonus terms & conditions</div>
                </div>
                <div className="footer-copyright">
                    Copyright © 2023 SportOdds - All Right Reserved
                </div>
            </div>
        </div>
    );
};

export default FooterComp;
