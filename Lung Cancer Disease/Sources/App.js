import logo from './logo.svg';
import './App.css';
import InfoInputs from './components/InfoInputs';
import BoxPlot from './components/Graphs/BoxPlot';
import PieChart from './components/Graphs/PieChart';
import BarChart from './components/Graphs/BarChart';
import { useEffect, useState} from 'react';

import ReactLoading from "react-loading";
import InputLabel from '@mui/material/InputLabel';
import ToggleButton from '@mui/material/ToggleButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';



function App() {

  // which mode to display.
  const [mode, setMode] = useState('Model');

  const handleMode = (event, newAlignment) => {
    console.log(newAlignment)
    setMode(newAlignment);
  };

  //setData
  const [lungcancerData, setLungCancerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = () =>{

        // it's loading now
        setIsLoading(true);
        let request = fetch('https://it12sltpe0.execute-api.us-east-1.amazonaws.com/lungcancer', {
          method: "GET",
          headers: {
              "Content-Type": 'application/json',
          }
        }).then(response => response.json())
        .then(data => {
          setLungCancerData(data);
          setIsLoading(false);
          setError(false);
        })
        .catch(err => {
          setIsLoading(false);
          setError(true);
        })
  };

  // data processing.

  const peopleWLungCancer = lungcancerData.filter(x => x.lungcancer === "2");
  const ageDistributionData = peopleWLungCancer.map(x => Math.floor(parseFloat(x.age)/365));
  // const weightDistributionData = peopleWCardio.map(x => x.weight);
  const genderDistributionData = [peopleWLungCancer.filter(x => x.gender === "2").length, peopleWLungCancer.filter(x => x.gender === "1").length]

  const SmokingDistributionData = [peopleWLungCancer.filter(x => x.smoke === "2").length, peopleWLungCancer.filter(x => x.smoke === "1").length]
  const AlcoholConsumingDistributionData = [peopleWLungCancer.filter(x => x.alco === "2").length, peopleWLungCancer.filter(x => x.alco === "1").length]



  return (
    <div className="App">
    <div style = {{display: "flex", justifyContent:"center", alignItems: "center", paddingTop: "10px"}}>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleMode}
        style={{backgroundColor: "white"}}
      >
        <ToggleButton value="Model">
          <b>Model</b>
        </ToggleButton>
        <ToggleButton value="Visualizations">
          <b>Visualizations</b>
        </ToggleButton>
      </ToggleButtonGroup>
      {(mode !== "Model" || null) &&
        <>
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10px"}}>
              <Button variant="contained" onClick={getData} > {!isLoading? <>Get Data</> : <ReactLoading type={"spin"} color="#fff" height={30} width={30} />}</Button>
              {error && <span style={{color: "red", marginLeft: "10px"}}>Error Getting Data</span>}
            </div>
          </>
      }
      </div>
      {mode === "Model"? <InfoInputs></InfoInputs>:

        <div className='GraphContainer'>
          <BoxPlot lungcancerData = {ageDistributionData} title = {"Lung Cancer Disease Age Distribution"} xtitle={"Age"}></BoxPlot>
          <PieChart lungcancerData = {genderDistributionData} title = {"Gender Distribution"} labels = {["Male", "Female"]}></PieChart>

          <BarChart labels = {["Smoke", "No Smoke"]} lungcancerData = {SmokingDistributionData} title = {"Lung Cancer Disease Smoke Distribution"} xtitle={"Smoke"} ytitle={"Count"}></BarChart>
          <BarChart labels = {["Alcohol", "No Alcohol"]} lungcancerData = {AlcoholConsumingDistributionData} title = {"Lung Cancer Disease Alcohol Consumption Distribution"} xtitle={"Alcohol"} ytitle={"Count"}></BarChart>
        </div>
      }

    </div>
  );
}

export default App;
