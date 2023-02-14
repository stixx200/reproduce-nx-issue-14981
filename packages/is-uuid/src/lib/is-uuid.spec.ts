import { isUuid } from './is-uuid';
import { v4 } from "uuid";

describe('isUuid', () => {
  it('returns false if input is no uuid', () => {
    const uuid = "123";
    expect(isUuid(uuid)).toEqual(false);
  });
  
  it('should return true if input is uuid', () => {
    const uuid = v4();
    expect(isUuid(uuid)).toEqual(true);
  });
});
