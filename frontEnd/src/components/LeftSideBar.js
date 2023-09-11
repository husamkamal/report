import React from 'react'

export default function LeftSideBar() {
  return (
    <>
<div class="right" id="right">
      <div class="top">
        <button id="menu-btn">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <div class="setting">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-cog settings-outline" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12.003 21c-.732 .001 -1.465 -.438 -1.678 -1.317a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c.886 .215 1.325 .957 1.318 1.694"></path>
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M19.001 15.5v1.5"></path>
            <path d="M19.001 21v1.5"></path>
            <path d="M22.032 17.25l-1.299 .75"></path>
            <path d="M17.27 20l-1.3 .75"></path>
            <path d="M15.97 17.25l1.3 .75"></path>
            <path d="M20.733 20l1.3 .75"></path>
         </svg>
        </div>
        <div class="theme-toggler">
          <ion-icon name="sunny-outline" class="sunny-outline active"></ion-icon>
          <ion-icon name="moon-outline"></ion-icon>
        </div>
          <div class="profile">
            <div class="info">
              <p>مرحبا <b>محمد</b></p>
              <small class="text-muted"><a href="#"> الملف الشخصي</a></small>
            </div>
            <div class="profile-photo">
              <img src="image/bohemian-man-with-his-arms-crossed.png" alt='s' />
            </div>
          </div>
      </div>
      <div class="recent-updates">
        <h2>أبرز الأحداث</h2>
        <div class="updates">
          <div class="update">
            <div class="message">
              <p><b>ِأحمد محمد</b> تم ارسال التقارير اليومية في نهاية الاسبوع الماضي</p>
              <small class="text-muted">منذ دقيقتين</small> 
            </div>
          </div>
          <div class="update">
            <div class="message">
              <p><b>ِسارة محمد</b> تم ارسال التقارير اليومية في نهاية الاسبوع الماضي</p>
              <small class="text-muted">منذ دقيقتين</small> 
            </div>
          </div>
          <div class="update">
            <div class="message">
              <p><b>ِأحمد محمد</b> تم ارسال التقارير اليومية في نهاية الاسبوع الماضي</p>
              <small class="text-muted">منذ دقيقتين</small> 
            </div>
          </div>
        <div class="update">
            <div class="message">
              <p><b>ِسارة محمد</b> تم ارسال التقارير اليومية في نهاية الاسبوع الماضي</p>
              <small class="text-muted">منذ دقيقتين</small> 
            </div>
          </div>
        </div>
      </div>
      <div class="data-analytics">
        <h2 class="text-analysis">تحليلات البيانات </h2>
      <div class="card-analysis-chart">

        <div class="canvas-con">
          <div class="canvas-con-inner">
              <canvas id="mychart" height="300px"></canvas>
          </div>
          <div id="my-legend-con" class="legend-con"></div>
      </div>
      </div>
   
      </div>
      </div>
      <div class="expot-data">
       <button class="button-pdf" id="printBtn">تصدير البيانات </button>

      </div>  
     </>
      
      )
}
