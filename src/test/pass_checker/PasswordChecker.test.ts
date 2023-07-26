import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker"


describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker; 

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it('Password with less than 8 chars is invalid', () => {
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
        console.log(actual.reasons);
    })

    it('Password with at least 8 chars is valid', () => {
        const actual = sut.checkPassword('12345678');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
        console.log(actual.reasons);
    })

    it('Password with no uppercase is invalid', () => {
        const actual = sut.checkPassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    })

    it('Password with uppercase is valid', () => {
        const actual = sut.checkPassword('abcD');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    })

    it('Password with no lowercase is invalid', () => {
        const actual = sut.checkPassword('ABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    })

    it('Password with lowercase is valid', () => {
        const actual = sut.checkPassword('ABCd');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    })

    it('Admin password with no number is invalid', () => {
        const actual = sut.checkAdminPassword('ABCDabcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    })

    it('Password with lowercase is valid', () => {
        const actual = sut.checkPassword('ABC7');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    })

    it('Complex password is valid', () => {
        const actual = sut.checkPassword('1234abCD');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toHaveLength(0);
    })
})