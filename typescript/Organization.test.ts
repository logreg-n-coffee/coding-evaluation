import Name from './Name';
import Organization from './Organization';
import Position from './Position';

class TestOrganization extends Organization { 
    createOrganization(): Position {
        const ceo = new Position('CEO');
        const pres = new Position('President');
        ceo.addDirectReport(pres);
        const vpm = new Position('VP Marketing');
        pres.addDirectReport(vpm);
        const vps = new Position('VP Sales');
        pres.addDirectReport(vps);
        const vpf = new Position('VP Finance');
        pres.addDirectReport(vpf);
        const coo = new Position('COO');
        pres.addDirectReport(coo);
        const cio = new Position('CIO');
        ceo.addDirectReport(cio);
        const vpt = new Position('VP Technology');
        cio.addDirectReport(vpt);
        const vpi = new Position('VP Infrastructure');
        cio.addDirectReport(vpi);
        const dea = new Position('Director Enterprise Architecture');
        vpt.addDirectReport(dea);
        const dct = new Position('Director Customer Technology');
        vpt.addDirectReport(dct);
        const s = new Position('Salesperson');
        vps.addDirectReport(s);
        return ceo;
  }
}

describe('MyOrganization', () => {
  let myOrg: TestOrganization;

  beforeEach(() => {
    myOrg = new TestOrganization();
  });

  test('hire() should fill the position with the given title', () => {
    const newEmployeeName = new Name('John', 'Doe');
    const positionTitle = 'Salesperson';
    const position = myOrg.hire(newEmployeeName, positionTitle);

    expect(position).toBeDefined();
    expect(position?.getTitle()).toBe(positionTitle);
    expect(position?.isFilled()).toBeTruthy();
    expect(position?.getEmployee()?.toString()).toContain(newEmployeeName.toString());
  });

  test('hire() should return undefined if the position with the given title is not found', () => {
    const newEmployeeName = new Name('John', 'Doe');
    const positionTitle = 'Nonexistent Title';
    const position = myOrg.hire(newEmployeeName, positionTitle);

    expect(position).toBeUndefined();
  });
});
