import ProductSlider from "../components/slidableServices";
import ProcessSteps from "../components/processSteps";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-screen-lg p-4">
        <ProductSlider />
      </div>
      <div className="w-full max-w-screen-lg p-4">
        <ProcessSteps/>
      </div>
    </div>
  );
}