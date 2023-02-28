import { Box, useMediaQuery } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from '../../data/chartData';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
  
    return null;
  };

export default function DashboardChart() {
    const [isSmallerThan1355] = useMediaQuery('(max-width: 1355px)')

    return (
        <Box width={`${isSmallerThan1355 ? '900px' : '1250px'}`} flexGrow='1' flexShrink='1'  height='330px' marginTop='2.5rem'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                  color: 'red'
                  }}
              >
              <XAxis dataKey="name" />
              <YAxis />
              {/* <Tooltip content={<CustomTooltip />} /> */}
              <Bar dataKey="pv" barSize={20} fill="green" />
            </BarChart>
            </ResponsiveContainer>
        </Box>
      );
}