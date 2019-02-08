const validation = {
  create: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: false,
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: RegExp('[a-zA-Z]+\\.?'),
      required: false,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: false,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
    },
    id: {
      in: ['body'],
      required: false,
      string: true,
    },
    name: {
      in: ['body'],
      isObject: true,
      required: true,
    },
  },
};
export default validation;
