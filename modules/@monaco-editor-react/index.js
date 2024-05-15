"use strict";var It=Object.create;var N=Object.defineProperty,Pt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,Lt=Object.getOwnPropertyNames,it=Object.getOwnPropertySymbols,Ht=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable;var ct=(t,e,r)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,D=(t,e)=>{for(var r in e||(e={}))st.call(e,r)&&ct(t,r,e[r]);if(it)for(var r of it(e))Wt.call(e,r)&&ct(t,r,e[r]);return t},ut=(t,e)=>Pt(t,vt(e));var _t=(t,e)=>{for(var r in e)N(t,r,{get:e[r],enumerable:!0})},ft=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let d of Lt(e))!st.call(t,d)&&d!==r&&N(t,d,{get:()=>e[d],enumerable:!(n=Ut(e,d))||n.enumerable});return t};var k=(t,e,r)=>(r=t!=null?It(Ht(t)):{},ft(e||!t||!t.__esModule?N(r,"default",{value:t,enumerable:!0}):r,t)),Nt=t=>ft(N({},"__esModule",{value:!0}),t);var $t={};_t($t,{DiffEditor:()=>Rt,Editor:()=>nt,default:()=>Zt,loader:()=>Tt.default,useMonaco:()=>Dt});module.exports=Nt($t);var Tt=k(require("@monaco-editor/loader"));var gt=require("react");var l=k(require("react")),xt=k(require("@monaco-editor/loader"));var Mt=require("react");var q=k(require("react"));var zt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},A=zt;var pt=k(require("react"));var Ft={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},dt=Ft;function jt({children:t}){return pt.default.createElement("div",{style:dt.container},t)}var lt=jt;var at=lt;function At({width:t,height:e,isEditorReady:r,loading:n,_ref:d,className:y,wrapperProps:g}){return q.default.createElement("section",D({style:ut(D({},A.wrapper),{width:t,height:e})},g),!r&&q.default.createElement(at,null,n),q.default.createElement("div",{ref:d,style:D(D({},A.fullWidth),!r&&A.hide),className:y}))}var mt=At;var B=(0,Mt.memo)(mt);var Et=require("react");function qt(t){(0,Et.useEffect)(t,[])}var U=qt;var G=require("react");function Bt(t,e,r=!0){let n=(0,G.useRef)(!0);(0,G.useEffect)(n.current||!r?()=>{n.current=!1}:t,e)}var E=Bt;function w(){}function O(t,e,r,n){return Gt(t,n)||Jt(t,e,r,n)}function Gt(t,e){return t.editor.getModel(yt(t,e))}function Jt(t,e,r,n){return t.editor.createModel(e,r,n?yt(t,n):void 0)}function yt(t,e){return t.Uri.parse(e)}function Kt({original:t,modified:e,language:r,originalLanguage:n,modifiedLanguage:d,originalModelPath:y,modifiedModelPath:g,keepCurrentOriginalModel:S=!1,keepCurrentModifiedModel:Q=!1,theme:h="light",loading:z="Loading...",options:R={},height:X="100%",width:Y="100%",className:Z,wrapperProps:$={},beforeMount:V=w,onMount:tt=w}){let[x,v]=(0,l.useState)(!1),[T,a]=(0,l.useState)(!0),m=(0,l.useRef)(null),p=(0,l.useRef)(null),L=(0,l.useRef)(null),M=(0,l.useRef)(tt),c=(0,l.useRef)(V),I=(0,l.useRef)(!1);U(()=>{let o=xt.default.init();return o.then(s=>(p.current=s)&&a(!1)).catch(s=>(s==null?void 0:s.type)!=="cancelation"&&console.error("Monaco initialization: error:",s)),()=>m.current?H():o.cancel()}),E(()=>{if(m.current&&p.current){let o=m.current.getOriginalEditor(),s=O(p.current,t||"",n||r||"text",y||"");s!==o.getModel()&&o.setModel(s)}},[y],x),E(()=>{if(m.current&&p.current){let o=m.current.getModifiedEditor(),s=O(p.current,e||"",d||r||"text",g||"");s!==o.getModel()&&o.setModel(s)}},[g],x),E(()=>{let o=m.current.getModifiedEditor();o.getOption(p.current.editor.EditorOption.readOnly)?o.setValue(e||""):e!==o.getValue()&&(o.executeEdits("",[{range:o.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),o.pushUndoStop())},[e],x),E(()=>{var o,s;(s=(o=m.current)==null?void 0:o.getModel())==null||s.original.setValue(t||"")},[t],x),E(()=>{let{original:o,modified:s}=m.current.getModel();p.current.editor.setModelLanguage(o,n||r||"text"),p.current.editor.setModelLanguage(s,d||r||"text")},[r,n,d],x),E(()=>{var o;(o=p.current)==null||o.editor.setTheme(h)},[h],x),E(()=>{var o;(o=m.current)==null||o.updateOptions(R)},[R],x);let F=(0,l.useCallback)(()=>{var b;if(!p.current)return;c.current(p.current);let o=O(p.current,t||"",n||r||"text",y||""),s=O(p.current,e||"",d||r||"text",g||"");(b=m.current)==null||b.setModel({original:o,modified:s})},[r,e,d,t,n,y,g]),j=(0,l.useCallback)(()=>{var o;!I.current&&L.current&&(m.current=p.current.editor.createDiffEditor(L.current,D({automaticLayout:!0},R)),F(),(o=p.current)==null||o.editor.setTheme(h),v(!0),I.current=!0)},[R,h,F]);(0,l.useEffect)(()=>{x&&M.current(m.current,p.current)},[x]),(0,l.useEffect)(()=>{!T&&!x&&j()},[T,x,j]);function H(){var s,b,P,W;let o=(s=m.current)==null?void 0:s.getModel();S||(b=o==null?void 0:o.original)==null||b.dispose(),Q||(P=o==null?void 0:o.modified)==null||P.dispose(),(W=m.current)==null||W.dispose()}return l.default.createElement(B,{width:Y,height:X,isEditorReady:x,loading:z,_ref:L,className:Z,wrapperProps:$})}var Ct=Kt;var Rt=(0,gt.memo)(Ct);var ht=require("react"),ot=k(require("@monaco-editor/loader"));function Qt(){let[t,e]=(0,ht.useState)(ot.default.__getMonacoInstance());return U(()=>{let r;return t||(r=ot.default.init(),r.then(n=>{e(n)})),()=>r==null?void 0:r.cancel()}),t}var Dt=Qt;var Ot=require("react");var f=k(require("react")),bt=k(require("@monaco-editor/loader"));var J=require("react");function Xt(t){let e=(0,J.useRef)();return(0,J.useEffect)(()=>{e.current=t},[t]),e.current}var St=Xt;var K=new Map;function Yt({defaultValue:t,defaultLanguage:e,defaultPath:r,value:n,language:d,path:y,theme:g="light",line:S,loading:Q="Loading...",options:h={},overrideServices:z={},saveViewState:R=!0,keepCurrentModel:X=!1,width:Y="100%",height:Z="100%",className:$,wrapperProps:V={},beforeMount:tt=w,onMount:x=w,onChange:v,onValidate:T=w}){let[a,m]=(0,f.useState)(!1),[p,L]=(0,f.useState)(!0),M=(0,f.useRef)(null),c=(0,f.useRef)(null),I=(0,f.useRef)(null),F=(0,f.useRef)(x),j=(0,f.useRef)(tt),H=(0,f.useRef)(),o=(0,f.useRef)(n),s=St(y),b=(0,f.useRef)(!1),P=(0,f.useRef)(!1);U(()=>{let i=bt.default.init();return i.then(u=>(M.current=u)&&L(!1)).catch(u=>(u==null?void 0:u.type)!=="cancelation"&&console.error("Monaco initialization: error:",u)),()=>c.current?wt():i.cancel()}),E(()=>{var u,C,_,et;let i=O(M.current,t||n||"",e||d||"",y||r||"");i!==((u=c.current)==null?void 0:u.getModel())&&(R&&K.set(s,(C=c.current)==null?void 0:C.saveViewState()),(_=c.current)==null||_.setModel(i),R&&((et=c.current)==null||et.restoreViewState(K.get(y))))},[y],a),E(()=>{var i;(i=c.current)==null||i.updateOptions(h)},[h],a),E(()=>{!c.current||n===void 0||(c.current.getOption(M.current.editor.EditorOption.readOnly)?c.current.setValue(n):n!==c.current.getValue()&&(P.current=!0,c.current.executeEdits("",[{range:c.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),c.current.pushUndoStop(),P.current=!1))},[n],a),E(()=>{var u,C;let i=(u=c.current)==null?void 0:u.getModel();i&&d&&((C=M.current)==null||C.editor.setModelLanguage(i,d))},[d],a),E(()=>{var i;S!==void 0&&((i=c.current)==null||i.revealLine(S))},[S],a),E(()=>{var i;(i=M.current)==null||i.editor.setTheme(g)},[g],a);let W=(0,f.useCallback)(()=>{var i;if(!(!I.current||!M.current)&&!b.current){j.current(M.current);let u=y||r,C=O(M.current,n||t||"",e||d||"",u||"");c.current=(i=M.current)==null?void 0:i.editor.create(I.current,D({model:C,automaticLayout:!0},h),z),R&&c.current.restoreViewState(K.get(u)),M.current.editor.setTheme(g),S!==void 0&&c.current.revealLine(S),m(!0),b.current=!0}},[t,e,r,n,d,y,h,z,R,g,S]);(0,f.useEffect)(()=>{a&&F.current(c.current,M.current)},[a]),(0,f.useEffect)(()=>{!p&&!a&&W()},[p,a,W]),o.current=n,(0,f.useEffect)(()=>{var i,u;a&&v&&((i=H.current)==null||i.dispose(),H.current=(u=c.current)==null?void 0:u.onDidChangeModelContent(C=>{P.current||v(c.current.getValue(),C)}))},[a,v]),(0,f.useEffect)(()=>{if(a){let i=M.current.editor.onDidChangeMarkers(u=>{var _;let C=(_=c.current.getModel())==null?void 0:_.uri;if(C&&u.find(rt=>rt.path===C.path)){let rt=M.current.editor.getModelMarkers({resource:C});T==null||T(rt)}});return()=>{i==null||i.dispose()}}return()=>{}},[a,T]);function wt(){var i,u;(i=H.current)==null||i.dispose(),X?R&&K.set(y,c.current.saveViewState()):(u=c.current.getModel())==null||u.dispose(),c.current.dispose()}return f.default.createElement(B,{width:Y,height:Z,isEditorReady:a,loading:Q,_ref:I,className:$,wrapperProps:V})}var kt=Yt;var nt=(0,Ot.memo)(kt);var Zt=nt;0&&(module.exports={DiffEditor,Editor,loader,useMonaco});
//# sourceMappingURL=index.js.map