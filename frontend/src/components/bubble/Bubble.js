import React from "react"
import Individual from "./Individual";
function Bubble(props){
    return (
        <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
                <Individual
                    title = "42"
                    subtitle = "élèves"
                />
                <Individual
                    title = "12"
                    subtitle = "Interrogations non signées"
                />
                <Individual
                    title = "69"
                    subtitle = "Evénements à venir"
                />
            </div>
        </section>
    );
}
export default Bubble;