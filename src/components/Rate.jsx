import React from "react";

class Rate extends React.Component{
    render() {
        const { title, price, traffic, isSelected } = this.props;
        const classRate = (isSelected? "selected": "" );

        return (
                <div className={`"rate" + ${classRate}`}>
                    <div className="rate-header">
                Безлимитный {title}
            </div>
            <div className="rate-price">
            {price} руб/мес
            </div>
                <div className="rate-traffic">
                до {traffic} Мбит/сек
            </div>
            <div className="rate-footer">
            Объем включенного трафика не ограничен
            </div>
            </div>
        )
    }
}

export default Rate;