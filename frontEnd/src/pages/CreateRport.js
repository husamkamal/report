import axios from 'axios';
import React, { useState } from 'react';

export default function ReportForm() {
  const [formData, setFormData] = useState({
    mainCauseOfAccident: '',
    supCauseOfAccident: '',
    reportNumber: '',
    day: '',
    hijriDate: '',
    gregorianDate: '',
    time: '',
    reportCategory: '',
    neighborhood: '',
    location: '',
    amount: '',
    gender: '',
    nationality: '',
    workplace: '',
    recipient: '',
    injuries: '',
    simple: '',
    moderate: '',
    severe: '',
    deaths: '',
    damages: '',
    responsible: '',
    parties: '',
    accidentCause: '',
    responseTime: '',
    reportDetails: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can access the form data in the `formData` state.
    // Perform any actions you need with the data here.
    console.log(formData);
    await axios.post('http://localhost:3000/api/reports',formData)
    // Optionally, you can clear the form fields after submission.
    setFormData({
      mainCauseOfAccident: '',
      supCauseOfAccident: '',
      reportNumber: '',
      day: '',
      hijriDate: '',
      gregorianDate: '',
      time: '',
      reportCategory: '',
      neighborhood: '',
      location: '',
      amount: '',
      gender: '',
      nationality: '',
      workplace: '',
      recipient: '',
      injuries: '',
      simple: '',
      moderate: '',
      severe: '',
      deaths: '',
      damages: '',
      responsible: '',
      parties: '',
      accidentCause: '',
      responseTime: '',
      reportDetails: ''
    });
  };

  return (
    <main>
      <h1 style={{ marginBottom: '1rem' }}>انشاء بلاغ</h1>
      <form onSubmit={handleSubmit} id="reportForm">
        <div>
          <label htmlFor="mainCauseOfAccident">سبب الرئيسي:</label>
          <input
            type="text"
            id="mainCauseOfAccident"
            name="mainCauseOfAccident"
            value={formData.mainCauseOfAccident}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="supCauseOfAccident">سبب الفرعي:</label>
          <input
            type="text"
            id="supCauseOfAccident"
            name="supCauseOfAccident"
            value={formData.supCauseOfAccident}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="reportNumber">رقم البلاغ:</label>
          <input
            type="number"
            id="reportNumber"
            name="reportNumber"
            value={formData.reportNumber}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="day">اليوم:</label>
          <input
            type="text"
            id="day"
            name="day"
            value={formData.day}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="hijriDate">التاريخ الهجري:</label>
          <input
            type="text"
            id="hijriDate"
            name="hijriDate"
            value={formData.hijriDate}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="gregorianDate">التاريخ الميلادي:</label>
          <input
            type="date"
            id="gregorianDate"
            name="gregorianDate"
            value={formData.gregorianDate}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="time">الوقت:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="reportCategory">تصنيف البلاغ:</label>
          <input
            type="text"
            id="reportCategory"
            name="reportCategory"
            value={formData.reportCategory}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="neighborhood">الحي:</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="location">الموقع:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="amount">المبلغ:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="gender">الجنس:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="nationality">الجنسية:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="workplace">جهة العمل:</label>
          <input
            type="text"
            id="workplace"
            name="workplace"
            value={formData.workplace}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="recipient">مستلم البلاغ:</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="injuries">عدد الإصابات:</label>
          <input
            type="number"
            id="injuries"
            name="injuries"
            value={formData.injuries}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="simple">بسيطة:</label>
          <input
            type="number"
            id="simple"
            name="simple"
            value={formData.simple}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="moderate">متوسطة:</label>
          <input
            type="number"
            id="moderate"
            name="moderate"
            value={formData.moderate}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="severe">خطيرة:</label>
          <input
            type="number"
            id="severe"
            name="severe"
            value={formData.severe}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="deaths">عدد الوفيات:</label>
          <input
            type="number"
            id="deaths"
            name="deaths"
            value={formData.deaths}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="damages">تلفيات:</label>
          <input
            type="text"
            id="damages"
            name="damages"
            value={formData.damages}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="responsible">المتسبب في التلف:</label>
          <input
            type="text"
            id="responsible"
            name="responsible"
            value={formData.responsible}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="parties">أطراف الحادث:</label>
          <input
            type="text"
            id="parties"
            name="parties"
            value={formData.parties}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="accidentCause">سبب الحادث:</label>
          <input
            type="text"
            id="accidentCause"
            name="accidentCause"
            value={formData.accidentCause}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="responseTime">زمن الاستجابة:</label>
          <input
            type="text"
            id="responseTime"
            name="responseTime"
            value={formData.responseTime}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="reportDetails">تفاصيل البلاغ:</label>
          <textarea
            id="reportDetails"
            name="reportDetails"
            value={formData.reportDetails}
            onChange={handleChange}
            required
          ></textarea><br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
