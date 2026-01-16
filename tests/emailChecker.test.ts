import { emailChecker } from "../src/emailChecker";

describe("test on the email checker function", () => {

    test("email that does not contain at least one @", () => {
        const actual = emailChecker("berkan.saritas.student.vinci.be");
        expect(actual).toBe(false);
    });

    test("test that does not contain points for the domain name", () => {
        const actual = emailChecker("berkan.saritas@gmailcom");
        expect(actual).toBe(false);
    });

    test("test that contains a period at the end of the domain name", () => {
        const actual = emailChecker("berkan.saritas@gmailcom.");
        expect(actual).toBe(false);
    });

    test("test which contains a space", () => {
        const actual = emailChecker("berkan saritas@student.vinci.be");
        expect(actual).toBe(false);
    });

})