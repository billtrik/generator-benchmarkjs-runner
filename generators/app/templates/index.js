import BenchmarkRunner from 'simple-benchmarkjs-runner';
import first from './implementations/first';
import second from './implementations/second';
import third from './implementations/third';

new BenchmarkRunner({
  title: 'Search for char in string',
  tests: [
    {
      title: 'RegExp#test',
      fn: first
    }, {
      title: 'String#indexOf',
      fn: second
    }, {
      title: 'String#match',
      fn: third
    }
  ]
})
