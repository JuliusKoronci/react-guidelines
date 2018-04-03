import createReducer from '../reduxUtils';

const initialState = {
  test: '1',
};

const reducer = {
  SOME_KEY: (state, action) => ({
    ...state,
    test: action.payload,
  }),
};

const createdReducer = createReducer(initialState, reducer);

describe('createReducer', () => {
  it('should create desired state if reducer is run', function() {
    expect(
      createdReducer(
        {},
        {
          type: 'SOME_KEY',
          payload: '2',
        },
      ),
    ).toEqual({
      test: '2',
    });
  });
});
