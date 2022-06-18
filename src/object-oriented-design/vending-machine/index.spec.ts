import { SodaMachine, SodaType} from './index';

describe('Vending Machine', () => {
    it('e2e', () => {
        const dietCoke = new SodaType('diet coke', 2, 65);
        const cherryCoke = new SodaType('cherry coke', 0, 60);
        const coke = new SodaType('coke', 5, 75);
        const sodas = [dietCoke, cherryCoke, coke]
        const sodaMachine = new SodaMachine(sodas);

        let change = sodaMachine.processChangeRequest();
        expect(change).toBe(0);

        sodaMachine.insertMoney(75);
        change = sodaMachine.processChangeRequest();
        expect(change).toBe(75);

        sodaMachine.insertMoney(75);
        sodaMachine.insertMoney(50);
        change = sodaMachine.processChangeRequest();
        expect(change).toBe(125);

        let response = sodaMachine.purchaseSoda(cherryCoke);
        expect(response.success).toBe(false);
        expect(response.code).toBe(1);

        response = sodaMachine.purchaseSoda(dietCoke);
        expect(response.success).toBe(false);
        expect(response.code).toBe(2);

        // purchase a soda
        sodaMachine.insertMoney(75);
        response = sodaMachine.purchaseSoda(dietCoke);
        expect(response.success).toBe(true);
        expect(response.change).toBe(10);
        expect(dietCoke.quantity).toBe(1);

        // try to purchase a soda but don't have enough money
        response = sodaMachine.purchaseSoda(dietCoke);
        expect(response.success).toBe(false);
        expect(response.code).toBe(2);

        // purchase a soda, now there are none left
        sodaMachine.insertMoney(165);
        response = sodaMachine.purchaseSoda(dietCoke);
        expect(response.success).toBe(true);
        expect(response.change).toBe(100);
        expect(dietCoke.quantity).toBe(0);

        // ensure you have enough money in the machine, then try to purchase one
        sodaMachine.insertMoney(65);
        response = sodaMachine.purchaseSoda(dietCoke);
        expect(response.success).toBe(false);
        expect(response.code).toBe(1);


    });
});