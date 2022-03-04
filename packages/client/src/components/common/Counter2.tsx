import { inject, observer } from "mobx-react";

import Button from '@mui/material/Button';
import CounterService from '../../lib/CounterService';
import Typography from '@material-ui/core/Typography';
import compose from "compose-function";
import { useEffect } from 'react';

// общие свойства
interface ICounter2Props {
    idx: number;
    num: number;
}
//Приватные
interface ICounter2Private {
    counterService: CounterService;
}

export const Counter2 = ({
    counterService,
    idx,
    num,
    // совмещает общие и приватные свойства
}: ICounter2Props & ICounter2Private) => {


    useEffect(() => {             // При первой загрузке устанавливает изначальное значение счетчика
        // debugger
        counterService.init(idx, num)

    }, []);

    const handleInc = () => {
        counterService.increase(idx);
    };

    const handleDec = () => {
        counterService.decrease(idx);
    };

    const currentValue = counterService.state.get(idx);

    return (
        <Typography variant='h4' color='secondary'>
            <Button variant='outlined' size='small' onClick={handleDec}>-</Button>
            {idx !== 2 ? currentValue : currentValue + ' of 40'}
            <Button variant='outlined' size='small' onClick={handleInc}>+</Button>
        </Typography>
    )
};

export default compose(
    inject(({ counterService }) => ({ counterService })),
    observer,
)(Counter2) as React.FC<ICounter2Props>;