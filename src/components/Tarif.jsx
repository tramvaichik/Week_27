import React from "react";


class Tarif extends React.Component {
    render() {
        const { title, price, traffik, isSelected } = this.props;
        return (
            <div className={"tarif " + (isSelected ?
                "selected" : "")}>
                <div className="tarif-header">Безлимитный {title} </div>
                <div className="tarif-section1">{price} руб/мес </div>
                <div className="tarif-section2"> до {traffik} Мбит/сек</div>
                <div className="tarif-footer">Объем включенного трафика не ограничен</div>
                </div>
        )
    }
}

export default Tarif;