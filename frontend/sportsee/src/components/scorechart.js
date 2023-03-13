import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function ScoreChart({ scoreData }) {
    const score = [
        { value: scoreData.todayScore || scoreData.score },
        { value: 1 - scoreData.todayScore || scoreData.score },
    ];

    return (
        <ResponsiveContainer width="30%" height="fit-content" minWidth={230} maxHeight={300} aspect={1}>
            <PieChart>
                <Pie data={score} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90}>
                    {
                        score.map((entry, index) => (index === 0 ?
                            <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" /> :
                            <Cell key={`cell-${index}`} fill="#ffffff" />
                        ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default ScoreChart;