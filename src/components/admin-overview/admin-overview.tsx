import TopicDistributionChart from "./bar-chart/bar-chart";
import { GraphChart } from "./graph-chart/graph-chart";
import { Header } from "./header/header";
import { MetricsCards } from "./metrics-card/metrics-card";
import { PiChart } from "./pi-chart/pi-chart";

export default function Overview() {
 

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header/>
       <MetricsCards />
        
          {/* Today and Stay Duration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PiChart/>
             <GraphChart/>
            
          </div>
          <div className="space-y-6">
           <TopicDistributionChart/>
        </div>
      </div>
    </div>
  )
}
