import React from 'react';
import Tarif from './Tarif';


const tr = [
    {title: "300",price: "300",traffik: "10" },
    {title: "450",price: "450",traffik: "50" },
    {title: "500",price: "500",traffik: "100" ,isSelected: true },
    {title: "1000",price: "1000",traffik: "200" }
]

class Trafik extends React.Component {
  render() {
    return (
         <>
                {
                    tr.map((trafic) => 
                        <Tarif title={trafic.title} price={trafic.price} traffik={trafic.traffik} isSelected={trafic.isSelected} />
                    )
            }
            </>
  );
  }
  
}

export default Trafik;
