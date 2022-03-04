import { action, makeObservable, observable } from "mobx";

class CounterService {

    state = new Map<number, number>();  //первый number - ключ, второй - его значение. Создаем

    constructor() {
                                    //Тут надо создать makeobservableЖ за чем следить, а что будет действием(функции)
        makeObservable(this, {
            state: observable,
            increase: action,
            decrease: action
        });
    };

    init = (idx: number, num:number) => this.state.set(idx, num);    // устанавливает первоначальное значение

    increase = (idx: number) => {
        const currentValue = this.state.get(idx)!;
        this.state.set(idx, currentValue + 1);
        console.log('testt')
        console.log(idx)
    };

    decrease = (idx: number) => {
        const currentValue = this.state.get(idx)!;
        this.state.set(idx, currentValue - 1);
    };

};

export default CounterService;