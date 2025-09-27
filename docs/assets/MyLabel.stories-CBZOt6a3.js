import{j as p}from"./jsx-runtime-D_zvdyIk.js";const l=({label:t,size:s="normal",allCaps:n=!1,color:c="text-primary",fontColor:i})=>p.jsxs("span",{className:`${s} ${c}`,style:{color:i},children:[" ",n?t.toUpperCase():t]});l.__docgenInfo={description:`allCaps: boolean;\r
color: 'text-primary' | 'text-secondary' | 'text-tertiary',\r
fontColor?: string, texto del span`,methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all text",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Predefined text color classes",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Custom font color"}}};const d={title:"UI/labels/MyLabel",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps",allCaps:!0}},r={args:{label:"Secondary",color:"text-secondary"}},o={args:{label:"Custom Color",fontColor:"#5517ac"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'All Caps',
    allCaps: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    color: 'text-secondary'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color',
    fontColor: '#5517ac'
  }
}`,...o.parameters?.docs?.source}}};const u=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,o as CustomColor,r as Secondary,u as __namedExportsOrder,d as default};
