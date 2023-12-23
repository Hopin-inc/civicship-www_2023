"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import PrimaryGradient from "@/components/elements/PrimaryGradient";

type Props = React.InputHTMLAttributes<HTMLDivElement> & {
  data: {
    name: string;
    value: number;
  }[];
}

const TrendFrequency = ({ data, className }: Props) => (
  <ResponsiveContainer width="100%" height={ 160 } className={ className }>
    <BarChart data={ data } barSize={ 48 }>
      <XAxis dataKey="name" fontSize={ 14 } axisLine={ false } tickLine={ false } tickMargin={ 8 }/>
      <defs><PrimaryGradient id="primaryGradient"/></defs>
      <Bar dataKey="value" fill="url(#primaryGradient)" radius={ [16, 16, 0, 0] }/>
    </BarChart>
  </ResponsiveContainer>
);

export default TrendFrequency;
