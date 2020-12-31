const { videoSites } = require('../video-sites');

function regexReplace(str) {
  let aLink = `<a href="${str}">any</a>`
  for (const item of videoSites) {
    aLink = aLink.replace(item.from, item.to);
  }
  return aLink;
}

describe('test-regex', () => {
  test('youtube', () => {
    expect(
      regexReplace(
        'https://www.youtube.com/watch?v=LrZvkj3FfZM&ab_channel=NonstopChristmasSongs2020',
      ),
    ).toBe(
      `//www.youtube.com/embed/LrZvkj3FfZM`,
    );
  });
});
