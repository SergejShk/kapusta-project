"use strict";(self.webpackChunkkapusta_project=self.webpackChunkkapusta_project||[]).push([[640],{3101:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(885),s=a(2791),r=a(8687),c=a(948),i=a(6871),o=a(4805),l=a.n(o),u=a(2027),p=a(7715),d=a(9697),h=a(184),m=function(){var e=(0,r.useDispatch)(),n=(0,r.useSelector)(u.n),a=(0,s.useState)(n<=0),o=(0,t.Z)(a,2),m=o[0],_=o[1],x=(0,s.useState)(0),j=(0,t.Z)(x,2),f=j[0],v=j[1],b=(0,s.useState)(!1),N=(0,t.Z)(b,2),w=N[0],S=N[1],Z=(0,i.TH)();(0,s.useEffect)((function(){v(n.toFixed(2).toString())}),[n]);var g=(0,s.useCallback)((function(n){e((0,p.X)({newBalance:Number(n)}))}),[e]);return(0,h.jsx)("div",{className:d.Z.wrapper,children:(0,h.jsxs)("div",{className:d.Z.wrapperBalance,children:[(0,h.jsx)("p",{className:d.Z.text,children:"Balance: "}),(0,h.jsxs)("div",{className:d.Z.inputWrapper,children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==Number(f)?(S(!1),g(f)):S(!0)},children:[(0,h.jsx)(c.Z,{className:d.Z.input,value:f,suffix:" UAH",thousandSeparator:" ",fixedDecimalScale:!0,allowNegative:!1,allowLeadingZeros:!1,decimalScale:2,onValueChange:function(e){var n=e.formattedValue,a=e.value;a!==f&&(_(!n>0),v(a))},placeholder:"0.00 UAH"}),(0,h.jsx)(l(),{maxWidth:1279,children:"/report"===Z.pathname?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)("button",{className:d.Z.button,children:"Confirm"})}),(0,h.jsx)(l(),{minWidth:1280,children:(0,h.jsx)("button",{className:d.Z.button,children:"Confirm"})})]}),m?(0,h.jsx)("div",{className:d.Z.tooltipArrow}):"",m?(0,h.jsxs)("div",{className:d.Z.tooltipContainment,children:[(0,h.jsx)("p",{className:d.Z.tooltipMainText,children:"Hello! To get started, enter the current balance of your account!"}),(0,h.jsx)("p",{className:d.Z.tooltipText,children:"You can't spend money until you have it :)"})]}):"",w&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:d.Z.tooltipArrow}),(0,h.jsxs)("div",{className:d.Z.tooltipContainment,children:[(0,h.jsx)("p",{className:d.Z.tooltipMainText,children:"Sorry! New balance must be greater than or equal to 1"}),(0,h.jsx)("p",{className:d.Z.tooltipText,children:"You can't spend money until you have it :)"})]})]})]})]})})}},2938:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(9601),s={wrapper:"reportLink_wrapper__45efv",text:"reportLink_text__5vLck",wrapperBalance:"reportLink_wrapperBalance__H+HYy"},r=a(184),c=function(){return(0,r.jsxs)("div",{className:s.wrapper,children:[(0,r.jsx)("svg",{className:s.icon,width:"24",height:"24",children:(0,r.jsx)("use",{href:t.Z+"#icon-arrow-back"})}),(0,r.jsx)("p",{className:s.text,children:"Main Page"})]})}},7111:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(8687),s=a(4289),r="Section_boxSection__715+A",c="Section_section__Z2PLw",i="Section_boxSectionAuth__VNkER",o="Section_sectionAuth__AF+HO",l="Section_title__SLHvV",u="Section_subtitle__JjfFG",p=a(184),d=function(e){var n=e.children,a=(0,t.useSelector)(s.v);return(0,p.jsx)("section",{className:a?i:r,children:(0,p.jsxs)("div",{className:a?o:c,children:[!a&&(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{className:l,children:"Kapu$ta"}),(0,p.jsx)("p",{className:u,children:"Smart Finance"})]}),n]})})}},9640:function(e,n,a){a.r(n),a.d(n,{default:function(){return K}});var t=a(885),s=a(2791),r=a(8687),c=a(3504),i=a(6871),o=a(9704),l=a(4805),u=a.n(l),p=a(6305),d=a(9683),h="chartBar_chartDiv__r+-Hr",m=a(184),_=function(e){var n=(0,s.useState)(),a=(0,t.Z)(n,2),r=a[0],c=a[1],i=(0,s.useState)(),o=(0,t.Z)(i,2),l=o[0],_=o[1];(0,s.useEffect)((function(){c(e.dataForChart.map((function(e){return e.description}))),_(e.dataForChart.map((function(e){return e.total})))}),[e]),p.kL.register(p.uw,p.f$,p.ZL,p.Dx,p.u,p.De);var x={labels:r,datasets:[{label:"",data:l,backgroundColor:["#FF751D","#FED9BF","#FED9BF"]}]};return(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)(u(),{maxWidth:771,children:(0,m.jsx)(d.$Q,{options:{indexAxis:"y",responsive:!0,plugins:{legend:{display:!1},title:{display:!1}},borderRadius:10,borderColor:"transparent",maxBarThickness:25,minBarThickness:25,scales:{x:{display:!0,grid:{color:"transparent",borderColor:"white",tickColor:"transparent"}},y:{display:!0,grid:{color:"white",borderColor:"white",tickColor:"transparent"}}}},data:x})}),(0,m.jsx)(u(),{minWidth:772,children:(0,m.jsx)(d.$Q,{options:{responsive:!0,plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!0,color:"white"}},borderRadius:10,maxBarThickness:38,scales:{x:{display:!0,grid:{color:"transparent",borderColor:"#F5F6FB",tickColor:"transparent"}},y:{grid:{color:"#F5F6FB",borderColor:"white",tickColor:"transparent",lineWidth:2}}}},data:x})})]})},x=a(9601),j="Expenses_wrapper__vzkk4",f="Expenses_svg__yReJc",v="Expenses_list__gesHK",b="Expenses_item__9upsH",N="Expenses_sum__n717a",w="Expenses_categorieName__2vGZz",S="Expenses_span__KolNl",Z="Expenses_warn__lvquz",g=function(e){var n=e.categories;(0,s.useEffect)((function(){if(0!==n.length){var e=n[0];i(e.transactions.transactionsData)}}),[n]);var a=(0,s.useState)([]),r=(0,t.Z)(a,2),c=r[0],i=r[1],l=(0,s.useState)(0),u=(0,t.Z)(l,2),p=u[0],d=u[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:j,children:[0===n.length&&(0,m.jsx)("h2",{className:Z,children:"You didn't enter data for this period"}),(0,m.jsx)("ul",{className:v,children:n.map((function(e,n){return(0,m.jsxs)("li",{onClick:function(){return function(e,n){i(e),d(n)}(e.transactions.transactionsData,n)},className:b,children:[(0,m.jsxs)("p",{className:N,children:[e.transactions.total," uah"]}),(0,m.jsx)("svg",{className:f,style:{fill:n===p&&" #FF751D"},children:(0,m.jsx)("use",{href:x.Z+"".concat(o.Z[e.type].icon)})}),(0,m.jsx)("span",{className:S,style:{backgroundColor:n===p&&"  #FFDAC0"}}),(0,m.jsx)("p",{className:w,children:o.Z[e.type].name})]},n)}))})]}),0!==n.length&&(0,m.jsx)(_,{dataForChart:c})]})},y=a(7111),C=a(2938),F="switcher_wrapper__jJO96",B="switcher_wrapperValue__MiuUp",k="switcher_text__zck-1",E="switcher_label__Tdx2u",A="switcher_icon__+2i5V",D=function(e){var n=e.value,a=e.onChange;return(0,m.jsxs)("div",{className:F,children:[e.label?(0,m.jsx)("p",{className:E,children:e.label}):"",(0,m.jsxs)("div",{className:B,children:[(0,m.jsx)("svg",{className:A,onClick:function(){return a(-1)},children:(0,m.jsx)("use",{href:x.Z+"#icon-arrow-left"})}),(0,m.jsx)("p",{className:k,children:n}),(0,m.jsx)("svg",{className:A,onClick:function(){return a(1)},children:(0,m.jsx)("use",{href:x.Z+"#icon-icon-right"})})]})]})},T="monthSummary_wrapper__yJGm9",H="monthSummary_wrapperExpenses__+ZE+4",M="monthSummary_wrapperIncome__IpjV8",U="monthSummary_text__Pm7ZQ",L="monthSummary_value__LThXo",R="monthSummary_expenses__hFdcZ",Y="monthSummary_income__d25e8",J=function(e){var n=e.incomes,a=e.expenses,t=0===n?"".concat(n," UAH"):"+ ".concat(n," UAH"),s=0===a?"".concat(a," UAH"):"- ".concat(a," UAH");return(0,m.jsxs)("div",{className:T,children:[(0,m.jsxs)("div",{className:H,children:[(0,m.jsx)("p",{className:U,children:"Expenses:"}),(0,m.jsx)("span",{className:"".concat(L," ").concat(R),children:s})]}),(0,m.jsxs)("div",{className:M,children:[(0,m.jsx)("p",{className:U,children:"Income:"}),(0,m.jsx)("span",{className:"".concat(L," ").concat(Y),children:t})]})]})},V=a(3101),W=a(5447),O=function(e){return e.periodData.incomes.total},z=function(e){return e.periodData.expenses.total},P=a(9697),K=function(){var e,n=(0,i.TH)(),a=(0,r.useDispatch)(),o=(0,s.useState)(new Date),l=(0,t.Z)(o,2),u=l[0],p=l[1],d=(0,s.useState)(0),h=(0,t.Z)(d,2),_=h[0],x=h[1],j=(0,r.useSelector)(O),f=(0,r.useSelector)(z),v=(0,r.useSelector)((function(e){return e.periodData.expenses.expensesData})),b=(0,r.useSelector)((function(e){return e.periodData.incomes.incomesData})),N=(0,s.useMemo)((function(){return["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]}),[]),w=(0,s.useMemo)((function(){return["expenses","incomes"]}),[]);(0,s.useEffect)((function(){a((0,W.C)("".concat(u.getFullYear(),"-").concat(("0"+(u.getMonth()+1)).slice(-2))))}),[a,u]);var S="".concat(N[u.getMonth()]," ").concat(u.getFullYear()),Z=w[_];return(0,m.jsxs)(y.Z,{children:[(0,m.jsxs)("div",{className:P.Z.BoxTabSwitch,children:[(0,m.jsx)(c.Link,{to:null!==(e=n.state)&&void 0!==e?e:"/balance",children:(0,m.jsx)(C.Z,{})}),(0,m.jsxs)("div",{className:P.Z.BoxSwitcher,children:[(0,m.jsx)(V.Z,{}),(0,m.jsx)(D,{value:S,label:"Current period",onChange:function(e){p(new Date(u.setMonth(u.getMonth()+e)))}})]})]}),(0,m.jsx)(J,{incomes:j,expenses:f}),(0,m.jsx)(D,{value:Z,onChange:function(e){var n=Math.abs(_+e)%2;x(n)}}),"expenses"===Z?(0,m.jsx)(g,{categories:v}):(0,m.jsx)(g,{categories:b})]})}},9704:function(e,n){n.Z={"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":{name:"Products",icon:"#products"},"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":{name:"Alcohol",icon:"#alcohol"},"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":{name:"Entertainment",icon:"#entertainment"},"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":{name:"Health",icon:"#health"},"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":{name:"Transport",icon:"#transport"},"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":{name:"Housing",icon:"#housing"},"\u0422\u0435\u0445\u043d\u0438\u043a\u0430":{name:"Technique",icon:"#technique"},"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":{name:"Communal, communication",icon:"#communal, communication"},"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":{name:"Sports, hobbies",icon:"#sports, hobbies"},"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":{name:"Education",icon:"#education"},"\u041f\u0440\u043e\u0447\u0435\u0435":{name:"Other",icon:"#other"},"\u0417/\u041f":{name:"Salary",icon:"#salary"},"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":{name:"additional income",icon:"#additional income"}}},9697:function(e,n){n.Z={wrapper:"balance_wrapper__i4uF2",wrapperBalance:"balance_wrapperBalance__H0yFy",text:"balance_text__UBKoi",input:"balance_input__OBgsi",button:"balance_button__2JQ1U",tooltipContainment:"balance_tooltipContainment__61ebY",tooltipArrow:"balance_tooltipArrow__SdAfy",tooltipHide:"balance_tooltipHide__D59gn",inputWrapper:"balance_inputWrapper__FMhKJ",tooltipMainText:"balance_tooltipMainText__7zeMD",tooltipText:"balance_tooltipText__QDufs",BalanceBox:"balance_BalanceBox__Z0y3F",BoxSwitcher:"balance_BoxSwitcher__yzAec",BoxTabSwitch:"balance_BoxTabSwitch__V7c7k"}}}]);
//# sourceMappingURL=640.1b13288f.chunk.js.map