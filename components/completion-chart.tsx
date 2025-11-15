'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface CompletionData {
  date: string
  completed: boolean
}

interface CompletionChartProps {
  completionData: CompletionData[]
}

export function CompletionChart({ completionData }: CompletionChartProps) {
  const chartData = []
  for (let i = 7; i <= completionData.length; i++) {
    const week = completionData.slice(i - 7, i)
    const completed = week.filter(d => d.completed).length
    chartData.push({
      date: new Date(completionData[i - 1].date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      rate: Math.round((completed / 7) * 100),
    })
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 100]} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Line
          type="monotone"
          dataKey="rate"
          stroke="hsl(var(--color-accent))"
          strokeWidth={2}
          dot={{ fill: 'hsl(var(--color-accent))', r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
