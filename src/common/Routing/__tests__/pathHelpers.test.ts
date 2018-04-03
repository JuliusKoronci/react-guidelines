import { createPath } from '../pathHelpers';

const path1 = 'contact/:id';
const path2 = 'contact';

describe('createPath', () => {
  it('should replace params in a path', function() {
    expect(createPath(path1, { id: 'test' })).toEqual('contact/test');
  });
  it('should return path if no params', function() {
    expect(createPath(path2, {})).toEqual(path2);
  });
});
