import React from 'react';
import './forCalculator.css';

class Calculator extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      elevator: false,
      material: '2.5',
      amount: 0,
      floor: 0,
      res: 0
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //testing for button 'reset' 
    this.resInputs = this.resInputs.bind(this);

    //testing button 'calc'
    this.calculate = this.calculate.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const value = target.name === 'elevator' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  //sum to pay
  cashToPay(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    alert(` 
     поверх = ${this.state.floor}
     кількість мат = ${this.state.amount}
     матеріал по ${this.state.material}
     ліфт = ${this.state.elevator}
     sum to pay = ${this.state.res}
     
     `);
  }


  //testing for button 'reset'
  resInputs() {
    this.setState({
      floor: 0,
      elevator: false,
      amount: 0,
      material: 2.5,
      res: 0
    });
      
  
  }

  calculate() {
    const { floor, material, amount } = this.state;
    const res = amount * floor * material;
    this.setState({ res });
  }


  render() {
    return(
      <div className='container'>
        <div className='page'>
          <table className='viewCalc'>
            <thead>
              <tr>
                <th colSpan='2'>Калькулятор на вантажні послуги (будівельні матеріали)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="building-mat">будівельні матеріали</label>
              </td>
              <td>
                <select 
                  name="material"
                  value={this.state.material}
                  onChange={this.handleChange} >
                    <option defaultValue value={2.5}  >мішки до 30кг (2,5грн/пов)</option>
                    <option value={3}>мішки більше 30кг (3грн/пов)</option>
                    <option value={4}>буд. сміття (до 30кг) (4грн/пов)</option>
                    <option value={3.5}>гіпсокартон (3,5грн/пов)</option>
                    <option value={3}>плитка (3грн/пов)</option>
                    <option value={5}>профіль 3 м (5грн/пов)</option>
                    <option value={6}>профіль 4 м (6грн/пов)</option>
                    <option value={2.5}>Ламінат-паркет (2.5/пов)</option>
                  </select>
                  <button onClick={this.handleSubmit}>alert</button> 
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="amount">кількість матеріалів (одиниць)</label>
                </td>
                <td>
                  <input 
                    type="number"
                    name='amount'
                    value={this.state.amount ? this.state.amount : ''}
                    onChange={this.handleChange}
                     />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="floor">на який поверх несемо</label>
                  <br /><label htmlFor="elevator">якщо у вас є ліфт,
                  <br />поставте галочку(рахується як 3 поверхи)</label>
                  <input 
                    type="checkbox"
                    name='elevator'
                    checked={this.state.elevator}
                    onChange={this.handleChange} />
                </td>
                <td>
                  <input type="number"
                    name='floor'
                    value={this.state.floor ? this.state.floor : ''}
                    onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                <button name='calculate' onClick={this.calculate}>порахувати</button>
                </td>
                <td>
                  <button name='reset' onClick={this.resInputs}>скинути</button>
                </td>
              </tr>
            </tbody>
          </table>
          
           <h3>сума до оплати  {this.state.res} грн</h3>
        </div>
      </div>
    );
  }
};

export default Calculator;
