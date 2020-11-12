import React from "react"
import Item from "./item";

let size = 1;// nombres d'éléments à afficher au début //todo

function List(props){
    const items_data = [//todo
        {
            icon : props.icon,
            date : "21 Octobre",
            title : "Tester cette fonction",
            link : "www.google.com"
        },
        {
            icon : props.icon,
            date : "25 Octobre",
            title : "Teste 123",
            link : "www.google.com"
        },
        {
            icon : props.icon,
            date : "69 Octobre",
            title : "Teste 3",
            link : "www.google.com"
        }
    ];

    let items =  items_data.slice(0, size)
    return(
        <div className="card events-card">
            <header className="card-header">
                <p className="card-header-title">
                    {props.title}
                </p>
                <a href="#" className="card-header-icon" aria-label="more options">
                                    <span className="icon">
                                        <a className="button is-small is-primary" href="#"><i
                                            className="fa fa-plus"></i></a>{/*todo*/}
                                    </span>
                </a>
            </header>
            <div className="card-table">
                <div className="content">
                    <table className="table is-fullwidth is-striped">
                        <tbody>
                        {items.map(item =>{
                                return <Item
                                    icon = {props.icon}
                                    date = {item.date}
                                    title = {item.title}
                                    link = {item.link}
                                />;
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
            <footer className="card-footer">
                <a className="card-footer-item" onClick={ ()=>{size =size +1;}}>Tout Voir</a>
            </footer>
        </div>
    );
}
export default List