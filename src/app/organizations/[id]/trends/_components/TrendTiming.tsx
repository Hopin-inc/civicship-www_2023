"use client";

import { HeatMapGrid } from "react-grid-heatmap";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  data: number[][];
}

const xAxis = ["月曜", "火曜", "水曜", "木曜", "金曜", "土曜", "日曜"];
const yAxis = ["午前", "午後", "夜"];

const TrendTiming = ({ data, className }: Props) => (
  <div className={ className }>
    <HeatMapGrid data={ data } xLabels={ xAxis } yLabels={ yAxis } cellHeight="2.5rem"
                 xLabelsStyle={ () => ({ fontSize: 14, color: "#666" }) }
                 yLabelsStyle={ () => ({ fontSize: 14, color: "#666", lineHeight: "calc(2.5rem + 8px)" }) }
                 cellStyle={ (x, y, ratio) => ({
                   background: "var(--primary-gradient)",
                   opacity: 0.05 + ratio * 0.95,
                   margin: 4,
                 }) }/>
  </div>
);

export default TrendTiming;
