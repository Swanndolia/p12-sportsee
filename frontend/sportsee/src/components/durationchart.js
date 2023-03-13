import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from "recharts";

const DurationChart = ({ durationData }) => {

    function convertDayNumberToDayLetter(day) {
        switch (day) {
            case 1: return 'L';
            case 2: return 'M';
            case 3: return 'M';
            case 4: return 'J';
            case 5: return 'V';
            case 6: return 'S';
            case 7: return 'D';
            default: return '';
        }
    }

    const TooltipGenerator = ({ payload, active }) => {
        if (active) {
            return (
                <div className='tooltip-'>
                    <div>{payload[0].value}min</div>
                </div>
            )
        }
    }

    return (
        <ResponsiveContainer id="duration-chart" maxHeight={300} minWidth={230} width="30%" height="fit-content" aspect={1}>
            <LineChart data={durationData} margin={{ top: 80, right: 10, left: 10, bottom: 40 }}  >
                <CartesianGrid horizontal={false} vertical={false} />
                <XAxis dataKey='day' type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 500 }} tickFormatter={convertDayNumberToDayLetter} stroke='rgba(255, 255, 255, 0.5)' tickMargin={35} />
                <YAxis hide='true' domain={[]} />
                <Tooltip content={<TooltipGenerator />} cursor={false} />
                <Line dataKey='sessionLength' type='natural' stroke='#FFFFFF' dot={false} strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default DurationChart