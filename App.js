import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";

const App = () => {
  const players = [
    {Symbol: "BANKNIFTY22OCT21000PE", LTP: " 20", MTM: "2,40,500",QTY:"2400" ,strategy:"Audi B1",Buy:"",Sell:"120.21"},
    {Symbol: "BANKNIFTY22OCT21000CE", LTP: " 30", MTM: "2,11,500",QTY:"2400" ,strategy:"Audi B1",Buy:"",Sell:"120"},
    {Symbol: "BANKNIFTY22OCT21000CE", LTP: " 10", MTM: "3,12,000",QTY:"2400" ,strategy:"Super 20",Buy:"",Sell:"140"},
    {Symbol: "BANKNIFTY22OCT21000PE", LTP: " 230", MTM: "-96,000",QTY:"0" ,strategy:"super20",Buy:"170",Sell:"130"},
    {Symbol: "Day'sPNL", LTP: " ", MTM: "6,68,000",QTY:"" ,strategy:"",Buy:"",Sell:""},
    {Symbol: "NetPNL", LTP: " ", MTM: "1,70,500",QTY:"ShowExpenses" ,strategy:" ",Buy:"",Sell:" "},

    

    
  ]

  const renderPlayer =(player, index,main) => {
    return(
      
      <tr key= {index}>
        <td>{player.Symbol}</td>
        <td>{player.LTP}</td>
        <td>{player.MTM}</td>
        <td>{player.QTY}</td>
        <td>{player.Strategy}</td>
        <td>{player.Buy}</td>
        <td>{player.Sell}</td>
      

      </tr>
      
      
    )
  }
  return (
    <div className="App">
   <ReactBootstrap.Table striped bordered hover>
   <thead>
    <tr>
      
      <th> Symbol</th>
      <th> LTP</th>
      <th> MTM</th>
      <th> QTY</th>
      <th> Strategy</th>
      <th> Buy</th>
      <th> Sell</th>
    </tr>
  </thead>
  
  <tbody>
    {players.map(renderPlayer)}
    
  </tbody>
  </ReactBootstrap.Table>
    </div>
  );
}

export default App;
