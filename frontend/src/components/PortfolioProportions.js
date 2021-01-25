import React from 'react';

const PortfolioProportions = (props) => {
  return (
      <div>
        { props.optimalPortfolioProportions.length > 0 &&

            <div>
                <h4> {props.portfolioType}<br></br>Portfolio Proportions</h4>
                { props.optimalPortfolioProportions.map((data, index) => {
                    if (data) {
                        return (
                            <div key={(data, index)}>
                                <p>{data.ticker} : {data.proportion}</p>
                            </div>	
                        )	
                    }
                    return null
                })}
            </div>
        }
      </div>
  );
}

export default PortfolioProportions