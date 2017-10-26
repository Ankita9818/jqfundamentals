$(document).ready(function() {

  /***************   Exercise 1- Selection   ***********/
  //1 - Select all of the div elements that have a class of "module".
  var $divs = $('div.module');

  //2 - Come up with three selectors that you could use to get the third item in the #myList unordered list.
  // Which is the best to use? Why?
  console.log( $('#myList :eq(2)')); //Way 1
  console.log( $( "#myList li:nth-child(3)" ));  //way 2
  console.log( $( "#myList li" ).get(2)); //way3
  /* Best among these 3 ways is using eq selector, because With :nth-child(n),
  all children are counted, regardless of what they are, and the specified element is selected only
  if it matches the selector attached to the pseudo-class. With :eq(n) only the selector attached
  to the pseudo-class is counted, not limited to children of any other element, and the
  (n+1)th one (n is 0-based) is selected.:eq() is designed to select a single element while
  :nth-child() or :eq() within a looping construct such as .each() can select multiple elements. */

  //3- Select the label for the search input using an attribute selector.
  $("label[for='q']").css("color", "green");

  //4- Figure out how many elements on the page are hidden
  console.log($("* :hidden").length);

  //5- Figure out how many image elements on the page have an alt attribute.
  console.log($('img[alt]').length);

  //6- Select all of the odd table rows in the table body.
  $('tbody tr:even').css( "color", "lightblue");


  /********************** Exercise 2 **********************/
  //1- Select all of the image elements on the page; log each image's alt attribute.
  $("img").each(function(){
   console.log($(this).attr("alt"));
  });

  //2- Select the search input text box, then traverse up to the form and add a class to the form.
  $("input.input_text").parent().addClass("bordered-form");

  //3- Select the list item inside #myList that has a class of "current" and remove that class from it;
  //add a class of "current" to the next list item.
  var $currentLiItem = $("#myList li.current");
  $currentLiItem.removeClass("current");
  $currentLiItem.next().addClass("current");

  //4- Select the select element inside #specials; traverse your way to the submit button.
  var $selectElement = $("#specials select");
  var $submitBtn = $selectElement.parent().next().children();

  //5- Select the first list item in the #slideshow element; add the class "current" to it,
  //and then add a class of "disabled" to its sibling elements.
  var $firstSlideshowElement = $("#slideshow li:first");
  $firstSlideshowElement.addClass("current");
  $firstSlideshowElement.siblings().addClass("disabled");


  /****************** Exercise3- Manipulation ******************/
  //1- Add five new list items to the end of the unordered list #myList.
  var newListItems = [], $myList = $('#myList');
  var $lastIndex = $myList.children().last().index();
  for (var i = ($lastIndex + 2); i <= ($lastIndex + 6); i++) {
    newListItems.push('<li>List item ' + i + '</li>');
  }
  $myList.append(newListItems.join(''));

  //2- Remove the odd list items
  $("#myList li:even").remove();    //To remove item no 1,3,5,7...

  //3- Add another h2 and another paragraph to the last div.module
  var $lastModule = $("div.module:last"), newItems = [];
  newItems.push('<h2>New h2 element added by Exercise3 part 3</h2>');
  newItems.push('<p>New p element added by Exercise3 part 3</p>');
  $lastModule.append(newItems.join(''));

  //4- Add another option to the select element; give the option the value "Wednesday"
  var $selectElement = $("#specials select");
  var $optionElement = $('<option/>', {
    html : 'Wednesday',
    value : 'wednesday'
  });
  $selectElement.append($optionElement);

  //5- Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  var $imageCopy = $("img").first().clone();
  $imageCopy.attr({
    "width" : "100%"
  });
  $lastModule.clone()
    .append($imageCopy)
    .insertAfter($lastModule);
  $imageCopy.parent()
    .addClass("bordered-form");
});