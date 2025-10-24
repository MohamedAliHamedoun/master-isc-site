
import { useEffect, useMemo, useState } from "react"
export default function QR(){
  const [url, setUrl] = useState<string>("")
  useEffect(()=>{
    const p = new URLSearchParams(window.location.search)
    const c = p.get("u")
    const origin = window.location.origin
    setUrl(c && c.startsWith("http") ? c : origin)
  },[])
  const qrSrc = useMemo(()=> url ? `https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=${encodeURIComponent(url)}` : "", [url])
  return (
    <section className="container py-12">
      <h1 className="section-title">QR code du site</h1>
      <p className="muted mt-2">Ce QR encode : <span className="font-mono">{url || "..."}</span></p>
      <div className="mt-6 flex flex-col items-center gap-4">
        {qrSrc && <img src={qrSrc} alt="QR code" className="border rounded-2xl p-3 bg-white" />}
        <div className="flex gap-3">
          <a className="btn btn-primary" href={qrSrc} download="qr-master-isc.png">Télécharger PNG</a>
          <a className="btn" href={`/qr?u=${encodeURIComponent(url)}`}>Rafraîchir</a>
        </div>
        <p className="text-sm opacity-60">Génère un QR vers une autre page : <code>/qr?u=https://ton-domaine/quiz</code></p>
      </div>
    </section>
  )
}
