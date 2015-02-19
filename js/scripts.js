$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var list = $("input#list").val();
    var newList = { listItem: list };

    $("#lists").append("<li>" + newList.listItem + "</li>");
    $("input#list").val("");

    $("#lists li").last().click(function(event) {
      $(this).appendTo("#completed");

      $("#completed li").click(function(event){
        $(this).remove();
      });
    });
  });
});
