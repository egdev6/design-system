import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as V}from"./utils-DjqsqOe8.js";import{c as q}from"./index-DM07Bv7T.js";const C=q({base:"font-normal leading-[1.2] text-text-light dark:text-text-dark",variants:{font:{primary:"font-primary",secondary:"font-secondary",secondaryBold:"font-secondary-bold"},tag:{h1:"fs-h1",h2:"fs-h2",h3:"fs-h3",h4:"fs-h4",h5:"fs-h5",h6:"fs-h6"},prominent:{true:"font-bold",false:""},srOnly:{true:"srOnly",false:""}},defaultVariants:{size:void 0,color:"default",prominent:!1}}),r=({font:d="secondaryBold",tag:m="h1",prominent:N=!1,className:_,children:l,srOnly:O=!1,...S})=>{const b=m,k={className:V(C({font:d,tag:m,prominent:N,srOnly:O}),_),...S};return e.jsx(b,{...k,"aria-label":l,children:l})};try{r.displayName="Header",r.__docgenInfo={description:"",displayName:"Header",props:{children:{defaultValue:null,description:"@control text",name:"children",required:!1,type:{name:"string"}},font:{defaultValue:{value:"secondaryBold"},description:"@control select",name:"font",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondaryBold"'}]}},tag:{defaultValue:{value:"h1"},description:"@control select",name:"tag",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},prominent:{defaultValue:{value:"false"},description:"@control boolean",name:"prominent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"@control text",name:"className",required:!1,type:{name:"string"}},srOnly:{defaultValue:{value:"false"},description:"@control boolean",name:"srOnly",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Atoms/Header",component:r,parameters:{docs:{autodocs:!0}},tags:["autodocs"]},a={args:{children:"Lorem ipsum",font:"secondaryBold",tag:"h1",prominent:!1,srOnly:!1}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx(r,{tag:"h1",font:"primary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h2",font:"primary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h3",font:"primary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h4",font:"primary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h5",font:"primary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h6",font:"primary",children:"Lorem Ipsum"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx(r,{tag:"h1",font:"secondary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h2",font:"secondary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h3",font:"secondary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h4",font:"secondary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h5",font:"secondary",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h6",font:"secondary",children:"Lorem Ipsum"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx(r,{tag:"h1",font:"secondaryBold",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h2",font:"secondaryBold",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h3",font:"secondaryBold",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h4",font:"secondaryBold",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h5",font:"secondaryBold",children:"Lorem Ipsum"}),e.jsx(r,{tag:"h6",font:"secondaryBold",children:"Lorem Ipsum"})]})},t={args:{children:"Lorem ipsum",font:"secondaryBold",tag:"h1",prominent:!1,srOnly:!1,className:"text-pink dark:text-pink"}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum',
    font: 'secondaryBold',
    tag: 'h1',
    prominent: false,
    srOnly: false
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,f,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 items-center justify-center'>
      <Header tag='h1' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h2' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h3' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h4' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h5' font='primary'>
        Lorem Ipsum
      </Header>
      <Header tag='h6' font='primary'>
        Lorem Ipsum
      </Header>
    </div>
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,g,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 items-center justify-center'>
      <Header tag='h1' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h2' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h3' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h4' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h5' font='secondary'>
        Lorem Ipsum
      </Header>
      <Header tag='h6' font='secondary'>
        Lorem Ipsum
      </Header>
    </div>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var H,L,I;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 items-center justify-center'>
      <Header tag='h1' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h2' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h3' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h4' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h5' font='secondaryBold'>
        Lorem Ipsum
      </Header>
      <Header tag='h6' font='secondaryBold'>
        Lorem Ipsum
      </Header>
    </div>
}`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var j,v,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum',
    font: 'secondaryBold',
    tag: 'h1',
    prominent: false,
    srOnly: false,
    className: 'text-pink dark:text-pink'
  }
}`,...(B=(v=t.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const A=["Default","PrimaryH1","SecondaryH1","SecondaryH1Bold","CustomColor"];export{t as CustomColor,a as Default,n as PrimaryH1,o as SecondaryH1,s as SecondaryH1Bold,A as __namedExportsOrder,z as default};
