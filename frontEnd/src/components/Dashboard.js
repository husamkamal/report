import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import LoadingSpinner from '../loading';

const Dashboard = () => {

  const [data, setData] = useState([]); // State to store your data
  const [month, setMonth] = useState(''); // State to store your data
  const [day, setDay] = useState(''); // State to store your data
  const [loading, setLoading] = useState(true); // State to handle modal data display
  const [year, setYear] = useState('')
  const [yearData, setYearData]= useState([])
  const [monthData, setMonthData]= useState([])
  const [dayData, setDayData]= useState([])
  useEffect(() => {
    const first = yearData.filter((e)=>{
      return e.mainCauseOfAccident.includes('مروري')
    })
    const second = yearData.filter((e)=>{
      return e.mainCauseOfAccident.includes('جنا')
    })
    const third = yearData.filter((e)=>{
      return e.mainCauseOfAccident.includes('حرا')
    })
    const fourth = yearData.filter((e)=>{
      return e.mainCauseOfAccident.includes('مسان')
    })
    const five = yearData.filter((e)=>{
      return e.mainCauseOfAccident.includes('تسريب')
    })
    const six = yearData.filter((e)=>{
      return e.mainCauseOfAccident.includes('مني')
    })
    // Define data for the pie chart
    const pieChartData = {
      labels: ['المرورية', 'الجنائية', 'الحرائق', 'المساندة', 'التسريبات', 'الامنية'],
      datasets: [
        {
          label: 'بلاغ',
          data: [first.length, second.length,third.length, fourth.length, five.length, six.length],
          borderWidth: 1,
          backgroundColor: [
            "#579aac",
            "#7dcfe8",
            "#b3dfe7",
            "#a2d6c4",
            "#36A2EB",
            "#3e8787",
          ],
        },
      ],
    };

    // Create the pie chart
    const pieChart = new Chart(document.getElementById('pieChart'), {
      type: 'pie',
      data: pieChartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Define data for the doughnut chart
    const firstMonth = monthData.filter((e)=>{
      return e.mainCauseOfAccident.includes('مروري')
    })
    const secondMonth = monthData.filter((e)=>{
      return e.mainCauseOfAccident.includes('جنا')
    })
    const thirdMonth = monthData.filter((e)=>{
      return e.mainCauseOfAccident.includes('حرا')
    })
    const fourthMonth = monthData.filter((e)=>{
      return e.mainCauseOfAccident.includes('مسان')
    })
    const fiveMonth = monthData.filter((e)=>{
      return e.mainCauseOfAccident.includes('تسريب')
    })
    const sixMonth = monthData.filter((e)=>{
      return e.mainCauseOfAccident.includes('مني')
    })
    const doughnutChartData = {
      labels: ['المرورية', 'الجنائية', 'الحرائق', 'المساندة', 'التسريبات', 'الامنية'],
            datasets: [
        {
          label: 'بلاغ',
          data: [firstMonth.length, secondMonth.length,thirdMonth.length, fourthMonth.length, fiveMonth.length, sixMonth.length],
          borderWidth: 1,
          backgroundColor: [
            "#579aac",
            "#36A2EB",
            "#b3dfe7",
            "#a2d6c4",
            "#7dcfe8",
            "#3e8787",
          ],
        },
      ],
    };

    // Create the doughnut chart
    const doughnutChart = new Chart(document.getElementById('donugtChart'), {
      type: 'doughnut',
      data: doughnutChartData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy charts when the component unmounts
    return () => {
      pieChart.destroy();
      doughnutChart.destroy();
    };
  }, [monthData, yearData]); // Empty dependency array to run the effect only once

  useEffect(()=>{
    setLoading(true)
      const getReports = async () =>{
          const response = await axios.get(`http://localhost:3000/api/reports/year/${year.length?year: moment().format("Y")}`)
          console.log(response, "year")
          setData(response.data)
          setYearData(response.data)
          setLoading(false)
      }
      getReports()
  }, [year])
  useEffect(()=>{
    setLoading(true)
    console.log(new Date().getMonth(),"month")
      const getReports = async () =>{
          const response = await axios.get(`http://localhost:3000/api/reports/month/${year.length?year: moment().format("Y")}/${month?month:moment().format("M")}`)
          setMonthData(response.data)
          console.log(response, "month")
          setLoading(false)
      }
      getReports()
  }, [month])
  useEffect(()=>{
    setLoading(true)
    // console.log(year.length?year: new Date().getFullYear(),"year",month.length?month: new Date().getMonth(),"month",day.length?day: new Date().getDay(),33)
      const getReports = async () =>{
          const response = await axios.get(`http://localhost:3000/api/reports/day/${year?year: moment().format("Y")}/${month?month:moment().format("M")}/${day?day: moment().format("D")}`)
          setData(response.data)
          setDayData(response.data)
          setLoading(false)
          console.log(response, "day")
      }
      getReports()
  }, [day])
  const handleDate = (e)=>{
    const date = moment(e.target.value)
    setYear(date.format("YYYY"))
    setMonth(date.format("M"))
    setDay(date.format("D"))
  }
  loading &&  (<LoadingSpinner loading={loading} />)
  return (
    <main id="main">
     <h2>الصفحة الرئيسية </h2>
     <div className="date"> <input type="date" onChange={handleDate} /> </div>
     <div className="date" style={{color:"#fff", marginRight:"1rem"}}>  <Link style={{color:"#fff"}} to={'createReport'} >انشاء بلاغ</Link> </div>
     <div className="date" style={{color:"#fff", marginRight:"1rem"}}>  <Link style={{color:"#fff"}} to={'createHypoth'} >انشاء فرضيه</Link> </div>
      <div className="analysis-boxex">
      <div className="total-analysis-year">
        <div className="details">
            <h5>الاحصائيات السنوية</h5>
            <h6>{yearData.length}</h6>
          </div>
          <div className="icon">
            <ion-icon name="analytics-outline" className="analytics-outline"></ion-icon>
          </div>
      </div>

      <div className="total-analysis-month">
        <div className="details">
            <h5>الاحصائيات الشهرية</h5>
            <h6>{monthData.length}</h6>
          </div>
          <div className="icon">
            <ion-icon name="bar-chart-outline" className="bar-chart-outline"></ion-icon>
        
        </div>
      </div>
      <div className="total-analysis-day">
        <div className="details">
            <h5>الاحصائيات اليومية</h5>
            <h6>{dayData.length}</h6>
          </div>
          <div className="icon">
            <ion-icon name="calendar-number-outline" className="calendar-number-outline"></ion-icon>
                  </div>
      </div>
      </div>
      <h2 className="text-analysis">البلاغات الرئيسية</h2>

       <div className="key-communications"> 
      
       <div className="oilChart">
      <h2 className="text-analysis-one">احصائيات البلاغات الرئيسية السنوية</h2>
      <div className="chart">
       <canvas id="pieChart" width="300" height="300"></canvas>
      </div>
       </div> 
          
       <div className="oilChart">
        <h2 className="text-analysis-one">احصائيات البلاغات الرئيسية الشهرية</h2>
        <div className="chart">
          <canvas id="donugtChart" width="300" height="300"></canvas>
         </div>
       </div> 
      </div> 


     <div>
      <h2 className="text-analysis">الاحصائيات العامة لعام 2023</h2>
     </div>
      <div className="chartBox">
        <canvas id="myChart"></canvas>
      </div>
        
    </main>
  );
};

export default Dashboard;
