import {fetchDog, FETCH_DOG_SUCCESS, fetchDogSuccess} from './dog';

describe('fetchDog', () => {
  it('Should dispatch fetchDogSuccess', () => {
    const dog = {
      name: 'dog'
    };
    
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return dog;
        }
      })
    );

    const dispatch = jest.fn();
    return fetchDog()(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith('/api/dog');
      expect(dispatch).toHaveBeenCalledWith(fetchDogSuccess(dog));
    });
  });
});