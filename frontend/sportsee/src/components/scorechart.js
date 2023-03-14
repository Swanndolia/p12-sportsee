import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

function ScoreChart({ scoreData }) {
    const score = [
        { value: scoreData.todayScore || scoreData.score },
        { value: 1 - scoreData.todayScore || scoreData.score },
    ];

    const ScoreChartLegend = () => {
        return (
            <div id="score-chart-legend">{scoreData.todayScore * 100 || scoreData.score * 100}%<br />de votre<br />objectif</div>
        )
    }

    return (
        <ResponsiveContainer id="score-chart" width="30%" height="fit-content" minWidth={230} maxHeight={260} aspect={1}>
            <PieChart>
                <Legend verticalAlign="bottom" wrapperStyle={{ top: 50 }} content={<ScoreChartLegend />} />
                <Pie data={score} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90}>
                    {
                        score.map((entry, index) => (index === 0 ?
                            <Cell key={"cell-" + { index }} cornerRadius={10} fill="#ff0000" /> :
                            <Cell key={"cell-$" + { index }} fill="#ffffff" />
                        ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default ScoreChart;