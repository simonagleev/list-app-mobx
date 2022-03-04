import {
  One,
  FieldType,
  TypedField,
} from 'react-declarative';

import Card from '../components/common/Card';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CC_CELL_PADDING = "7px";

interface IObj {
  idx?: number
  text?: string
  num?: number
  upperIndex?: number
}

const createCard = (idx: number, num:number, columns = "6"): TypedField => ({
  type: FieldType.Hero,
  columns,
  height: `33vh`,
  right: CC_CELL_PADDING,
  bottom: '10px',
  child: {
    type: FieldType.Component,
    element: (obj) => <Card obj={{ ...obj, upperIndex: idx }} idx={idx} upperIndex={idx} />     //тут происходит spread syntax, мы выдергиваем индекс из obj и еще отдельно передаем его как upperIndex, чтоб потом из Card передать его в Counter
  },
})
//  <Counter2 idx={idx} num={num} />
const fields: TypedField[] = [
  createCard(0, 58),
  createCard(1, 15),
  createCard(2, 37, "4"),
  createCard(3, 5, "4"),
  createCard(4, 1, "4"),
  createCard(5, 1),
  createCard(6, 0),
];

export const HomePage = () => (
  <One
    handler={() => ({
      value0: {
        label: "New chats",
        color: "blue",
        currentNumber: 1,
        num: 58,
        indexSpare: 0,
        icon: <MarkChatUnreadIcon color='primary'/>,
      },
      value1: {
        label: "New sales",
        color: "red",
        currentNumber: 2,
        num: 15,
        indexSpare: 1,
        icon: <PointOfSaleIcon color='error'/>,
      },
      value2: {
        label: "Hours worked",
        color: "orange",
        currentNumber: 1,
        num: 37,
        indexSpare: 2,
        icon: <WorkIcon sx={{ color: 'orange' }}/>,
      },
      value3: {
        label: "Late arrivals",
        color: "lightBlue",
        currentNumber: 1,
        num: 5,
        indexSpare: 3,
        icon: <AssignmentLateIcon sx={{ color: 'lightBlue' }}/>,
      },
      value4: {
        label: "Absence hours",
        color: "green",
        currentNumber: 1,
        num: 1,
        indexSpare: 4,
        icon: <DirectionsRunIcon sx={{ color: 'green' }}/>,
      },
      value5: {
        label: "Overtime",
        color: "darkBlue",
        currentNumber: 1,
        num: 1,
        indexSpare: 5,
        icon: <AccessTimeIcon sx={{ color: 'darkBlue' }}/>,
      },
      value6: {
        label: "Downtime",
        color: "pink",
        currentNumber: 7,
        num: 0,
        indexSpare: 6,
        icon: <HighlightOffIcon sx={{ color: 'pink' }}/>,
      },
    })}
    fields={fields}
  />
);

export default HomePage;
