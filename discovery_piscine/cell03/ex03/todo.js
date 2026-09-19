const listContainer = document.getElementById('ft_list');
window.onload = function(){
    let cookieData = getCookie("ft_todo_data");

    if (cookieData) {
        try {
            let todoArray = JSON.parse(cookieData);
            todoArray.forEach(function(itemText) {
                AddToDo(itemText, false);
            });
        } catch (e) {
            console.error("thereErrorBro", e);
        }
    }
}


function NEWTODO(){
    let text = prompt("Enter your ToDo");
    if (text !== null && text.trim() !== ""){
        AddToDo(text.trim(), true);
        saveCookie();
    }
}

function AddToDo(text, insertAtTop){
    let todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.onclick = function(){
        let Removal = confirm("Get rid of this ToDo?")
        if (Removal) {
            todoDiv.remove();
            saveCookie();
        }
    };

    if (insertAtTop){
        listContainer.insertBefore(todoDiv, listContainer.firstChild);
    } else {
        listContainer.appendChild(todoDiv);
    }
}

function saveCookie(){
    let items = listContainer.children;
    let currentList = [];

    for (let i = 0; i < items.length; i++) {
        currentList.push(items[i].textContent);
    }

    let JSONString = encodeURIComponent(JSON.stringify(currentList));

    document.cookie = "ft_todo_data=" + JSONString + "; max-age=60000; path=/";
}
function getCookie(name) {
          let nameEQ = name + "=";
         let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}