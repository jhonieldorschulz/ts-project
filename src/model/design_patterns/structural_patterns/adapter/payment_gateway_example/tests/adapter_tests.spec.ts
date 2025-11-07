import { describe, test, expect } from "vitest";
import { Application } from "../application";
import { LegacyGateway } from "../adaptee/legacy_gateway";
import { LegacyGatewayAdapter } from "../adapter/legacy_gateway_adapter";

describe('Adapter Payment Example', () => {
  test('Adapter converts interface and approves payment', () => {
    const app = new Application(new LegacyGatewayAdapter(new LegacyGateway()));
    const msg = app.checkout(2500);
    expect(msg).toContain('R$ 25.00');
  });
});


