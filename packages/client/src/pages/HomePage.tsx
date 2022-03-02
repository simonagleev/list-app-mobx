import {
  One,
  FieldType,
  TypedField,
} from 'react-declarative';

import Card from '../components/common/Card';

const CC_FULL_HEIGHT = "calc(100vh - 80px)";
const CC_CELL_PADDING = "7px";
const CC_MIN_HEIGHT = "635px";


interface IObj {
  id?: number

  text?: string

}

const createCard = (idx: number, columns = "6"): TypedField => ({
  type: FieldType.Hero,
  columns,
  height: `33vh`,
  right: CC_CELL_PADDING,
  bottom: '10px',
  child: {
    type: FieldType.Component,
    element: (obj) => <Card obj={obj} idx={idx} />
  },
})

const fields: TypedField[] = [
  createCard(0),
  createCard(1),
  createCard(2, "4"),
  createCard(3, "4"),
  createCard(4, "4"),
  createCard(5),
  createCard(6),
];

export const HomePage = () => (
  <One
    handler={() => ({
      value0: {
        label: "1",
        color: "green",
      },
      value1: {
        label: "2",
        color: "red",
      },
      value2: {
        label: "3",
        color: "green",
      },
      value3: {
        label: "4",
        color: "green",
      },
      value4: {
        label: "5",
        color: "green",
      },
      value5: {
        label: "6",
        color: "green",
      },
      value6: {
        label: "7",
        color: "green",
      },
    })}
    fields={fields}
  />
);

export default HomePage;
