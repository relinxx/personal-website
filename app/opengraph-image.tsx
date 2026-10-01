import { ImageResponse } from "next/og";
export const alt = "Syed Muhammad Rehan — AI & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
 return new ImageResponse(<div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"65px 75px", background:"#111310", color:"#f1f2e9" }}><div style={{ display:"flex", justifyContent:"space-between", fontSize:20 }}><span>REHAN / @RELINXX</span><span style={{ color:"#d0f178" }}>AI & SOFTWARE ENGINEER</span></div><div style={{ display:"flex", flexDirection:"column", fontSize:90, letterSpacing:-5, lineHeight:1.08 }}><span>AI that works.</span><span style={{ color:"#d0f178" }}>Software that lasts.</span></div><div style={{ display:"flex", justifyContent:"space-between", borderTop:"1px solid #343a2e", paddingTop:25, fontSize:18, color:"#a4aa9d" }}><span>AGENTIC AI · RAG · SOFTWARE · AUTOMATION</span><span>relinxx.vercel.app</span></div></div>,size);
}
