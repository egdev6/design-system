import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as l}from"./Icon-em2dNRM2.js";import{T as w}from"./Text-D4ZtmrC5.js";import{u as gr}from"./useRipple-D4b-6ygl.js";import{c as H}from"./utils-DjqsqOe8.js";import{r as p}from"./index-CdUicJsP.js";import{c as Xe}from"./index-3UDGtr2f.js";import"./DynamicIcon-BWy5wOA2.js";import"./iframe-DPow0h_B.js";import"./index-DM07Bv7T.js";import"./_commonjsHelpers-CqkleIqs.js";const fr=Xe(["relative overflow-hidden flex py-2 justify-between max-w-full","border-2 transition-all duration-200"],{variants:{variant:{regular:["bg-gray-light-500","border-gray-light-500","dark:bg-gray-dark-600","dark:border-gray-dark-600"],underlined:["bg-transparent","border-gray-light-500","dark:bg-transparent","dark:border-gray-dark-600"],line:["bg-transparent","border-t-transparent","border-l-transparent","border-r-transparent","!rounded-none","border-b-gray-light-500","dark:border-b-gray-dark-600"],bordered:["bg-gray-light-500","border-gray-light-600","dark:bg-gray-dark-600","dark:border-gray-dark-500"]},rounded:{true:"rounded-full",false:"rounded-md"},size:{sm:"h-12 px-2 fs-small tablet:fs-small-tablet",md:"h-14 px-4 fs-base tablet:fs-base-tablet",lg:"h-16 px-4 fs-h6 tablet:fs-h6-tablet"},state:{default:"",focused:"outline-offset-2 dark:outline-white outline-secondary outline-2",focusedRegular:"hover:bg-gray-light-600 hover:border-gray-light-600 dark:hover:bg-gray-dark-500 dark:hover:border-gray-dark-500",focusedUnderlined:"hover:border-gray-light-600 dark:hover:border-gray-dark-500",focusedLine:"hover:border-b-gray-light-600 dark:hover:border-b-gray-dark-500",focusedBordered:"hover:bg-gray-light-600 dark:hover:bg-gray-dark-500"},focused:{true:"outline-offset-2 dark:outline-white outline-secondary outline-2",false:""}},defaultVariants:{variant:"regular",rounded:!1,size:"md",state:"default"}}),br=Xe(["absolute w-auto transition-all duration-200 text-text-light dark:text-text-dark pt-[2px]"],{variants:{size:{sm:"left-2 fs-small tablet:fs-small-tablet",md:"left-4 fs-base tablet:fs-base-tablet",lg:"left-4 fs-h6 tablet:fs-h6-tablet"},state:{default:"top-[50%] translate-y-[-50%]",focusedSm:"top-1 fs-small font-secondary-bold",focusedMd:"top-1.5 fs-small font-secondary-bold",focusedLg:"top-2 fs-small font-secondary-bold",hasValueSm:"top-1 fs-small font-secondary-bold",hasValueMd:"top-1.5 fs-small font-secondary-bold",hasValueLg:"top-2 fs-small font-secondary-bold"}},defaultVariants:{size:"md",state:"default"}}),_=t=>Array.isArray(t)?t.join(" "):t,vr=({ref:t,setHasValue:s})=>e.jsxs("div",{className:"absolute right-2 top-0 bottom-0 flex flex-col justify-center items-center gap-[2px] z-10",children:[e.jsx("button",{role:"button","aria-label":"Increase value",className:"bg-gray-light-500 hover:bg-gray-light-700 dark:bg-gray-dark-500 dark:hover:bg-gray-dark-400 rounded-t-sm px-1 cursor-pointer outline-offset-0 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1",onClick:()=>{if(t.current){const i=parseFloat(t.current.value!==""?t.current.value:"0");t.current.value=(i+1).toString(),s(!!t.current.value)}},children:e.jsx(l,{name:"chevron-up",color:"text-text-light",colorDark:"dark:text-text-dark",size:16})}),e.jsx("button",{role:"button","aria-label":"Decrease value",className:"bg-gray-light-500 hover:bg-gray-light-700 dark:bg-gray-dark-500 dark:hover:bg-gray-dark-400 rounded-b-sm px-1 cursor-pointer outline-offset-0 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1",onClick:()=>{if(t.current){const i=parseFloat(t.current.value!==""?t.current.value:"0");t.current.value=(i-1).toString(),s(!!t.current.value)}},children:e.jsx(l,{name:"chevron-down",color:"text-text-light",colorDark:"dark:text-text-dark",size:16})})]}),xr=({showPassword:t,setShowPassword:s})=>e.jsx("button",{role:"button","aria-label":t?"Hide password":"Show password",className:"absolute right-2 top-0 bottom-0 flex items-center justify-center z-10",onClick:()=>s(!t),children:e.jsx(l,{name:t?"eye-off":"eye",color:"text-text-light",colorDark:"dark:text-text-dark",size:20})}),r=({rounded:t=!1,size:s="md",label:i,placeholder:P,id:d,type:o="text",variant:c="regular",className:Ye,startContent:C,endContent:z,isFullWidth:Ze=!1,hint:a,onFocus:V,onBlur:S,onKeyDown:T,onChange:E,value:er,defaultValue:rr,disabled:D=!1,ariaDescribedBy:ar,ariaLabelledBy:tr,...nr})=>{const[R,U]=p.useState(!1),[sr,q]=p.useState(!1),[A,lr]=p.useState(!1),B=p.useRef(null),u=p.useRef(null);gr(B),p.useEffect(()=>{u.current&&(u.current.type=A?"text":"password")},[A]);const ir=n=>{U(!0),V==null||V(n)},or=n=>{U(!1),q(!!n.target.value),S==null||S(n)},dr=n=>{if(["number","tel"].includes(o)){const cr=["Backspace","Tab","ArrowLeft","ArrowRight","Delete","Enter","Home","End","."],mr=/^[0-9]$/.test(n.key);!cr.includes(n.key)&&!mr&&n.preventDefault(),n.key==="."&&n.currentTarget.value.includes(".")&&n.preventDefault()}T==null||T(n)},ur=n=>{q(!!n.target.value),E==null||E(n,n.target.value)},pr=n=>{switch(n){case"error":return e.jsx(l,{name:"circle-alert",color:"text-red-500",colorDark:"dark:text-red-500",size:16});case"warning":return e.jsx(l,{name:"triangle-alert",color:"text-yellow",colorDark:"dark:text-yellow",size:16});case"success":return e.jsx(l,{name:"circle-check",color:"text-green",colorDark:"dark:text-green",size:16});default:return e.jsx(l,{name:"info",color:"text-gray-light-700",colorDark:"dark:text-gray-dark-300",size:16})}};return e.jsxs("div",{className:`flex flex-col gap-2${o==="hidden"?" hidden":""}`,children:[e.jsxs("div",{ref:B,className:H(fr({size:s,rounded:t,variant:c,state:R?"default":c==="regular"?"focusedRegular":c==="underlined"?"focusedUnderlined":c==="line"?"focusedLine":c==="bordered"?"focusedBordered":"default",focused:R}),Ze?"w-full":"w-auto",i?"items-end":"items-center",(a==null?void 0:a.type)==="error"&&"!border-red-500 dark:!border-red-500",(a==null?void 0:a.type)==="warning"&&"!border-yellow dark:!border-yellow",(a==null?void 0:a.type)==="success"&&"!border-green dark:!border-green",D&&"pointer-events-none opacity-60",Ye),onClick:()=>{var n;return document.activeElement!==u.current&&o!=="number"&&o!=="password"&&((n=u.current)==null?void 0:n.focus())},children:[!C&&!z&&e.jsx("label",{id:`${d}-label`,htmlFor:d,className:H(br({size:s,state:R||sr||P?s==="sm"?"focusedSm":s==="md"?"focusedMd":s==="lg"?"focusedLg":"default":"default"})),children:i}),e.jsxs("div",{className:"flex w-full justify-between gap-4",children:[C&&C,e.jsx("input",{...nr,ref:u,id:d,type:o,placeholder:P,disabled:D,"aria-disabled":D,"aria-invalid":(a==null?void 0:a.type)==="error"?"true":"false","aria-describedby":_(ar||(a!=null&&a.message?`${d}-hint`:void 0)),"aria-labelledby":_(tr||(i?`${d}-label`:void 0)),className:"flex-1 outline-none text-text-light dark:text-text-dark placeholder:text-secondary-light dark:placeholder:text-secondary-dark border-none",onFocus:ir,onBlur:or,onKeyDown:dr,onChange:ur,value:er,defaultValue:rr}),o==="number"&&e.jsx(vr,{ref:u,setHasValue:q}),o==="password"&&e.jsx(xr,{showPassword:A,setShowPassword:lr}),z&&z]})]}),(a==null?void 0:a.message)&&e.jsxs("div",{id:`${d}-hint`,className:"py-0.5 flex items-center gap-2",children:[pr(a==null?void 0:a.type),e.jsx("span",{className:H("fs-small tablet:fs-small-tablet",(a==null?void 0:a.type)==="info"?"text-gray-light-700 dark:text-gray-dark-300":(a==null?void 0:a.type)==="warning"?"text-yellow dark:text-yellow-400":(a==null?void 0:a.type)==="error"?"text-red-500 dark:text-red-500":(a==null?void 0:a.type)==="success"?"text-green dark:text-green-400":"text-gray-light-700 dark:text-gray-dark-300"),children:a.message})]})]})};try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{size:{defaultValue:{value:"md"},description:`@control select
@defaultValue md`,name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},variant:{defaultValue:{value:"regular"},description:`@control select
@defaultValue regular`,name:"variant",required:!1,type:{name:'"regular" | "line" | "underlined" | "bordered" | null'}},rounded:{defaultValue:{value:"false"},description:`@control boolean
@defaultValue false`,name:"rounded",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"@control text",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:{value:"text"},description:`@control select
@defaultValue text`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"hidden"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},label:{defaultValue:null,description:"@control text",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`@control boolean
@defaultValue false`,name:"disabled",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:{value:"false"},description:`@control boolean
@defaultValue false`,name:"isFullWidth",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"@control text",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"@control text",name:"className",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"@control object",name:"hint",required:!1,type:{name:'{ message: string; type: "info" | "error" | "warning" | "success"; }'}},startContent:{defaultValue:null,description:"",name:"startContent",required:!1,type:{name:"ReactNode"}},endContent:{defaultValue:null,description:"",name:"endContent",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((e: ChangeEvent<Element>, value: string) => void) & ChangeEventHandler<HTMLInputElement>)"}},ariaDescribedBy:{defaultValue:null,description:"",name:"ariaDescribedBy",required:!1,type:{name:"string | string[]"}},ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!1,type:{name:"string | string[]"}}}}}catch{}const Sr={title:"Atoms/Input",component:r,parameters:{docs:{autodocs:!0,description:{component:`## DESCRIPTION
The Input component is a versatile form element that allows users to enter text or other data.
It supports various input types, styles, and configurations to suit different use cases.
It can be used for text, email, password, number inputs, and more.
The component also supports features like labels, placeholders, hints, and different visual styles.
It can be customized with rounded corners, different sizes, and variants such as regular, underlined, line, and bordered.
Additionally, it can handle controlled and uncontrolled values, making it flexible for both simple and complex forms.
It also supports start and end content, allowing for additional elements like icons or text to be displayed alongside the input.
The Input component is designed to be accessible and user-friendly, providing a consistent experience across different devices and screen sizes.
It can be easily integrated into forms and other UI components, making it a fundamental building block for web applications.

## DEPENDENCIES
- Icon: For displaying icons within the input.
- Text: For displaying labels and hints.`}}},tags:["autodocs"]},N={args:{id:"input",label:"Lorem Ipsum",placeholder:"",type:"text",variant:"regular",rounded:!1,className:"",size:"md",disabled:!1,isFullWidth:!1}},m={parameters:{docs:{source:{language:"tsx",code:`
import { useState, type ChangeEvent } from 'react';
import Input from './Input';
      
const ControlledInput = () => {
  const [value, setValue] = useState('Controlled Value');

  const handleChange = (e: ChangeEvent<HTMLInputElement>, value) => {
    setValue(value);
    console.log(value);
  }
  
  return (
    <Input
      id='controlled-input'
      label='Controlled Input'
      value={value}
      onChange={handleChange}
      variant='regular'
      size='md'
    />
  );
}
`}}},render:()=>e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(r,{id:"input1",label:"Lorem Ipsum",variant:"regular",size:"md"})})},g={parameters:{docs:{source:{language:"tsx",code:`
import { useState, type ChangeEvent } from 'react';
import Input from './Input';
      
const UncontrolledInput = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    console.log(value);
  };

  return (
    <Input
      id='controlled-input'
      label='Controlled Input'
      defaultValue={value}
      onChange={handleChange}
      variant='regular'
      size='md'
    />
  );
}
`}}},render:()=>e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(r,{id:"input2",label:"Lorem Ipsum",variant:"regular",size:"md"})})},f={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{id:"input3",label:"Lorem Ipsum",variant:"regular",size:"sm"}),e.jsx(r,{id:"input4",label:"Lorem Ipsum",variant:"regular",size:"md"}),e.jsx(r,{id:"input5",label:"Lorem Ipsum",variant:"regular",size:"lg"})]})},b={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{id:"input6",label:"Lorem Ipsum",variant:"underlined",size:"sm"}),e.jsx(r,{id:"input7",label:"Lorem Ipsum",variant:"underlined",size:"md"}),e.jsx(r,{id:"input8",label:"Lorem Ipsum",variant:"underlined",size:"lg"})]})},v={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{id:"input9",label:"Lorem Ipsum",variant:"line",size:"sm"}),e.jsx(r,{id:"input10",label:"Lorem Ipsum",variant:"line",size:"md"}),e.jsx(r,{id:"input11",label:"Lorem Ipsum",variant:"line",size:"lg"})]})},x={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{id:"input12",label:"Lorem Ipsum",variant:"bordered",size:"sm"}),e.jsx(r,{id:"input13",label:"Lorem Ipsum",variant:"bordered",size:"md"}),e.jsx(r,{id:"input14",label:"Lorem Ipsum",variant:"bordered",size:"lg"})]})},y={render:()=>e.jsxs("div",{className:"flex flex-col justify-center gap-4",children:[e.jsx(r,{id:"input15",label:"Lorem Ipsum",variant:"regular",rounded:!0}),e.jsx(r,{id:"input16",label:"Lorem Ipsum",variant:"underlined",rounded:!0}),e.jsx(r,{id:"input17",label:"Lorem Ipsum",variant:"line",rounded:!0}),e.jsx(r,{id:"input18",label:"Lorem Ipsum",variant:"bordered",rounded:!0})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col justify-center gap-4",children:[e.jsx(r,{id:"input19",label:"Lorem Ipsum",variant:"regular",type:"number"}),e.jsx(r,{id:"input20",label:"Lorem Ipsum",variant:"underlined",type:"number"}),e.jsx(r,{id:"input21",label:"Lorem Ipsum",variant:"line",type:"number"}),e.jsx(r,{id:"input22",label:"Lorem Ipsum",variant:"bordered",type:"number"})]})},I={render:()=>e.jsxs("div",{className:"flex flex-col justify-center gap-4",children:[e.jsx(r,{id:"input23",label:"Lorem Ipsum",variant:"regular",type:"password"}),e.jsx(r,{id:"input24",label:"Lorem Ipsum",variant:"underlined",type:"password"}),e.jsx(r,{id:"input25",label:"Lorem Ipsum",variant:"line",type:"password"}),e.jsx(r,{id:"input26",label:"Lorem Ipsum",variant:"bordered",type:"password"})]})},k={render:()=>e.jsxs("div",{className:"flex flex-col justify-center gap-4",children:[e.jsx(r,{id:"input27",label:"Lorem Ipsum",variant:"regular",hint:{type:"error",message:"Lorem ipsum"}}),e.jsx(r,{id:"input28",label:"Lorem Ipsum",variant:"regular",hint:{type:"warning",message:"Lorem ipsum"}}),e.jsx(r,{id:"input29",label:"Lorem Ipsum",variant:"regular",hint:{type:"success",message:"Lorem ipsum"}}),e.jsx(r,{id:"input30",label:"Lorem Ipsum",variant:"regular",hint:{type:"info",message:"Lorem ipsum"}})]})},L={render:()=>e.jsxs("div",{className:"flex flex-col justify-center items-center gap-4",children:[e.jsx(r,{id:"input31",label:"Lorem Ipsum",variant:"regular",disabled:!0}),e.jsx(r,{id:"input32",label:"Lorem Ipsum",variant:"underlined",disabled:!0}),e.jsx(r,{id:"input33",label:"Lorem Ipsum",variant:"line",disabled:!0}),e.jsx(r,{id:"input34",label:"Lorem Ipsum",variant:"bordered",disabled:!0})]})},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{id:"input35",placeholder:"Placeholder",variant:"regular",startContent:e.jsx(w,{tag:"p",className:"pt-[2px]",children:"Start"}),endContent:e.jsx(w,{tag:"p",className:"pt-[2px]",children:"End"})}),e.jsx(r,{id:"input36",type:"email",placeholder:"Placeholder",startContent:e.jsx(l,{name:"mail",color:"text-text-light",colorDark:"dark:text-text-dark"}),endContent:e.jsx(w,{tag:"p",className:"pt-[2px]",children:"@gmail.com"})}),e.jsx(r,{id:"input36",type:"url",placeholder:"Placeholder",startContent:e.jsx(w,{tag:"p",className:"pt-[2px]",children:"https://"})})]})};var F,M,$;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: 'input',
    label: 'Lorem Ipsum',
    placeholder: '',
    type: 'text',
    variant: 'regular',
    rounded: false,
    className: '',
    size: 'md',
    disabled: false,
    isFullWidth: false
  }
}`,...($=(M=N.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var W,O,G,J,K;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`
import { useState, type ChangeEvent } from 'react';
import Input from './Input';
      
const ControlledInput = () => {
  const [value, setValue] = useState('Controlled Value');

  const handleChange = (e: ChangeEvent<HTMLInputElement>, value) => {
    setValue(value);
    console.log(value);
  }
  
  return (
    <Input
      id='controlled-input'
      label='Controlled Input'
      value={value}
      onChange={handleChange}
      variant='regular'
      size='md'
    />
  );
}
\`
      }
    }
  },
  render: () => <div className='flex items-center gap-4'>
      <Input id='input1' label='Lorem Ipsum' variant='regular' size='md' />
    </div>
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source},description:{story:"- **Controlled Input**: The value of the input is managed by React state. Changes to the input value are handled through an `onChange` event, allowing for immediate updates and validation.",...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: \`
import { useState, type ChangeEvent } from 'react';
import Input from './Input';
      
const UncontrolledInput = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    console.log(value);
  };

  return (
    <Input
      id='controlled-input'
      label='Controlled Input'
      defaultValue={value}
      onChange={handleChange}
      variant='regular'
      size='md'
    />
  );
}
\`
      }
    }
  },
  render: () => <div className='flex items-center gap-4'>
      <Input id='input2' label='Lorem Ipsum' variant='regular' size='md' />
    </div>
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"- **Uncontrolled Input**: The input value is not managed by React state. Instead, it uses a `defaultValue` prop to set the initial value, and changes are logged through an `onChange` event.",...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var re,ae,te,ne,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Input id='input3' label='Lorem Ipsum' variant='regular' size='sm' />
      <Input id='input4' label='Lorem Ipsum' variant='regular' size='md' />
      <Input id='input5' label='Lorem Ipsum' variant='regular' size='lg' />
    </div>
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"- A standard input field with a solid background.",...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var le,ie,oe,de,ue;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Input id='input6' label='Lorem Ipsum' variant='underlined' size='sm' />
      <Input id='input7' label='Lorem Ipsum' variant='underlined' size='md' />
      <Input id='input8' label='Lorem Ipsum' variant='underlined' size='lg' />
    </div>
}`,...(oe=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:`- A variant with an underlined style, suitable for minimalistic designs.
- ⚠️ This variant uses a transparent background by default. To ensure proper visibility, place it inside a container with a solid or plain background.`,...(ue=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};var pe,ce,me,ge,fe;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Input id='input9' label='Lorem Ipsum' variant='line' size='sm' />
      <Input id='input10' label='Lorem Ipsum' variant='line' size='md' />
      <Input id='input11' label='Lorem Ipsum' variant='line' size='lg' />
    </div>
}`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source},description:{story:`- A variant with a line style, providing a clean and modern look.
- ⚠️ This variant uses a transparent background by default. To ensure proper visibility, place it inside a container with a solid or plain background.`,...(fe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:fe.description}}};var be,ve,xe,ye,he;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className='flex items-center gap-4'>
      <Input id='input12' label='Lorem Ipsum' variant='bordered' size='sm' />
      <Input id='input13' label='Lorem Ipsum' variant='bordered' size='md' />
      <Input id='input14' label='Lorem Ipsum' variant='bordered' size='lg' />
    </div>
}`,...(xe=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:xe.source},description:{story:"- A bordered variant that provides a distinct outline around the input field.",...(he=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:he.description}}};var Ie,ke,Le,je,we;y.parameters={...y.parameters,docs:{...(Ie=y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col justify-center gap-4'>
      <Input id='input15' label='Lorem Ipsum' variant='regular' rounded={true} />
      <Input id='input16' label='Lorem Ipsum' variant='underlined' rounded={true} />
      <Input id='input17' label='Lorem Ipsum' variant='line' rounded={true} />
      <Input id='input18' label='Lorem Ipsum' variant='bordered' rounded={true} />
    </div>
}`,...(Le=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:Le.source},description:{story:`- A variant with rounded corners for a softer appearance.
- This variant can be applied to any of the input styles (regular, underlined, line, bordered).`,...(we=(je=y.parameters)==null?void 0:je.docs)==null?void 0:we.description}}};var Ne,Ce,ze,Ve,Se;h.parameters={...h.parameters,docs:{...(Ne=h.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col justify-center gap-4'>
      <Input id='input19' label='Lorem Ipsum' variant='regular' type='number' />
      <Input id='input20' label='Lorem Ipsum' variant='underlined' type='number' />
      <Input id='input21' label='Lorem Ipsum' variant='line' type='number' />
      <Input id='input22' label='Lorem Ipsum' variant='bordered' type='number' />
    </div>
}`,...(ze=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source},description:{story:"- Input fields for different types of data, such as text, email, number, and password.",...(Se=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:Se.description}}};var Te,Ee,De,Re,qe;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col justify-center gap-4'>
      <Input id='input23' label='Lorem Ipsum' variant='regular' type='password' />
      <Input id='input24' label='Lorem Ipsum' variant='underlined' type='password' />
      <Input id='input25' label='Lorem Ipsum' variant='line' type='password' />
      <Input id='input26' label='Lorem Ipsum' variant='bordered' type='password' />
    </div>
}`,...(De=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:De.source},description:{story:"- Input fields specifically for email addresses, ensuring proper validation and formatting.",...(qe=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:qe.description}}};var Ae,He,Pe,Ue,Be;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col justify-center gap-4'>
      <Input id='input27' label='Lorem Ipsum' variant='regular' hint={{
      type: 'error',
      message: 'Lorem ipsum'
    }} />
      <Input id='input28' label='Lorem Ipsum' variant='regular' hint={{
      type: 'warning',
      message: 'Lorem ipsum'
    }} />
      <Input id='input29' label='Lorem Ipsum' variant='regular' hint={{
      type: 'success',
      message: 'Lorem ipsum'
    }} />
      <Input id='input30' label='Lorem Ipsum' variant='regular' hint={{
      type: 'info',
      message: 'Lorem ipsum'
    }} />
    </div>
}`,...(Pe=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Pe.source},description:{story:`- Input fields with hints to provide additional context or instructions to the user.
- Hints can be styled based on their type (error, warning, success, info).
- ⚠️ This variant uses a transparent background by default. To ensure proper visibility, place it inside a container with a solid or plain background.`,...(Be=(Ue=k.parameters)==null?void 0:Ue.docs)==null?void 0:Be.description}}};var _e,Fe,Me,$e,We;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col justify-center items-center gap-4'>
      <Input id='input31' label='Lorem Ipsum' variant='regular' disabled={true} />
      <Input id='input32' label='Lorem Ipsum' variant='underlined' disabled={true} />
      <Input id='input33' label='Lorem Ipsum' variant='line' disabled={true} />
      <Input id='input34' label='Lorem Ipsum' variant='bordered' disabled={true} />
    </div>
}`,...(Me=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source},description:{story:`- Disabled input fields that cannot be interacted with.
- Useful for indicating that a field is not currently available for input.`,...(We=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:We.description}}};var Oe,Ge,Je,Ke,Qe;j.parameters={...j.parameters,docs:{...(Oe=j.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4'>
      <Input id='input35' placeholder='Placeholder' variant='regular' startContent={<Text tag='p' className='pt-[2px]'>
            Start
          </Text>} endContent={<Text tag='p' className='pt-[2px]'>
            End
          </Text>} />
      <Input id='input36' type='email' placeholder='Placeholder' startContent={<Icon name='mail' color='text-text-light' colorDark='dark:text-text-dark' />} endContent={<Text tag='p' className='pt-[2px]'>
            @gmail.com
          </Text>} />
      <Input id='input36' type='url' placeholder='Placeholder' startContent={<Text tag='p' className='pt-[2px]'>
            https://
          </Text>} />
    </div>
}`,...(Je=(Ge=j.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source},description:{story:`- Input fields with additional content at the start or end, such as icons or text.
- This can enhance the usability and visual appeal of the input field.`,...(Qe=(Ke=j.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.description}}};const Tr=["Default","ControlledValue","UncontrolledValue","Regular","Underlined","Line","Bordered","Rounded","InputNumber","InputPassword","Hint","Disabled","StartAndEnd"];export{x as Bordered,m as ControlledValue,N as Default,L as Disabled,k as Hint,h as InputNumber,I as InputPassword,v as Line,f as Regular,y as Rounded,j as StartAndEnd,g as UncontrolledValue,b as Underlined,Tr as __namedExportsOrder,Sr as default};
