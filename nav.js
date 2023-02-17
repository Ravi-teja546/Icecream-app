var Nav={
showPage:function(path){
targetDiv="displayArea";
var jqxhr=jQuery.post(path, function(data){
jQuery("#"+targetDiv).html(data);
});
},
};
