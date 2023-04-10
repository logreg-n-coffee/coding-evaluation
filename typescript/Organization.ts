import Position from './Position';
import Name from './Name';
import Employee from './Employee';

abstract class Organization {
  private root: Position;
  // used for generating identifier
  private lastIdentifier: number = 0;

  constructor() {
    this.root = this.createOrganization();
  }

  protected abstract createOrganization(): Position;

  printOrganization = (position: Position, prefix: string): string => {
    let str = `${prefix}+-${position}\n`;
    for (const p of position.getDirectReports()) {
      str = str.concat(this.printOrganization(p, `${prefix}  `));
    }
    return str;
  };

  // Hire the given person as an employee in the position that has that title
  // Return the newly filled position or undefined if no position has that title

  // Helper function to search for a position with a given title in the organization hierarchy
  protected searchPosition(position: Position, title: string): Position | undefined {
    if (position.getTitle() === title && !position.isFilled()) {
      return position;
    }

    for (const p of position.getDirectReports()) {
      const foundPosition = this.searchPosition(p, title);
      if (foundPosition) {
        return foundPosition;
      }
    }

    return undefined;
  }
  hire(person: Name, title: string): Position | undefined {
    const positionToFill = this.searchPosition(this.root, title);

    if (positionToFill) {
      const newIdentifier = ++this.lastIdentifier;
      const newEmployee = new Employee(newIdentifier, person);
      positionToFill.setEmployee(newEmployee);
      console.log(`${person} has been hired as a ${title}.`);
      return positionToFill;
    } else {
      console.log(`No vacant position with the title ${title} was found.`);
      return undefined;
    }
}

  toString = () => this.printOrganization(this.root, '');
}

export default Organization;
