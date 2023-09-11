import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from '../loading';
export default function Content({endpoint, title}) {
    const [data, setData] = useState([]); // State to store your data
    const [modalData, setModalData] = useState(null); // State to handle modal data display
    const [loading, setLoading] = useState(true); // State to handle modal data display
  
    useEffect(()=>{
      setLoading(true)
        const getReports = async () =>{
            const response = await axios.get(`http://localhost:3000/api/reports/cause/${endpoint}`)
            setData(response.data)
            setLoading(false)
        }
        getReports()
    }, [endpoint])
    // Function to create table rows
    const createTableRow = (rowData) => {
        return (
            <tr
            key={rowData.id}
            onClick={() => displayModal(rowData)} // Handle row click
            className="table-row"
            >
          <td>{rowData.reportNumber}</td>
          <td>{rowData.day}</td>
          <td>{rowData.hijriDate}</td>
          <td>{rowData.gregorianDate}</td>
          <td>{rowData.time}</td>
          <td>{rowData.reportCategory}</td>
          <td>{rowData.neighborhood}</td>
          <td>{rowData.location}</td>
        </tr>
      );
    };
    
    // Function to display the modal with data
    const displayModal = (rowData) => {
        setModalData(rowData);
    };
    
    // Function to close the modal
    const closeModal = () => {
        setModalData(null);
    };

    const renderModalData = () => {
        if (!modalData) {
          return null;
        }
      
        const labels = {
          reportNumber: 'رقم البلاغ',
          day: 'اليوم',
          hijriDate: 'التاريخ الهجري',
          gregorianDate: 'التاريخ الميلادي',
          time: 'الوقت',
          reportCategory: 'تصنيف البلاغ',
          neighborhood: 'الحي',
          location: 'الموقع',
          amount: 'المبلغ',
          gender: 'الجنس',
          nationality: 'الجنسية',
          workplace: 'جهة العمل',
          recipient: 'مستلم البلاغ',
          injuries: 'عدد الإصابات',
          simple: 'بسيطة',
          moderate: 'متوسطة',
          severe: 'خطيرة',
          deaths: 'عدد الوفيات',
          damages: 'تلفيات',
          responsible: 'المتسبب في التلف',
          parties: 'أطراف الحادث',
          accidentCause: 'سبب الحادث',
          mainCauseOfAccident: 'سبب الحادث الرئيسي',
          supCauseOfAccident: 'سبب الحادث الفرعي',
          responseTime: 'زمن الاستجابة',
          reportDetails: 'تفاصيل البلاغ',
        };
      
        return Object.keys(modalData).map((key) => {
          if (key !== 'id' && key !== 'updatedAt' && key !== 'createdAt') {
            return (
              <p key={key}>
                <span>{labels[key] || key}:</span> {modalData[key]}
              </p>
            );
          }
          return null;
        });
      };
    useEffect(() => {
        const closeOnWindowClick = (event) => {
          if (event.target === document.getElementById('modal')) {
            closeModal();
          }
        };
    
        window.addEventListener('click', closeOnWindowClick);
    
        return () => {
          window.removeEventListener('click', closeOnWindowClick);
        };
      }, []);
      if(loading) return <LoadingSpinner loading={loading} />
      console.log(modalData)
    return (
      <main id="main">
        <h1>{title}</h1>
        <table>
          <thead>
            <tr>
              <th>رقم البلاغ</th>
              <th>اليوم</th>
              <th>التاريخ الهجري</th>
              <th>التاريخ الميلادي</th>
              <th>الوقت</th>
              <th>تصنيف البلاغ</th>
              <th>الحي</th>
              <th>الموقع</th>
            </tr>
          </thead>
          <tbody>
            {/* Map your data array to create table rows */}
            {data.length> 0 ?data?.map((rowData) => createTableRow(rowData)): <p >لا يوجد بيانات</p>}
          </tbody>
        </table>
  
        {/* Modal structure */}
        {modalData && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>بيانات البلاغ</h2>
              <div id="modal-data">
                {/* Render modal data here */}
                {renderModalData()}
              </div>
            </div>
          </div>
        )}
      </main>
      )
}
