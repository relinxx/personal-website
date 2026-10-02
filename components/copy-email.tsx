"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
export function CopyEmail({ email }: { email: string }) {
 const [state, setState] = useState("Copy email address");
 async function copy() { try { await navigator.clipboard.writeText(email); setState("Email copied"); } catch { setState("Select and copy the address above"); } }
 return <button type="button" className="copy-email" onClick={copy}><span aria-live="polite">{state}</span>{state === "Email copied" ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}</button>;
}
