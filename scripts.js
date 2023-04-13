//jQuery

//Adding a new item to the list of items:
function newItem(){
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
     });

//Crossing out an item from the list of items:
 let crossOutButton = $('<crossOutButton></crossOutButton>');
     crossOutButton.append(document.createTextNode('X'));
     li.append(crossOutButton);
//Adding the delete button "X":
     crossOutButton.on("click", deleteListItem);
//Adding CLASS DELETE (DISPLAY: NONE) from the css:
        function deleteListItem(){
            li.addClass("delete")
        }   
//Reordering the items:
    $('#list').sortable();

    }

    $('#input').keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            newItem();
        }
    });