import { emailChecker } from "../src/emailChecker";

describe("test sur la fonction email checker", () => {

    test("email qui ne contient pas au moins un @", () => {
        const actual = emailChecker("berkan.saritas.student.vinci.be");
        expect(actual).toBe(false);
    });
})