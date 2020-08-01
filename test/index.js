import { assert } from 'chai'

import createDocument from './helpers/dom'

import * as yewtillitees from '../src/index'

describe('Library', () => {
  // array
  describe('findIndexes', () => {
    it('finds the correct indexes', () => {
      const array = ['a', 'b', 'a']
      const indexes = yewtillitees.findIndexes(array, (item) => item === 'a')
      assert.deepEqual(indexes, [0, 2])
    })

    it('does not mutate the array', () => {
      const array = ['a', 'b', 'c']
      yewtillitees.findIndexes(array, (item) => item === 'a')
      assert.deepEqual(array, ['a', 'b', 'c'])
    })
  })

  describe('pickRandom', () => {
    it('picks an item from an array', () => {
      const item = yewtillitees.pickRandom(['a', 'b', 'c'])

      assert.ok(item === 'a' || item === 'b' || item === 'c')
    })

    it('does not mutate the array', () => {
      const array = ['a', 'b', 'c']
      yewtillitees.pickRandom(array)

      assert.deepEqual(array, ['a', 'b', 'c'])
    })
  })

  describe('shuffle', () => {
    it('shuffles an array in place', () => {
      const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']

      const shuffled = yewtillitees.shuffle(arr)

      assert.strictEqual(shuffled, arr)

      // this *could* happen, but would be vanishingly unlikely
      // prettier-ignore
      assert.notDeepEqual(
        shuffled,
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
      );
    })
  })

  // dom

  describe('dom', function () {
    this.timeout(2000)

    beforeEach(function () {
      this.doc = createDocument()
    })
    afterEach(function () {
      this.doc()
    })

    describe('onWindowLoad', function () {
      it('calls function eventually', (done) => {
        yewtillitees.onWindowLoad(() => done())
      })
    })

    describe('onWindowLoad', function () {
      it('adds listener while loading', (done) => {
        Object.defineProperty(document, 'readyState', {
          get() {
            return 'loading'
          }
        })
        yewtillitees.onWindowLoad(() => done())
        window.triggerLoadEvent()
      })
    })

    describe('onWindowLoad', function () {
      it('calls function directly when loaded', (done) => {
        Object.defineProperty(document, 'readyState', {
          get() {
            return 'complete'
          }
        })
        yewtillitees.onWindowLoad(() => done())
      })
    })

    describe('onIdle', function () {
      it('calls function eventually', (done) => {
        yewtillitees.onIdle(() => done())
      })
    })

    describe('onIdleAfterLoad', function () {
      it('calls function eventually', (done) => {
        yewtillitees.onIdleAfterLoad(() => done())
      })
      it('calls function with a custom timeout', (done) => {
        let loaded = false
        yewtillitees.onIdleAfterLoad(() => (loaded = true), {
          delayAfterLoad: 1250
        })
        setTimeout(() => assert(!loaded), 1000)
        setTimeout(() => (assert(loaded), done()), 1500)
      })
    })
  })

  // number
  describe('clamp', () => {
    it('clamps a number', () => {
      assert.equal(yewtillitees.clamp(10, 20, 30), 20)
      assert.equal(yewtillitees.clamp(25, 20, 30), 25)
      assert.equal(yewtillitees.clamp(40, 20, 30), 30)
    })
  })

  describe('normalize', () => {
    it('normalizes to between 0 and 1', () => {
      const normalize = yewtillitees.normalize(10, 20)
      assert.equal(normalize(15), 0.5)
      assert.equal(normalize(5), -0.5)
    })

    it('handles equal min and max', () => {
      const normalize = yewtillitees.normalize(10, 10)
      assert.equal(normalize(5), 0)
      assert.equal(normalize(15), 0)
    })
  })

  describe('normalizeBetweenRanges', () => {
    it('normalizes between two ranges', () => {
      const normalize = yewtillitees.normalizeBetweenRanges([10, 20], [50, 100])
      assert.equal(normalize(15), 75)
      assert.equal(normalize(5), 25)
    })

    it('defaults to 0 and 1', () => {
      const normalize = yewtillitees.normalizeBetweenRanges([10, 20])
      assert.equal(normalize(15), 0.5)
      assert.equal(normalize(5), -0.5)
    })

    it('handles equal min and max', () => {
      const normalize = yewtillitees.normalizeBetweenRanges([10, 10], [50, 50])
      assert.equal(normalize(5), 0)
      assert.equal(normalize(15), 0)
    })
  })

  describe('linearScale', () => {
    it('scales a number', () => {
      const scale = yewtillitees.linearScale([10, 20], [50, 100])
      assert.equal(scale(15), 75)
      assert.equal(scale(5), 25)
    })

    it('provides an inverse() method', () => {
      const scale = yewtillitees.linearScale([10, 20], [50, 100])
      const inverse = scale.inverse()
      assert.equal(inverse(75), 15)
      assert.equal(inverse(25), 5)
    })
  })

  describe('random', () => {
    it('generates a random number', () => {
      const n = yewtillitees.random(10)
      assert.ok(n >= 0)
      assert.ok(n <= 10)
    })

    it('generates a random number between a and b', () => {
      const n = yewtillitees.random(50, 60)
      assert.ok(n >= 50)
      assert.ok(n <= 60)
    })
  })

  // object
  describe('mapObject', () => {
    it('maps over the object', () => {
      const obj = { a: 1, b: 2 }
      const mapped = yewtillitees.mapObject(obj, (i) => i * 2)

      assert.deepEqual(mapped, { a: 2, b: 4 })
    })
    it('will not mutate the original object', () => {
      const obj = { a: 1, b: 2 }
      yewtillitees.mapObject(obj, (i) => i * 2)

      assert.deepEqual(obj, { a: 1, b: 2 })
    })
  })

  describe('kebabCase', () => {
    it('converts to kebab case', () => {
      assert.equal(yewtillitees.kebabCase('kebabCase'), 'kebab-case')
    })
  })

  // string
  describe('camelCase', () => {
    it('converts to camel case', () => {
      assert.equal(yewtillitees.camelCase('camel-case'), 'camelCase')
    })
  })

  describe('kebabCase', () => {
    it('converts to kebab case', () => {
      assert.equal(yewtillitees.kebabCase('kebabCase'), 'kebab-case')
    })
  })
})
