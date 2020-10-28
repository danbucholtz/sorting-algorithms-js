/*
  1. Parking lot has multiple levels
  2. Each level can have multiple rows of parking spots
  3. Each parking spot can be small, medium or large
  4. Only motocycles, cars, and buses can park there
  5. Motorcycles can park in any spot
  6. Cars can park is medium or large spots
  7. Buses can park is 5 consequetive large spots
*/

enum ParkingSpotSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

class ParkingSpot {
  private vehicle: Vehicle;
  constructor(public size: ParkingSpotSize) {
  }

  isAvailable() {
    return !this.vehicle;
  }

  parkInSpot(vehicle: Vehicle) {
    this.vehicle = vehicle;
    this.vehicle.setDelegate(this.onLeaveSpot)
  }

  onLeaveSpot() {
    this.vehicle = null;
  }
  
}

type LeaveParkingSpotDelegate = () => void;

abstract class Vehicle {

  private delegate: LeaveParkingSpotDelegate = null;

  abstract canFitInParkingSpot(parkingSpot: ParkingSpot): boolean;
  abstract numAdjacentSpacesRequired(): number;

  setDelegate(delegate: LeaveParkingSpotDelegate) {
    this.delegate = delegate;
  }

  leave() {
    this.delegate && this.delegate();
  }
}

class Motorcycle extends Vehicle {
  canFitInParkingSpot(_parkingSpot: ParkingSpot) {
    return true;
  }

  numAdjacentSpacesRequired() {
    return 1;
  }
}

class Car extends Vehicle {
  canFitInParkingSpot(parkingSpot: ParkingSpot) {
    return parkingSpot.size === ParkingSpotSize.MEDIUM || parkingSpot.size === ParkingSpotSize.LARGE;
  }

  numAdjacentSpacesRequired() {
    return 1;
  }
}

class Bus extends Vehicle {
  canFitInParkingSpot(parkingSpot: ParkingSpot) {
    return parkingSpot.size === ParkingSpotSize.LARGE;
  }

  numAdjacentSpacesRequired() {
    return 5;
  }
}

class ParkingLot {

  constructor(private levels: ParkingLotLevel[]) {
  }

  canPark(vehicle: Vehicle) {
    if (!this.allowedToPark(vehicle)) {
      throw new Error(`this vehicle type isnt allowed bruh`);
    }
    for (const level of this.levels) {
      if (level.parkVehicleIfPossible(vehicle)) {
        return true;
      }
    }
    return false;
  }

  allowedToPark(vehicle: Vehicle) {
    return vehicle instanceof Motorcycle || vehicle instanceof Car || vehicle instanceof Bus;
  }

}

class ParkingLotLevel {

  constructor(private rows: ParkingLotRow[]) {
  }

  parkVehicleIfPossible(vehicle: Vehicle) {
    for (const row of this.rows) {
      const spots = row.getOpenParkSpotsForVehicle(vehicle);
      if (spots.length > vehicle.numAdjacentSpacesRequired()) {
        // okay cool, we've got enough adjacent spots, so let's do it
        for (let i = 0; i < vehicle.numAdjacentSpacesRequired(); i++) {
          spots[i].parkInSpot(vehicle);
        }
        return true;
      }
    }
    return false;
  }
}

class ParkingLotRow {

  constructor(private parkingSpots: ParkingSpot[]) {
  }
  getOpenParkSpotsForVehicle(vehicle: Vehicle) {
    return this.parkingSpots.filter(spot => spot.isAvailable() && vehicle.canFitInParkingSpot(spot));
  }

}