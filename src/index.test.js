import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

describe('Poll Widget HTML Pages', () => {
  describe('index.html', () => {
    let dom;
    let window;
    let document;

    beforeEach(() => {
      const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
      dom = new JSDOM(html);
      window = dom.window;
      document = window.document;
    });

    test('has the correct title', () => {
      expect(document.title).toBe('Poll Demo - First Poll');
    });

    test('contains root element for poll', () => {
      const rootElement = document.getElementById('root');
      expect(rootElement).toBeTruthy();
    }); 
    
  });

  describe('secondpoll.html', () => {
    let dom;
    let window;
    let document;

    beforeEach(() => {
      const html = fs.readFileSync(path.resolve(__dirname, '../secondpoll.html'), 'utf8');
      dom = new JSDOM(html);
      window = dom.window;
      document = window.document;
    });

    test('has the correct title', () => {
      expect(document.title).toBe('Poll Demo - Second Poll');
    });

    test('contains poll2 element', () => {
      const pollElement = document.getElementById('poll2');
      expect(pollElement).toBeTruthy();
    });

    test('has navigation links', () => {
      const homeLink = document.querySelector('a[href="/index.html"]');
      const secondPollLink = document.querySelector('a[href="/secondpoll.html"]');
      
      expect(homeLink).toBeTruthy();
      expect(secondPollLink).toBeTruthy();
      expect(homeLink.textContent.trim()).toBe('Home');
    });

    
  });
});