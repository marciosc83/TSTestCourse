jest.mock('../../app/doubles/OtherUtils', () => ({
    ...jest.requireActual('../../app/doubles/OtherUtils'),
    calculateComplexity: () => {return 10}
}));

jest.mock('uuid', () => ({
    v4: () => '123'
}))

import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('Module tests', () => {
    
    it('Calculate complexity', () => {
        const result = OtherUtils.calculateComplexity( {} as any);
        expect(result).toBe(10);
    })

    it('Keep other functions', () => {
        const result = OtherUtils.toUpperCase('abc');
        expect(result).toBe('ABC');
    })

    it('String with ID', () => {
        const result = OtherUtils.toLowerCaseWithID('ABC');
        expect(result).toBe('abc123');
    })
})
