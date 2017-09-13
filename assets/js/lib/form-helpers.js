import $ from 'jquery';

function thisTest() {
  const test = $('body');
  console.dir(test);
  console.log('hello this is test');
}

export default { thisTest};
