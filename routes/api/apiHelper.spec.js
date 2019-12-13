const Units = require("./apiHelper.js");
const db = require("../../data/dbConfig.js");

describe("units helpers", () => {
  describe("insert", () => {
    it("add the unit to the database", async () => {
      await Units.addUnit({ name: "SCV" });
      await Units.addUnit({ name: "Marine" });

      const units = await db("units");
      expect(units).toHaveLength(2);
    });

    it("should return the unit inserted", async () => {
      let unit1 = await Units.addUnit({ name: "Firebat" });
      expect(unit1.name).toBe("Firebat");

      let unit2 = await Units.addUnit({ name: "Goliath" });
      expect(unit2.name).toBe("Goliath");
    });

    it("should delete after adding", async () => {
      let unit1 = await Units.addUnit({ name: "Ghost" });

      await Units.delUnit(unit1.id);
      const unitDb = await db("units");
      expect(unitDb).toHaveLength(0);
    });

    beforeEach(async () => {
      await db("units").truncate();
    });
  });
});
