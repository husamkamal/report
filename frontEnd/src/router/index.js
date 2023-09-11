import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./root";
import DashboardMain from "../pages/DashboardMain";
import Content from "../components/content";
import ReportForm from "../pages/CreateRport";
import Login from "../pages/login";
import HypothesisTable from "../pages/hypothes";
import CreateHypoth from "../pages/CreateHypoth";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element : <DashboardMain />
        },
        {
            path: '/caup',
            element: <Content title={'انقلاب'} endpoint={'انقلاب'} />  
        },
        {
            path: '/runOver',
            element: <Content title={'دهس'} endpoint={'دهس'} />  
        },
        {
            path: '/clash',
            element: <Content title={'اصدام'} endpoint={'اصدام'} />  
        },
        {
            path: '/trafficViolation',
            element: <Content title={'مخالفه مروريه'} endpoint={'مخالفه'} />  
        },
        {
            path: '/createReport',
            element: <ReportForm />  
        },
        {
            path: '/another',
            element: <Content title={'حرائق اخرى'} endpoint={'أخرى'} />  
        }
        ,
        {
            path: '/authorityPropertyFire',
            element: <Content title={'حريق ممتلكات هيئه'} endpoint={'هيئه'} />  
        }
        ,
        {
            path: '/commercialFire',
            element: <Content title={'حريق تجاري  '} endpoint={'تجاري'} />  
        }
        ,
        {
            path: '/containerFire',
            element: <Content title={'حريق الحاويات   '} endpoint={'حاويات'} />  
        }
        ,
        {
            path: '/fireAlarmBell',
            element: <Content title={'جرس إنذار الحريق    '} endpoint={'إنذار'} />  
        }
        ,
        {
            path: '/governmentBuildingsFire',
            element: <Content title={'حريق ممتلكات حكوميه'} endpoint={'حكوميه'} />  
        }
        ,
        {
            path: '/residentialFire',
            element: <Content title={' حريق سكني '} endpoint={'سكني'} />  
        },
        {
            path: '/industrialFire',
            element: <Content title={' حريق صناعي '} endpoint={'صناعي'} />  
        },
        {
            path: '/Scrimmage',
            element: <Content title={'  مشاجره '} endpoint={'مشاجره'} />  
        }
        ,
        {
            path: '/theft',
            element: <Content title={'  سرقه '} endpoint={'سرقه'} />  
        }
        ,
        {
            path: '/assault',
            element: <Content title={' إعتداء '} endpoint={'إعتداء'} />  
        }
        ,
        {
            path: '/killing',
            element: <Content title={' قتل '} endpoint={'قتل'} />  
        }
        ,
        {
            path: '/suicide',
            element: <Content title={' إنتحار '} endpoint={'إنتحار'} />  
        }
        ,
        {
            path: '/suspicion',
            element: <Content title={' إشتباه '} endpoint={'إشتباه'} />  
        }
        ,
        {
            path: '/runawaymaid',
            element: <Content title={'خادمه هاربه'} endpoint={'خادم'} />  
        }
        ,
        {
            path: '/theftalarmbell',
            element: <Content title={' جرس انذار سرقه'} endpoint={'سرق'} />  
        }
        ,
        {
            path: '/Hoax',
            element: <Content title={'   بلاغ كاذب'} endpoint={' كاذب'} />  
        }
        ,
        {
            path: '/tamperingandsabotage',
            element: <Content title={'   عبث و تخريب '} endpoint={' عبث '} />  
        }
        ,
        {
            path: '/otheraccidents',
            element: <Content title={'   حوادث اخرى   '} endpoint={' حوادث  '} />  
        }
        ,
        {
            path: '/tothreaten',
            element: <Content title={'   تهديد    '} endpoint={' تهديد  '} />  
        }
        ,
        {
            path: '/explosivesalarm',
            element: <Content title={'   إنذار بمتفجرات    '} endpoint={'  بمتفجرات  '} />  
        }
        ,
        {
            path: '/shooting',
            element: <Content title={'    إطلاق نار    '} endpoint={'  إطلاق   '} />  
        }
        ,
        {
            path: '/kidnap',    
            element: <Content title={'     خطف    '} endpoint={'  خطف   '} />  
        }
        ,
        {
            path: '/Blowup',
            element: <Content title={'     تفجير    '} endpoint={'  تفجير   '} />  
        }
        ,
        {
            path: '/securitynotes',
            element: <Content title={'     ملاحظات أمنيه    '} endpoint={'  ملاحظات    '} />  
        }
        ,
        {
            path: '/maintenance',
            element: <Content title={'      طلب صيانه    '} endpoint={'  صيان    '} />  
        }
        ,
        {
            path: '/Malfunction',
            element: <Content title={'      اشاره عطلانه     '} endpoint={'  اشار    '} />  
        }
        ,
        {
            path: '/Cleaning',
            element: <Content title={'      طلب نظافه      '} endpoint={' نظاف    '} />  
        }
        ,
        {
            path: '/Lighting',
            element: <Content title={'      اناره لا تعمل        '} endpoint={' انار    '} />  
        }
        ,
        {
            path: '/Electric',
            element: <Content title={'التماس كهربائي'} endpoint={' التماس    '} />  
        }
        ,
        {
            path: '/Irrigation',
            element: <Content title={' مياه ري'} endpoint={'  ري    '} />  
        }
        ,
        {
            path: '/drinking',
            element: <Content title={' مياه شرب'} endpoint={'   شرب    '} />  
        }
        ,
        {
            path: '/Sanitation',
            element: <Content title={'  صرف صحي'} endpoint={'   صرف     '} />  
        }
        ,
        {
            path: '/Gas',
            element: <Content title={'   غاز '} endpoint={'   غاز      '} />  
        }
        ,
        {
            path: '/Petroleum',
            element: <Content title={'   مواد بتروليه '} endpoint={'    بترولي     '} />  
        }
        ,
        {
            path: '/chemical',
            element: <Content title={'   مواد كيماويه '} endpoint={'   كيماوي      '} />  
        }
        ,
        {
            path: '/Work',
            element: <Content title={'   إصابه عمل  '} endpoint={'     عمل      '} />  
        }
        ,
        {
            path: '/Hello',
            element: <Content title={'سلامه سلامه'} endpoint={'    سلام      '} />  
        }
        ,
        {
            path: '/disagree',
            element: <Content title={'مخالفه سلامه'} endpoint={'   مخالف      '} />  
        }
        ,
        {
            path: '/Sinking',
            element: <Content title={' غرق'} endpoint={'    غرق      '} />  
        }
        ,
        {
            path: '/Poisoning',
            element: <Content title={' تسمم'} endpoint={'    تسمم      '} />  
        }
        ,
        {
            path: '/High',
            element: <Content title={' غلاء أسعار'} endpoint={'    سعار      '} />  
        }
        ,
        {
            path: '/contamination',
            element: <Content title={'  تلوث طعام'} endpoint={'    تلوث        '} />  
        }
        ,
        {
            path: '/Loose',
            element: <Content title={'ابل سائبه  '} endpoint={'    ابل         '} />  
        }
        ,
        {
            path: '/Endـofـlife',
            element: <Content title={' مواد منتهيه الصلاحيه  '} endpoint={'  صلاحي        '} />  
        }
        ,
        {
            path: '/Ambulance',
            element: <Content title={'خدمه اسعافيه'} endpoint={' سعافي        '} />  
        }
        ,
        {
            path: '/Traffic',
            element: <Content title={' مروريه'} endpoint={' مروري        '} />  
        }
        ,
        {
            path: '/maintenance',
            element: <Content title={' صيانه'} endpoint={' صيانه        '} />  
        }
        ,
        {
            path: '/criminal',
            element: <Content title={' جنائي'} endpoint={' جنائي        '} />  
        }
        ,
        {
            path: '/hypoth',
            element: <HypothesisTable />  
        }
        ,
        {
            path: '/createHypoth',
            element: <CreateHypoth />  
        }
      ]
    },
    {
        path:'/login',
        element: <Login/>
    }
  ]);
  export default router