export default class StaffSection {
    get ghostStaffMember() {
        return cy.get("h3").contains("Ghost");
    }
    get staffProfileConfiguration() {
        return cy.get("button").contains("User Settings");
    }
    get clickInSuspendStaffMember() {
        return cy.get("button").contains("Suspend User");
    }
    get suspendStaffMember() {
        return cy.get("button").contains("Suspend");
    }
    get ClickInUnSuspendStaffMember() {
        return cy.get("button").contains("Un-suspend User")
    }
    get unSuspendStaffMember() {
        return cy.get("button").contains("Un-suspend");
    }
    get verifyUnsuspendedMember() {
        return cy
            .get("span")
            .contains("Suspended")
            .should("not.exist");
    }
    get obtainRoleOptions() {
        return cy.get('select#new-user-role');
    }
    get saveChanges() {
        return cy.get('span').contains('Save');
    }
    get verifyChangedRole() {
        return cy
            .get('select#new-user-role')
            .should('have.value','6456a45668823200017f49d1' );
    }
}