import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  // State to keep track of active dropdowns
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  // Function to toggle dropdown visibility
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <aside id="aside">
      <div className="top">
        <div className="logo">
          <img
            src="image/R-removebg-preview (2).png"
            alt="f"
            className="img-logo"
          />
        </div>
        <div className="close" id="close-btn">
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div className="sidebar">
          <Link to={"/"} className="active">
            <ion-icon name="reader-outline"></ion-icon>
            <h3>التقارير</h3>
          </Link>
          {/** Dropdown for الحوادث المرورية */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(1)} className="dropdown-btn">
              <ion-icon name="car-outline"></ion-icon>
              <h3>الحوادث المرورية</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 1 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 1 && (
              <div className="dropdown-container">
                <Link to={"/caup"} className="link">
                  انقلاب
                </Link>
                <Link to="/runOver" className="link">
                  دهس
                </Link>
                <Link to="/clash" className="link">
                  اصطدام
                </Link>
                <Link to="/trafficViolation" className="link">
                  مخالفة مرورية
                </Link>
              </div>
            )}
          </div>
          {/** Dropdown for الحرائق */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(2)} className="dropdown-btn">
              <ion-icon name="flame-outline"></ion-icon>
              <h3>الحرائق</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 2 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 2 && (
              <div className="dropdown-container">
                <Link to="/industrialFire" className="link">
                  حريق صناعي
                </Link>
                <Link to="/residentialFire" className="link">
                  حريق سكني
                </Link>
                <Link to="/containerFire" className="link">
                  حريق حاويات
                </Link>
                <Link to="/governmentBuildingsFire" className="link">
                  حريق مباني حكومية
                </Link>
                <Link to="/commercialFire" className="link">
                  حريق تجاري
                </Link>
                <Link to="/authorityPropertyFire" className="link">
                  حريق ممتلكات هيئة
                </Link>
                <Link to="/fireAlarmBell" className="link">
                  جرس إنذار حرائق
                </Link>
                <Link to="/another" className="link">
                  حرائق أخرى
                </Link>
              </div>
            )}
          </div>
          {/** Dropdown for الحوادث الجنائية */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(3)} className="dropdown-btn">
              <ion-icon name="finger-print-outline"></ion-icon>
              <h3>الحوادث الجنائية</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 3 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 3 && (
              <div className="dropdown-container">
                <Link to="/Scrimmage" className="link">
                  مشاجرة
                </Link>
                <Link to="/theft" className="link">
                  سرقة
                </Link>
                <Link to="/assault" className="link">
                  إعتداء
                </Link>
                <Link to="/killing" className="link">
                  قتل
                </Link>
                <Link to="/suicide" className="link">
                  إنتحار
                </Link>
                <Link to="/suspicion" className="link">
                  إشتباه
                </Link>
                <Link to="/runawaymaid" className="link">
                  خادمة هاربة
                </Link>
                <Link to="/theftalarmbell" className="link">
                  جرس إنذار سرقة
                </Link>
                <Link to="/Hoax" className="link">
                  بلاغ كاذب
                </Link>
                <Link to="/tamperingandsabotage" className="link">
                  عبث وتخريب
                </Link>
                <Link to="/otheraccidents" className="link">
                  حوادث أخرى
                </Link>
              </div>
            )}
          </div>
          {/** Dropdown for الحوادث الأمنية */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(4)} className="dropdown-btn">
              <ion-icon name="save-outline"></ion-icon>
              <h3>الحوادث الأمنية</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 4 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 4 && (
              <div className="dropdown-container">
                <Link to="/tothreaten" className="link">
                  تهديد
                </Link>
                <Link to="/explosivesalarm" className="link">
                  إندذار بمتفجرات
                </Link>
                <Link to="/shooting" className="link">
                  إطلاق نار
                </Link>
                <Link to="/kidnap" className="link">
                  خطف
                </Link>
                <Link to="/Blowup" className="link">
                  تفجير
                </Link>
                <Link to="/securitynotes" className="link">
                  ملاحظات أمنية
                </Link>
              </div>
            )}
          </div>
          {/** Dropdown for الخطط التدريبية */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(5)} className="dropdown-btn">
              <ion-icon name="copy-outline"></ion-icon>
              <h3>الخطط التدريبية</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 5 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 5 && (
              <div className="dropdown-container">
                <Link to="" className="link">
                  مرفق ومنشات الهيئة
                </Link>
                <Link to="" className="link">
                  فرق اطفاء
                </Link>
                <Link to="" className="link">
                  لجنة ياما
                </Link>
                <Link to="" className="link">
                  امنية
                </Link>
              </div>
            )}
          </div>
          {/** Dropdown for الأعطال العامة */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(6)} className="dropdown-btn">
              <ion-icon name="build-outline"></ion-icon>
              <h3>الأعطال العامة</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 6 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 6 && (
              <div className="dropdown-container">
                <Link to="/maintenance" className="link">
                  طلب صيانة
                </Link>
                <Link to="/Malfunction" className="link">
                  اشارة عطلانة
                </Link>
                <Link to="/Cleaning" className="link">
                  طلب نظافة
                </Link>
                <Link to="/Lighting" className="link">
                  انارة لا تعمل
                </Link>
                <Link to="/Electric" className="link">
                  التماس كهربائي
                </Link>
                {/* <Link to='/Irrigation' className="link">اخري</Link > */}
              </div>
            )}
          </div>
          {/** Dropdown for التسريبات */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(7)} className="dropdown-btn">
              <ion-icon name="hammer-outline"></ion-icon>
              <h3>التسريبات</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 7 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 7 && (
              <div className="dropdown-container">
                <Link to="/Irrigation" className="link">
                  مياه ري
                </Link>
                <Link to="/drinking" className="link">
                  مياه شرب
                </Link>
                <Link to="/Sanitation" className="link">
                  صرف صحي
                </Link>
                <Link to="/Gas" className="link">
                  غاز
                </Link>
                <Link to="/Petroleum" className="link">
                  مواد بترولية
                </Link>
                <Link to="/chemical" className="link">
                  مواد كيميائية
                </Link>
                {/* <Link to='' className="link">اخري</Link > */}
              </div>
            )}
          </div>
          {/** Dropdown for السلامة العامة */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(8)} className="dropdown-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <h3>السلامة العامة</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 8 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 8 && (
              <div className="dropdown-container">
                <Link to="/Work" className="link">
                  إصابة عمل
                </Link>
                <Link to="/Hello" className="link">
                  ملاحظة سلامة
                </Link>
                <Link to="/disagree" className="link">
                  مخالفة سلامة
                </Link>
                <Link to="/Electric" className="link">
                  التماس كهربائي
                </Link>
                <Link to="/Sinking" className="link">
                  غرق
                </Link>
                <Link to="/Poisoning" className="link">
                  تسمم
                </Link>
                <Link to="/High" className="link">
                  غلاء أسعار
                </Link>
                <Link to="/contamination" className="link">
                  تلوث طعام
                </Link>
                <Link to="/Loose" className="link">
                  ابل سائبة
                </Link>
                <Link to="/Endـofـlife" className="link">
                  مواد منتهية الصلاحية
                </Link>
              </div>
            )}
          </div>
          {/** Dropdown for المساندة */}
          <div className="dropdown">
            <button onClick={() => toggleDropdown(9)} className="dropdown-btn">
              <ion-icon name="help-buoy-outline"></ion-icon>
              <h3>المساندة</h3>
              <i
                className={`fa fa-caret-${
                  activeDropdown === 9 ? "up" : "down"
                }`}
              ></i>
            </button>
            {activeDropdown === 9 && (
              <div className="dropdown-container">
                <Link to="/Ambulance" className="link">
                  خدمة اسعافية
                </Link>
                <Link to="/Traffic" className="link">
                  مرورية
                </Link>
                <Link to="/maintenance" className="link">
                  صيانة
                </Link>
                <Link to="/criminal" className="link">
                  جنائي
                </Link>
              </div>
            )}
          </div>
          <button>

          <Link to="/hypoth">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <h3> الفرضيات </h3>
          </Link>
          </button>
          {/** Logout button */}
          <button
            onClick={() => {
              localStorage.removeItem("username");
              navigate("/login");
            }}
          >
            <ion-icon name="log-out-outline"></ion-icon>
            <h3>تسجيل خروج</h3>
          </button>
        </div>
      </div>
    </aside>
  );
}
