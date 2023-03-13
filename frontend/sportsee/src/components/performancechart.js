import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

const PerformanceChart = ({ performanceData }) => {

    function convertPerfNumberToPerfString(performanceData) {
        switch (performanceData) {
            case 1: return 'Cardio';
            case 2: return 'Energie';
            case 3: return 'Endurance';
            case 4: return 'Force';
            case 5: return 'Vitesse';
            case 6: return 'Intensité';
            default: return null;
        }
    }

    return (
        <ResponsiveContainer id="performance-chart" minWidth={230} maxHeight={300} width="30%" height="fit-content" aspect={1}>
            <RadarChart data={[...performanceData].reverse()} outerRadius={80} >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey='kind' tickLine={false} tick={{ fontSize: 12 }} stroke="#FFFFFF" tickFormatter={convertPerfNumberToPerfString} />
                <Radar dataKey='value' fill="#FF0101B2" />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default PerformanceChart