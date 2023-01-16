import React from "react";
import Button from "./components/Button";
import {logo, whatsapp, email, website, clock} from "../img/__img__";
import "../css/style.css";

class App extends React.Component {
    render() {
        return (
            <main>
                <div className={"container"}>
                    <div className={"content"}>
                        <img src={logo} alt={"JM Log"} className={"logo"}/>
                        <h2 style={{ marginBottom: "4px" }}>
                            João & Maria Closet
                        </h2>
                        <p className={"subtitle"}>
                            Vestindo príncipes e princesas com qualidade e conforto.
                        </p>
                    </div>
                    <div className={"content"}>
                        <Button
                            icon={whatsapp}
                            description={"FALE CONOSCO"}
                            enable={true}
                            action={() => {
                                window.open(`https://wa.me/558199171584`, "__blank")
                            }}
                        />
                        <Button
                            icon={email}
                            description={"ENVIE UM EMAIL"}
                            enable={true}
                            action={() => {
                                window.location.href = "mailto:mjm3xavier@gmail.com";
                            }}
                        />
                        <Button
                            icon={website}
                            description={"ACESSE NOSSO SITE"}
                            enable={false}/>
                    </div>
                    <div className={"content"}>
                        <img src={clock} alt={"Ícone de relógio"} className={"clock-icon"}/>
                        <p>
                            Seg à Sex 8 às 18
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}

export default App;
