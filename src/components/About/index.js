import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import "./index.css";

function About({ lang }) {
  return (
    <div className="about py-4">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold mt-4 text-center text-uppercase d-flex align-items-center">
          <GoPrimitiveDot size="1.75rem" className="me-2" />
          {lang === "Eng" ? "About Us" : "نبذة عنا"}
          <GoPrimitiveDot size="1.75rem" className="ms-2" />
        </h1>
        <p className="text-center text-md-start mb-0 lead">
          {lang === "Eng" ? (
            <>
              Since 2013, Exclsv has been the best selling and most loved
              OpenCart theme on the market. Now at version 3, it brings many new
              and revolutionary features such as an advanced page builder with
              30+ multi-purpose modules that can be added on any page in any
              grid layout configuration, as well as the best possible
              customizable options for any area of your store. Exclsv has the
              impressive rating of 4.9 from more than 2000 ratings. Exclsv 3
              also comes with fully customizable CSS options with the added
              possibility of setting each option differently on any breakpoint.
              This breakthrough feature will greatly enhance your design skills
              and allow you to create pixel perfect layouts at any screen width.
              The new advanced Status mechanism allow you to set up modules and
              menus based on device, customer login status or customer groups.
              98% satisfaction rate within our more than 19,000 customers. The
              new Schedule feature allows you to display any module at specific
              dates in the future, or to disable any module automatically at a
              certain time and date. Imagine the possibilities and peace of
              mind...designing your promotional banners or sliders, or entire
              product modules that only show up on specific dates and are
              disabled automatically whenever you don't need them anymore. These
              are just a few of the outstanding features available in the new
              exclsv 3 framework, there are so many new options and
              possibilities that it will takes us a very long time to list them
              all.
            </>
          ) : (
            <>
              منذ عام 2013 ، كان Exclsv الأكثر مبيعًا والأكثر شهرة في السوق.
              الآن في الإصدار 3 ، فإنه يجلب العديد من ملفات ميزات ثورية مثل أداة
              إنشاء الصفحات المتقدمة مع 30+ وحدات متعددة الأغراض يمكن إضافتها
              على أي صفحة في أي شبكة تكوين التخطيط ، بالإضافة إلى أفضل ما يمكن
              تخصيصه خيارات لأي منطقة من متجرك. Exclsv لديه تصنيف مثير للإعجاب
              من 4.9 من أكثر من 2000 تصنيفات. يأتي Exclsv 3 أيضًا مع ملفات
              خيارات CSS قابلة للتخصيص مع إمكانية إضافية لتعيين كل منها الخيار
              بشكل مختلف في أي نقطة توقف. هذه الميزة الخارقة سوف يعزز بشكل كبير
              مهارات التصميم الخاصة بك ويسمح لك بإنشاء بكسل تخطيطات مثالية في أي
              عرض للشاشة. الحالة المتقدمة الجديدة آلية تسمح لك بإعداد الوحدات
              والقوائم على أساس الجهاز ، حالة تسجيل دخول العميل أو مجموعات
              العملاء. 98٪ معدل الرضا لدى أكثر من 19000 عميل. ميزة الجدولة
              الجديدة يسمح لك بعرض أي وحدة في تواريخ محددة في المستقبل ، أو
              لتعطيل أي وحدة تلقائيًا في وقت وتاريخ معينين. تخيل الاحتمالات
              وراحة البال ... لافتات ترويجية أو أشرطة التمرير ، أو وحدات المنتج
              بالكامل التي فقط تظهر في تواريخ محددة ويتم تعطيلها تلقائيًا في أي
              وقت لا تحتاجهم بعد الآن. هذه ليست سوى عدد قليل من المعلقة الميزات
              المتوفرة في إطار عمل exclsv 3 الجديد ، هناك الكثير خيارات
              وإمكانيات جديدة ستأخذ منا وقتًا طويلاً لإدراجهم جميعًا.
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default About;
