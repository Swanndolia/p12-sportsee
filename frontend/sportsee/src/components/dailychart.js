import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DailyChart = ({ dailyData }) => {

    const TooltipGenerator = ({ payload, active }) => {
        if (active) {
            return (
                <div className='daily-tooltip'>
                    <div>{payload[0].value}kg</div>
                    <div>{payload[1].value}Kcal</div>
                </div>
            )
        }
    }

    return (
        <ResponsiveContainer id="main-graph" width="100%" maxHeight={300} height="fitcontent" aspect={3} background-color="#FBFBFB">
            <BarChart data={dailyData} barGap={8} barCategoryGap={1}>
                <CartesianGrid vertical={false} strokeDasharray="1 1" />
                <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14, stroke: '#9B9EAC' }} dy={15} />
                <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14, stroke: '#9B9EAC' }} dx={15} />
                <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true} />
                <Tooltip content={<TooltipGenerator />} />
                <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default DailyChart