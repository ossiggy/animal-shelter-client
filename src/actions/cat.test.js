import {fetchCat, FETCH_CAT_SUCCESS, fetchCatSuccess} from './cat';

describe('fetchCat', () => {
  it('Should dispatch fetchCatSuccess', () => {
    const cat = {
      name: 'cat'
    };
    
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return cat;
        }
      })
    );

    const dispatch = jest.fn();
    return fetchCat()(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith('/api/cat');
      expect(dispatch).toHaveBeenCalledWith(fetchCatSuccess(cat));
    });
  });
});