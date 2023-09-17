
import CanvasModel from "@/canvas";
import Customizer from "@/pages/Customizer";
import HomePage from "@/pages/HomePage";


{/* <Spline scene="https://prod.spline.design/e44rjJ05q1kpv8mk/scene.splinecode" /> */ }
export default function Home() {


  return (
    <main className="app transition-all ease-in">
      <HomePage />
      <CanvasModel />
      <Customizer />
    </main>
  )
}
