import React, {useState} from "react";
import Button from "./components/Button";
import * as img from "../img/__img__";
import "../css/style.css";

function App() {

    const [day] = useState(new Date().getDay())
    const [hour] = useState(new Date().getHours())

    const handleClock = () => {
        return day < 6 && day > 1 && hour < 18 ?
            img.clockOpen
            :
            img.clockClose
    }

    return (
        <main>
            <div className={"container"}>
                <div className={"content"}>
                    <img src={img.logo} alt={"JM Log"} className={"logo"}/>
                    <h2>
                        João & Maria Closet
                    </h2>
                    <p className={"subtitle"}>
                        Vestindo príncipes e princesas com qualidade e conforto.
                    </p>
                </div>
                <div className={"content"}>
                    <Button
                        icon={img.whatsapp}
                        description={"FALE CONOSCO"}
                        enable={true}
                        action={() => {
                            window.open(`https://wa.me/558199171584`, "__blank")
                        }}
                    />
                    <Button
                        icon={img.email}
                        description={"ENVIE UM EMAIL"}
                        enable={true}
                        action={() => {
                            window.location.href = "mailto:mjm3xavier@gmail.com";
                        }}
                    />
                    <Button
                        icon={img.website}
                        description={"ACESSE NOSSO SITE"}
                        enable={false}/>
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
        </main>
    )
}

export default App;
