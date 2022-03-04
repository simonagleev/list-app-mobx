import SessionService from './base/SessionService';
import RouterService from './base/RouterService';
import ApiService from './base/ApiService';

import PersonService from './PersonService';
import CounterService from './CounterService';

/**
 * Место для осуществления статической инверсии
 * управления
 */
const routerService = new RouterService();
const sessionService = new SessionService();

const apiService = new ApiService(
    sessionService,
    routerService,
);

const personService = new PersonService(
    apiService,
    routerService,
);

const counterService = new CounterService();

export const ioc = {
    routerService,
    sessionService,
    apiService,
    personService,
    counterService,
};

export default ioc;
