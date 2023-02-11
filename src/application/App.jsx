import React, { useState } from "react";
import Button from "../components/Button";
import GlassIcon from "../components/GlassIcon";
import "../styles/style.css";

function App() {

    const [day] = useState(new Date().getDay())
    const [hour] = useState(new Date().getHours())

    const handleClock = () => {
        return day <= 6 && day > 1 && hour < 18 ?
            "/linktree/assets/clock-open.svg"
            :
            "/linktree/assets/clock-close.svg"
    }

    return (
        <main>
            <div className={"container"}>
                <div className={"content"}>
                    <img src={"/linktree/assets/logo.svg"} alt={"JM Log"} className={"logo"} />
                    <h2>
                        Enfance Closet
                    </h2>
                    <p className={"subtitle"}>
                        Vestindo príncipes e princesas com qualidade e conforto.
                    </p>
                </div>
                <div className={"content"}>
                    <Button
                        icon={"/linktree/assets/whatsapp.svg"}
                        description={"FALE CONOSCO"}
                        enable={true}
                        action={() => {
                            window.open(`https://wa.me/558199171584`, "__blank")
                        }}
                    />
                    <Button
                        icon={"/linktree/assets/email.svg"}
                        description={"ENVIE UM EMAIL"}
                        enable={true}
                        action={() => {
                            window.location.href = "mailto:mjm3xavier@gmail.com";
                        }}
                    />
                    <Button
                        icon={"/linktree/assets/website.svg"}
                        description={"ACESSE NOSSO SITE"}
                        enable={false} />
                </div>
                <div className={"content"}>
                    <img
                        src={handleClock()}
                        alt={"Ícone de relógio"}
                        className={"clock-icon"}
                    />
                    <p>
                        Seg à Sex 8 às 18
                    </p>
                </div>
            </div>
            <GlassIcon icon={"/linktree/assets/boy.svg"} alt={"Ícone de jaqueta"} styleClass={"glass-icon jacket"} />
            <GlassIcon icon={"/linktree/assets/girl.svg"} alt={"Ícone de vestido"} styleClass={"glass-icon dress"} />
        </main>
    )
}

export default App;
