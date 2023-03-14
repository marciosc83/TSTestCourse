import { getStringInfo, length, StringUtils, tolowerCase, toUpperCase } from "../app/Utils"


describe('Utils test suite', () => {

    it('should return uppercase of valid string value', () => {
        //arrange
        const sut = toUpperCase;
        const expected = 'ABC';

        //act
        const actual = sut('abc');

        //assert
        expect(actual).toBe(expected);
    })

    it('should return lowercase of valid string value', () => {
        //arrange
        const sut = tolowerCase;
        const expected = 'abc';

        //act
        const actual = sut('ABC');

        //assert
        expect(actual).toBe(expected);
    })

    it('should return text length of valid string value', () => {
        //arrange
        const sut = length;
        const expected = 3;

        //act
        const actual = sut('abc');

        //assert
        expect(actual).toBe(expected);
    })

    it('should return the string info of valid string value', () => {
        const sut = getStringInfo;

        const actual = sut('My-String');

        expect(actual.lowercase).toBe('my-string');
        expect(actual.uppercase).toBe('MY-STRING');
        expect(actual.extraInfo).toEqual({});

        expect(actual.characters.length).toBe(9);
        expect(actual.characters).toHaveLength(9);

        expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
        expect(actual.characters).toContain<string>('M');
        expect(actual.characters).toEqual(
            expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
        );

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    })
});

describe('getStringInfo for arg My-String should', () => {
    it('return right upper case', () => {
        const actual = getStringInfo('My-String');
        expect(actual.uppercase).toBe('MY-STRING');
    })

    it('return right lower case', () => {
        const actual = getStringInfo('My-String');
        expect(actual.lowercase).toBe('my-string');    
    })

    it('return right lenght', () => {
        const actual = getStringInfo('My-String');
        expect(actual.characters).toHaveLength(9);
    })

    it('return right characters', () => {
        const actual = getStringInfo('My-String');
        expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
    })

    it('return defined extra info', () => {
        const actual = getStringInfo('My-String');
        expect(actual.extraInfo).toBeDefined();
    })

    it('return right extra info', () => {
        const actual = getStringInfo('My-String');
        expect(actual.extraInfo).toEqual({});
    })
})

describe('ToUpperCase examples', () => {
    it.each([
        {input: 'abc', expected: 'ABC'},
        {input: 'My-String', expected: 'MY-STRING'},
        {input: 'def', expected: 'DEF'}
    ])('$input toUpperCase should be $expected', ({input,expected}) => {
        const actual = toUpperCase(input);
        expect(actual).toBe(expected);
    });
})

describe('StringUtils test', () => {
    let sut: StringUtils;

    beforeEach(() => {
        sut = new StringUtils();
    })

    afterEach(() => {
        //clearing mocks
    })

    it('Should return the correct upper case', () => {
        const actual = sut.toUpperCase('abc');

        expect(actual).toBe('ABC');
    })
})