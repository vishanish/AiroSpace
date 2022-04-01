import React, {useState, useEffect} from 'react';
import axios from 'axios';
import cnsa from '../img/cnsa.png';
import esa from '../img/esa.png';
import isa from '../img/isa.png'
import isro from '../img/isro.png'
import jaxa from '../img/jaxa.png'
import nasa from '../img/nasa.png'
import roscosmos from '../img/roscosmos.png'


const Main = (props) => {

    const [city, setCity] = useState('');
    const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);
    const [postalCode, setPostalCode] = useState("");
    const [usePic, setUsePic] = useState("");
    const [marsPic, setMarsPic] = useState("");

    console.log(process.env)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_NASA_URL}?api_key=${process.env.REACT_APP_NASA_KEY}`)
            .then(response => {
                setUsePic(response.data)
            })
            .catch((err) => console.log(err))
    },[])


    const info =(e) =>{
        e.preventDefault();
        axios.get(`${process.env.REACT_APP_WEATHER_URL}?zip=${postalCode}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
            .then(response => {
                console.log(response.data)
                setCity(response.data.name)
                setLon(response.data.coord.lon)
                setLat(response.data.coord.lat)
            })
            .catch((err) => console.log(err))

    }

    return(
        <>
            <div style ={{display:'flex', justifyContent:'space-around', padding:'15px'}}>
                <div style ={{border:'solid white', backgroundColor:'black', width:'300px', textAlign:'center'}}>
                    <p style={{color:'white'}}>PICTURE OF THE DAY</p>
                    <img src={usePic.url} height = '250px'></img>
                </div>
                <div style={{border:'solid white', padding: '10px', backgroundColor:'black', width:'300px'}}>
                    <form onSubmit = {info} style ={{textAlign:'center'}}>
                        <label style ={{color : 'white'}}>Find your Longitude and Latitude </label><br />
                        <input type = 'text' onChange = {(e) => setPostalCode(e.target.value)} value ={postalCode}></input><br />
                        <button>Submit</button>
                    </form>
                    <h1 style ={{color:'white'}}>Name: {city}</h1>
                    <h2 style ={{color:'white'}}>Longitude:{lon}</h2>
                    <h2 style ={{color:'white'}}>Latitude:{lat}</h2>
                </div>
            </div>

            <div style ={{display: 'flex', justifyContent: 'space-around', margin:'0', padding:'0'}}>
                <div style={{border: 'solid white', padding: '15px', backgroundColor: 'black', width: '400px'}}>
                    <a style ={{color:'white'}} href ='http://www.cnsa.gov.cn/english/'><h5>CHINA NATIONAL SPACE ADMINISTRATION</h5>
                        <img src ={cnsa} alt = "cnsa" height = '100px'/>
                    </a>
                    <h5 style ={{color:'white'}}><a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/China_National_Space_Administration#History'>HISTORY</a> | FOUND: April 22, 1993 | CHINA<br/>
                    Administrator: <a style ={{color:'white'}} href = 'https://en.wikipedia.org/wiki/Zhang_Kejian'> Zhang Kejian</a><br/>
                    <a style ={{color:'white'}} href='http://www.cnsa.gov.cn/english/n6465719/index.html'>Projects</a></h5>
                </div>
                <div style={{border: 'solid white', padding: '15px', backgroundColor: 'black', width: '400px'}}>
                    <a style ={{color:'white'}} href ='https://www.esa.int/'><h5>EUROPEAN SPACE AGENCY</h5>
                        <img src ={esa} alt = "esa" height = '100px'/>
                    </a>
                    <h5 style ={{color:'white'}}><a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/European_Space_Agency#History'>HISTORY</a> | FOUND: May 30, 1975 | EUROPEAN UNION<br />
                    Administrator: <a style ={{color:'white'}} href = 'https://en.wikipedia.org/wiki/Josef_Aschbacher'>Josef Aschbacher</a><br />
                    <a style ={{color:'white'}} href='https://www.esa.int/Enabling_Support/Operations/Current_and_future_missions'>Projects</a></h5>
                </div>
                <div style={{border: 'solid white', padding: '15px', backgroundColor: 'black', width: '400px'}}>
                    <a style ={{color:'white'}} href ='https://isa.ir/en'><h5>IRANIAN SPACE AGENCY</h5>
                        <img src ={isa} alt = "isa" height = '100px'/>
                    </a>
                    <h5 style ={{color:'white'}}><a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/Iranian_Space_Agency#History'>HISTORY</a> | FOUND: February 1, 2004 | IRAN<br />
                    Administrator: <a style ={{color:'white'}} href = 'https://en.wikipedia.org/wiki/Hassan_Salarieh'>Hassan Salarieh</a><br />
                    <a style ={{color:'white'}} href='https://isa.ir/en/page/102670-satellite-projects.html'>Projects</a></h5>
                </div>
            </div>

            <div style ={{display: 'flex', justifyContent: 'space-around', margin:'0', padding:'0'}}>
                <div style={{border: 'solid white', padding: '15px', margin: '15px', backgroundColor: 'black', width: '400px'}}>
                    <a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/Roscosmos'><h5>ROSCOSMOS STATE SPACE CORPORATION</h5>
                        <img src ={roscosmos} alt = "roscosmos"  height = '100px'/>
                    </a>
                    <h5 style ={{color:'white'}}><a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/Roscosmos#History'>HISTORY</a> | FOUND: February 25, 1992 | RUSSIA<br />
                    Administrator: <a style ={{color:'white'}} href = 'https://en.wikipedia.org/wiki/Dmitry_Rogozin'>Dmitry Rogozin</a><br />
                    <a style ={{color:'white'}} href='https://en.wikipedia.org/wiki/Roscosmos#Current_programs'>Projects</a></h5>
                </div>
                <div style={{border: 'solid white', padding: '15px', margin: '15px', backgroundColor: 'black', width: '400px'}}>
                    <a style ={{color:'white'}} href ='https://www.nasa.gov/'><h5>NATIONAL AERONAUTICS AND SPACE ADMINISTRATION</h5>
                        <img src ={nasa} alt = "nasa"  height = '100px'/>
                    </a>
                    <h5 style ={{color:'white'}}><a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/NASA#History'>HISTORY</a> | FOUND: July 29, 1958 | USA<br />
                    Administrator: <a style ={{color:'white'}} href = 'https://en.wikipedia.org/wiki/Bill_Nelson'>Bill Nelson</a><br />
                    <a style ={{color:'white'}} href='https://www.nasa.gov/missions'>Projects</a></h5>
                </div>
                <div style={{border: 'solid white', padding: '15px', margin: '15px', backgroundColor: 'black', width: '400px'}}>
                    <a style ={{color:'white'}} href ='https://global.jaxa.jp/'><h5>JAPAN AEROSPACE EXPLORATION AGENCY</h5>
                        <img src ={jaxa} alt = "jaxa"  height = '100px'/>
                    </a>
                    <h5 style ={{color:'white'}}><a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/JAXA#History'>HISTORY</a> | FOUND: October 1, 2003 | JAPAN<br />
                    Administrator: <a style ={{color:'white'}} href = 'https://en.wikipedia.org/wiki/Hiroshi_Yamakawa_(space_engineer)'>Hiroshi Yamakawa</a><br />
                    <a style ={{color:'white'}} href='https://global.jaxa.jp/projects/index.html'>Projects</a></h5>
                </div>
            </div>
            
            <div style ={{display: 'flex', justifyContent: 'space-around', margin:'0', padding:'0'}}>
                <div style={{border: 'solid white', padding: '15px', backgroundColor: 'black', width: '400px'}}>
                    <a style ={{color:'white'}} href ='https://www.isro.gov.in/'><h5>INDIAN SPACE RESEARCH ORGANIZATION</h5>
                        <img src ={isro} alt = "isro"  height = '100px'/>
                    </a>
                    <h5 style ={{color:'white'}}><a style ={{color:'white'}} href ='https://en.wikipedia.org/wiki/Indian_Space_Research_Organisation#History'>HISTORY</a> | FOUND: August 15, 1969 | INDIA<br />
                    Administrator: <a style ={{color:'white'}} href = 'https://en.wikipedia.org/wiki/K._Sivan'>Kailasavadivoo Sivan</a><br />
                    <a style ={{color:'white'}} href='https://www.isro.gov.in/missions'>Projects</a></h5>
                </div>
            </div>
        </>
    )
}
export default Main