
Array.prototype.getUnique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
};

String.prototype.format = function() {
  var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) {
	return typeof args[number] != 'undefined'? args[number] : match;
  });
};