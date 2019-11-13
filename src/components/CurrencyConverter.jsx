import React from 'react'

const withCurrency = (BaseComponent) => (
    class Currency extends Component {
        state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0
        }
        render() {
            const currencyData = [
                { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
                { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
                { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
                { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
                { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
            ]
            const currencyOptions = currencyData.map((currency, index) => (
                <option key={index} value={index}>
                    {currency.name}
                </option>
            ))
            return (
                <div>

                    <select value={this.state.selectedCurrency}>
                        <option value="Select Currency">Select Currency</option>
                        {currencyOptions}
                    </select>

                    <div>
                        <button>+</button>
                        <button>-</button>
                    </div>

                    <BaseComponent 
                    currency={currencyData[this.state.selectedCurrency]}
                    amount={this.state.amount}/>

                </div>
            )
        }
    }
)