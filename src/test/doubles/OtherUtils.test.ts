import { calculateComplexity, OtherStringUtils, toUpperCaseWithCallBack } from "../../app/doubles/OtherUtils"

describe.skip('OtherUtils test suite', () => {

    it('Calculate complexity - STUB example', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo'
            }
        }

        const actual = calculateComplexity(someInfo as any); //STUB should not be used inside the assertion
        expect(actual).toBe(10);
    })

    it('ToUpperCase with invalid argument - FAKE exaxmple', () => {
        const actual = toUpperCaseWithCallBack('', () => {}); //FAKE
        expect(actual).toBeUndefined();
    })

    it('ToUpperCase with valid argument - FAKE exaxmple', () => {
        const actual = toUpperCaseWithCallBack('abc', () => {}); //FAKE
        expect(actual).toBe('ABC');
    })

    describe('Tracking callbacks with Mocks', () => {
        let cbArgs = [];
        let timesCalled = 0;

        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++
        }

        //clearing tracking fields
        afterEach( () => {
            cbArgs = [];
            timesCalled = 0;
        })

        it('Calls calback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallBack('', callBackMock)
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid argument');
            expect(timesCalled).toBe(1);
        });

        it('Calls calback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCallBack('abc', callBackMock)
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with abc');
            expect(timesCalled).toBe(1);
        });


    })

    describe('Tracking callbacks with Jest mocks', () => {
        
        const callBackMock = jest.fn();

        afterEach( () => {
            jest.clearAllMocks();
        })

        it('Calls calback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallBack('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toBeCalledWith('Invalid argument');
            expect(callBackMock).toBeCalledTimes(1);
        })

        it('Call calback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCallBack('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toBeCalledWith('called function with abc');
            expect(callBackMock).toBeCalledTimes(1);
        })
    })

    describe('OtherStringUtils tests with spies', () => {

        let sut: OtherStringUtils;

        beforeEach( () => {
            sut = new OtherStringUtils();
        })

        it('Use a spy to track calls', () =>{
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('abc');
            expect(toUpperCaseSpy).toBeCalledWith('abc')
        })

        it('Use a spy to track calls to other module', () => {
            const consoleLogSpy = jest.spyOn(console,'log');
            sut.logString('abc');
            expect(consoleLogSpy).toBeCalledWith('abc');
        })

        it('Use a spy to replace the implementation of a method', () => {
            jest.spyOn(sut, 'callExternalService').mockImplementation( () => {
                console.log('Calling mocked implementation');
            });
            sut.callExternalService();          
        })
    })
})