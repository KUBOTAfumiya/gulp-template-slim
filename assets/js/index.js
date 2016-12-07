require('jquery');
require('underscore');
require('lodash');

(function(){
  var collection = {
    foo: [1,2,3],
    date: new Date(),
    bool: true,
    undefined: undefined
  };
  // var copy_jquery = $.extend(true, collection, {});
  // console.log(copy_jquery === collection);
  // console.log(typeof copy_jquery.date);
  // console.log(typeof copy_jquery.bool);
  // console.log(typeof copy_jquery.undefined);
  // 
  // var copy_json = JSON.parse(JSON.stringify(collection));
  // console.log(copy_json === collection);
  // console.log(typeof copy_json.date);
  // console.log(typeof copy_json.bool);
  // console.log(typeof copy_json.undefined);
  // 
  // var copy_lodash = lodash.cloneDeep(collection);
  // console.log(copy_lodash === collection);
  // console.log(typeof copy_lodash.date);
  // console.log(typeof copy_lodash.bool);
  // console.log(typeof copy_lodash.undefined);
  
  var copy_es6 = Object.assign({bar: 'aaa'}, collection);
  console.log(collection);
  console.log(copy_es6);
  // console.log(copy_es6.date);
  // console.log(typeof copy_es6.bool);
  // console.log(typeof copy_es6.undefined);
  
  // var copy_underscore = _.extend(collection, {bar: undefined});
  // console.log(copy_underscore === collection);
  // console.log(collection);
  // console.log(typeof copy_underscore.date);
  // console.log(typeof copy_underscore.bool);
  // console.log(typeof copy_underscore.undefined);
  
  
})();
