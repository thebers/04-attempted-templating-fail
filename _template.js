$(document).ready(function()){

var myTemplate = ._template($("#template").html());

$("#clickMe").click(function() {

var listValues = {
addItem : $("#listItem").val();
}

$("#appendHere").append(myTemplate(listValues));

$("#listItem").val("");

});

}
