import { ImageResponse } from "next/og";
export const alt = "Builders of Authority — Rehan’s integration work report";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
 return new ImageResponse(<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",background:"#111310",color:"#f1f2e9",padding:70,fontFamily:"sans-serif"}}><div style={{display:"flex",fontSize:24,color:"#d0f178"}}>SYED MUHAMMAD REHAN · SYSTEMS AUTOMATION</div><div style={{display:"flex",flexDirection:"column",gap:20}}><div style={{display:"flex",flexDirection:"column",fontSize:72,fontWeight:700,letterSpacing:-3}}><span>The workflow.</span><span>The evidence behind it.</span></div><div style={{fontSize:28,color:"#a4aa9d"}}>Builders of Authority · Integration work report</div></div><div style={{fontSize:23,color:"#d0f178"}}>Architecture / Reconciliation / Delivery</div></div>, size);
}
