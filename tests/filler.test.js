describe('Get mapping function', function () {
	it('should return correct mapping', function () {
		var mapMock = getMapping('mapping1');
		var expectedResult = mapping['mapping1'];
		expect(mapMock).toEqual(expectedResult);
	});
});