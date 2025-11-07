import { describe, test, expect } from "vitest";
import { Application } from "../application";
import { RoadLogistics } from "../creator/road_logistics";
import { SeaLogistics } from "../creator/sea_logistics";
import { Truck } from "../products/truck";
import { Ship } from "../products/ship";

describe('Factory Method Transport Example', () => {
  test('RoadLogistics creates Truck that delivers by road', () => {
    const truck = new Truck();
    truck.load(250);
    expect(truck.deliver()).toContain('road');
  });

  test('SeaLogistics creates Ship that delivers by sea', () => {
    const ship = new Ship();
    ship.load(5000);
    expect(ship.deliver()).toContain('sea');
  });

  test('Application uses provided Logistics to deliver', () => {
    const roadApp = new Application(new RoadLogistics());
    expect(roadApp.deliverPackage(100)).toContain('road');

    const seaApp = new Application(new SeaLogistics());
    expect(seaApp.deliverPackage(3000)).toContain('sea');
  });
});


