'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface WeeklyData {
  week: string
  completionRate: number
}

interface WeeklyChartProps {
  data: {
    week: string
    completionRate: number
  }[]
}

export function WeeklyChart({ data }: WeeklyChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis domain={[0, 100]} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Bar dataKey="completionRate" fill="hsl(var(--color-accent))" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
