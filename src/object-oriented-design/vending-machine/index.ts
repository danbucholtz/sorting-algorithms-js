// soda machine has a collection of soda types
// for each soda type, there can be 0 or more cans available
// each soda type has a price
// a soda machine operations on transactions, a user enters coins and accumulates a balance.
// the user can purchase a soda and receive change (if applicable) or just request change


export class SodaMachine {
    currentBalance: number = 0;

    constructor(public sodaTypes: SodaType[]) {
    }

    insertMoney(amount: number) {
        this.currentBalance += amount;
    }

    processChangeRequest() {
        const temp = this.currentBalance;
        this.currentBalance = 0;
        return temp;
    }

    purchaseSoda(type: SodaType) {
        if (!type.isCanAvailable()) {
            return {
                success: false,
                msg: 'This type of soda is not presently available',
                code: 1,
                change: -1,
            }
        }
        if (!type.canAffordCan(this.currentBalance)) {
            return {
                success: false,
                msg: 'Insert more money to purchase this soda',
                code: 2,
                change: -1
            }
        }
        // there is no reason the soda cannot be purchased, so go ahead and purchase it
        type.removeCan();
        this.currentBalance = this.currentBalance - type.price;
        const change = this.processChangeRequest();
        return {
            success: true,
            msg: null,
            code: -1,
            change
        }
    }

    returnChange() {
        // mock implementation of returning the change to the user
    }
}

export class SodaType {
    constructor(public name: string, public quantity: number, public price: number, ) {
    }

    removeCan() {
        if (this.quantity === 0) {
            throw new Error(`There are not any cans to remove`);
        }
        this.quantity--;
    }

    addCans(numCans: number) {
        this.quantity += numCans;
    }

    isCanAvailable() {
        return this.quantity > 0 ? true : false;
    }

    canAffordCan(balance: number) {
        if (balance >= this.price) {
            return true;
        }
        return false;
    }
}