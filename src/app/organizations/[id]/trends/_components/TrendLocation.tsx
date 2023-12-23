"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import PrimaryGradient from "@/components/elements/PrimaryGradient";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  data: {
    name: string;
    value: number;
  }[];
}

const TrendLocation = ({ data, className }: Props) => (
  <ResponsiveContainer width="100%" height={ 160 }>
    <BarChart data={ data } layout="vertical" barSize={ 20 }>
      <XAxis type="number" hide/>
      <YAxis dataKey="name" type="category" fontSize={ 14 } axisLine={ false } tickLine={ false }
             width={ 4 + 14 * Math.max(...data.map(e => e.name.length)) }/>
      <defs><PrimaryGradient id="primaryGradient"/></defs>
      <Bar dataKey="value" fill="url(#primaryGradient)" radius={ [0, 16, 16, 0] }/>
    </BarChart>
  </ResponsiveContainer>
);

export default TrendLocation;
