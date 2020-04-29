const Service = jest.genMockFromModule("../service");

Service.getName = (arr) => "Administrator";

export default Service;
