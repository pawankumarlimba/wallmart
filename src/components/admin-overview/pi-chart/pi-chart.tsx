"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useMemo } from "react";

const data = [
  { name: "2 nights", value: 25, color: "#fb923c" },
  { name: "3 nights", value: 20, color: "#fbbf24" },
  { name: "4-5 nights", value: 30, color: "#65a30d" },
  { name: "8-14 nights", value: 25, color: "#0891b2" },
];

const COLORS = data.map((d) => d.color);

export function PiChart({ className = "" }: { className?: string }) {
  const chartData = useMemo(() => data, []);

  return (
    <Card className={className + " w-full max-w-xl mx-auto"}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Stay duration summary
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
          <div className="w-full max-w-[18rem] md:max-w-[22rem] lg:max-w-[26rem] aspect-square">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius="45%"
                  outerRadius="70%"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:block md:space-y-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className="text-sm font-medium whitespace-nowrap"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
