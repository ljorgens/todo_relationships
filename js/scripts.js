$(document).ready(function() {
  var currentList;
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var list = $("input#list").val();
    var newList = { listItem: list, choreList: [] };

    $("#lists").append("<li class='list-name'>" + newList.listItem + "</li>");
    $("input#list").val("");

    $(".list-name").last().click(function() {
      $("ul#choresToDO").text("");
      currentList = newList;
      currentList.choreList.forEach(function(chore) {
        $("ul#choresToDO").append("<li>" + chore.newchore + "</li>");
      });
      $("#lists_li").text(newList.listItem);
    });

  });
    $("form#add_chore").submit(function(event) {
      event.preventDefault();




      $(".new-chores").each(function(){
        var chore = $(this).find("input#newChoreName").val();
        $("input#newChoreName").val("");
        var newChore= { newchore: chore };
        currentList.choreList.push(newChore);
      });
      $("ul#choresToDO").text("");
        currentList.choreList.forEach(function(chore){
          $("ul#choresToDO").append("<li>" + chore.newchore + "</li>");
        });
    });
});
