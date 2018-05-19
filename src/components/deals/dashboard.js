//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import type {Deals} from './../../types/Deals';

type Props = {
    deals : Deals
}

const Dashboard = ({deals}: Props) => {
    const closed = deals.filter((value) => value.stage === 4).length;
    const open = deals.filter((value) => value.stage !== 4).length;
    const totalAmount = deals.reduce((a, b) => +a + +b.amount, 0);
    return (
        <Box
            pad='xsmall'
            direction='row'
        >
            <Box
                justify='center'
                align='center'
                pad='large'
            />
            <Meter
                type='circle'
                size='small'
                max={deals.length}
                label={
                    <Value
                        value={open}
                        units='open'
                        size='xsmall'
                    />}
                value={open}
            />
            <Box
                justify='center'
                align='center'
                pad='medium'
            />
            <Meter
                type='circle'
                size='small'
                max={deals.length}
                label={
                    <Value
                        value={closed}
                        units='closed'
                        size='xsmall'
                    />}
                value={closed}
            />
            <Box
                justify='center'
                align='center'
                pad='medium'
            />
            <Meter
                type='circle'
                size='small'
                max={totalAmount}
                label={
                    <Value
                        value={totalAmount}
                        units='Worth'
                        size='xsmall'
                    />}
                value={totalAmount}
            />
        </Box>
    );
};

export default Dashboard;