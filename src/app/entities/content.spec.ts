import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const testContent = new Content('Your order is ready!');

    expect(testContent).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('abc')).toThrow();
  });

  it('should not be able to create a notification content with more than 144 characters', () => {
    expect(() => new Content('a'.repeat(145))).toThrow();
  });
});
