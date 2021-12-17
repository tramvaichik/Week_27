import React from 'react';

const rate = [
    { title: "300", price: "300", traffic: "10" },
    { title: "450", price: "450", traffic: "до 50 " },
    { title: "500", price: "500", traffic: "100", isSelected: true },
    { title: "1000", price: "1000", traffic: "200 " },
]

class RateList extends React.Component {
  render() {
    return (
      <>
          <div className='rate-app'>
            {
              rate.map((rate) => 
                <RateList title={rate.title} price={rate.price} traffic={rate.traffic} isSelected={rate.isSelected} />
              )
            }
</div>
      </>
    )
  }
}

export default RateList;
