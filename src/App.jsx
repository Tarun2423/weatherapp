import './App.css';
import Chart from "react-apexcharts";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';


const marks = [
  {
    value: 0,
    label: '0°C',
  },

  {
    value: 100,
    label: '100°C',
  },
];
const marks1 = [
  {
    value: 0,
    label: '0%',
  },

  {
    value: 100,
    label: '100%',
  },
];
function valuetext(value) {
  return `${value}°C`;
}


const data = {
  series: [
    {
      name: "Weather",
      data: [23,29,58,75,33,20,73,49]
    },
  ],
  options: {
    chart: {
      height: 150,
      type: "line",
    },
    forecastDataPoints: {
      count: 10,
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    xaxis: {
      
      categories: [23,29,58,75,33,20,73,49
      ],
     
    },
    title: {
      text: "Forecast",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: 0,
      max: 80,
    },
  },
};
function App() {

  return (
    <>
      <div className='App'>
      <div className="container" style={{position:"relative"}}>
        <img className='img1' src='weather.jpg'/>
    <div class="top-left"><AddBoxIcon style={{fontSize:"28px",color:"white",marginTop:"3px"}}/><MoreHorizIcon style={{fontSize:"35px",color:"white",marginTop:"10px",marginLeft:"80px"}}/></div>
   <div class="top-right"><ToggleOffIcon style={{fontSize:"35px",color:"white",marginTop:"9px"}}/></div>
    <div class="centered"  style={{display:"flex",justifyContent:"space-evenly"}}>
    <KeyboardArrowLeftIcon style={{fontSize:"38px",color:"white",marginTop:"33px",marginRight:"30px"}}/>
    <p  style={{color:"white",fontSize:"88px",marginBottom:"100px"}}>21</p>
    <h1 style={{color:"white"}}>&#176;</h1>
    <KeyboardArrowRightIcon style={{fontSize:"38px",color:"white",marginTop:"33px",marginLeft:"30px"}}/>
    </div>
    <div className="centrebelow">
    <ThunderstormOutlinedIcon style={{fontSize:"38px",color:"gray",marginTop:"33px",marginLeft:"30px"}}/>
    <p style={{color:"gray",fontSize:"15px",fontWeight:"bold",fontStyle:"italic",marginLeft:"23px"}}>Cloudy</p>
    </div>
        </div>
      <div className="container1" style={{backgroundColor:"white"}}>
        <p  style={{fontSize:"18px",marginTop:"19px",fontWeight:"bold",fontStyle:"italic",marginLeft:"34px"}}>Welcome back Isabella! </p>
        <p style={{fontSize:"15px",marginTop:"2px",fontStyle:"italic",marginLeft:"34px"}}>Check out weather today's information</p>
        <div class="top-right"><MoreHorizIcon style={{fontSize:"35px",color:"black",marginTop:"9px",marginLeft:"480px"}}/>
        <img style={{width:"40px",height:"40px",borderRadius:"40%",objectFit:"contain",marginLeft:"26px",marginTop:"9px"}} src="profile.jpg"/>
        </div>
      <div>
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        height={250}
        width={800}
        style={{backgroundColor:"white",marginTop:"20px",width:"80%",marginLeft:"20px"}}
      />
    </div>
    <div className="boxes" style={{display:"flex",gap:"1em",marginLeft:"70px"}}>
    <div style={{height:"90px",borderRadius:"12%",width:"200px",backgroundColor:"#bad7fd",marginLeft:"22px",position:"relative"}}> 
    <div className="deg" style={{display:"flex",height:"20px"}}>
    <p style={{fontSize:"10px",fontWeight:"bold",marginLeft:"10px",marginTop:"6px",padding:"0"}}>Humidity</p>
    <WaterDropIcon style={{color:"#70bbf8",marginLeft:"99px",marginTop:"3px"}}/>
    </div>
   <p style={{padding:"0",marginLeft:"87px",marginTop:"0",height:"2px",fontWeight:"bold"}}>82%</p>

    <Box style={{position:"absolute",marginTop:"1px",marginLeft:"10px",height:"5px",width:"150px"}} >
      <Slider style={{fontSize:"1px",color:"white",marginLeft:"14px"}}
        aria-label="Always visible"
        defaultValue={60}
        getAriaValueText={valuetext}
        step={10}
        marks={marks1}
        
      />
    </Box>
    </div>
      <div style={{height:"90px",borderRadius:"12%",width:"200px",backgroundColor:"#bad7fd",marginLeft:"22px"}}>
      <p style={{fontSize:"10px",fontWeight:"bold",marginLeft:"17px",marginTop:"6px",padding:"0",height:"20px",marginBottom:"1px"}}>Wind</p>
        <SpeedIcon style={{color:"#70bbf8",fontSize:"60px",marginLeft:"70px"}}/>
        
      </div>
      <div style={{height:"90px",borderRadius:"12%",width:"200px",backgroundColor:"#bad7fd",marginLeft:"22px"}}>
      <div className="deg" style={{display:"flex",height:"20px"}}>
    <p style={{fontSize:"10px",fontWeight:"bold",marginLeft:"10px",marginTop:"6px",padding:"0"}}>Precipitaion</p>
    <ThunderstormIcon style={{color:"#70bbf8",marginLeft:"99px",marginTop:"3px"}}/>
    </div>
   <p style={{padding:"0",marginLeft:"80px",marginTop:"20px",height:"2px",fontWeight:"bold"}}>1.4cm</p>
      </div>

    </div>
    <div className="boxes" style={{display:"flex",gap:"1em",marginLeft:"70px",marginTop:"25px"}}>

<div style={{height:"90px",borderRadius:"12%",width:"200px",backgroundColor:"#bad7fd",marginLeft:"22px"}}>
<div className="deg" style={{display:"flex",height:"20px"}}>
    <p style={{fontSize:"10px",fontWeight:"bold",marginLeft:"10px",marginTop:"6px",padding:"0"}}>UV index</p>
    <WbSunnyIcon style={{color:"#70bbf8",marginLeft:"99px",marginTop:"3px"}}/>
    </div>
   <p style={{padding:"0",marginLeft:"57px",marginTop:"15px",height:"2px",fontWeight:"bold"}}>4 medium</p>
</div>
  <div style={{height:"90px",borderRadius:"12%",width:"200px",backgroundColor:"#bad7fd",marginLeft:"22px"}}>
  <div className="deg" style={{display:"flex",height:"20px"}}>
    <p style={{fontSize:"10px",fontWeight:"bold",marginLeft:"17px",marginTop:"6px",padding:"0"}}>Feels like</p>
    <DeviceThermostatOutlinedIcon style={{color:"#70bbf8",marginLeft:"100px",marginTop:"3px"}}/>
    </div>
   <p style={{padding:"0",marginLeft:"87px",marginTop:"0",height:"2px",fontWeight:"bold"}}>20&#176;</p>
    <Box style={{position:"absolute",marginTop:"1px",marginLeft:"10px",height:"5px",width:"150px"}} >
      <Slider style={{fontSize:"1px",color:"white",marginLeft:"14px"}}
        aria-label="Always visible"
        defaultValue={30}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        
      />
    </Box>
  </div>
  <div style={{height:"90px",borderRadius:"12%",width:"200px",backgroundColor:"#bad7fd",marginLeft:"22px"}}>
  <div className="deg" style={{display:"flex",height:"20px"}}>
    <p style={{fontSize:"10px",fontWeight:"bold",marginLeft:"10px",marginTop:"6px",padding:"0"}}>Chance of rain</p>
    <BeachAccessIcon style={{color:"#70bbf8",marginLeft:"80px",marginTop:"3px"}}/>
    </div>
    <p style={{padding:"0",marginLeft:"87px",marginTop:"0",height:"2px",fontWeight:"bold"}}>42%</p>
    <Box style={{position:"absolute",marginTop:"1px",marginLeft:"10px",height:"5px",width:"150px"}} >
      <Slider style={{fontSize:"1px",color:"white",marginLeft:"14px"}}
        aria-label="Always visible"
        defaultValue={60}
        getAriaValueText={valuetext}
        step={10}
        marks={marks1}
        
      />
    </Box>
  </div>

</div>
        </div>
       </div>

    </>
  )
}

export default App
