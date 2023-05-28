// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


test('checks valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('checks valid phone number', () => {
    expect(functions.isPhoneNumber('321-456-7890')).toBe(true);
});
test('checks valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-ABCD')).toBe(true);
});
test('checks valid phone number', () => {
    expect(functions.isPhoneNumber('123-45A-7890')).toBe(true);
});
test('checks valid email', () => {
    expect(functions.isEmail('abcd@gmail.com')).toBe(true);
});
test('checks valid email', () => {
    expect(functions.isEmail('abcdfefskdf@gmail.com')).toBe(true);
});
test('checks valid email', () => {
    expect(functions.isEmail('abcd-gmail.com')).toBe(true);
});
test('checks valid email', () => {
    expect(functions.isEmail('abcd.gmail.com')).toBe(true);
});
test('checks valid strong password', () => {
    expect(functions.isStrongPassword('AbcD0')).toBe(true);
});
test('checks valid strong password', () => {
    expect(functions.isStrongPassword('amndskDAD0203')).toBe(true);
});
test('checks valid strong password', () => {
    expect(functions.isStrongPassword('what?')).toBe(true);
});
test('checks valid strong password', () => {
    expect(functions.isStrongPassword('LOL')).toBe(true);
});
test('checks valid date', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});
test('checks valid date', () => {
    expect(functions.isDate('04/01/2022')).toBe(true);
});
test('checks valid date', () => {
    expect(functions.isDate('May')).toBe(true);
});
test('checks valid date', () => {
    expect(functions.isDate('Sunday')).toBe(true);
});
test('checks valid color', () => {
    expect(functions.isHexColor('#32a852')).toBe(true);
});
test('checks valid color', () => {
    expect(functions.isHexColor('#12a852')).toBe(true);
});
test('checks valid color', () => {
    expect(functions.isHexColor('red')).toBe(true);
});
test('checks valid color', () => {
    expect(functions.isHexColor('blue')).toBe(true);
});