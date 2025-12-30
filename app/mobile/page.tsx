import Navbar from "@/app/components/mobile/MobileNavbar"
import WindowManager  from "@/app/components/mobile/WindowManager"

function page() {
  return (
    <div className="w-screen max-h-screen overflow-hidden">
      <Navbar />
      <WindowManager />
      
      {/* Optional background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 to-slate-800" />
    </div>
  )
}

export default page