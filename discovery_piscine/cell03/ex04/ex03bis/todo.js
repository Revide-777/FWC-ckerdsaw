$(function(){
    const $list = $("#ft_list");

    // load saved todos (replaces window.onload)
    let cookieData = getCookie("ft_todo_data");
    if (cookieData){
        try {
            let todoArray = JSON.parse(cookieData);
            $.each(todoArray, function(i, itemText){
                AddToDo(itemText, false);
            });
        } catch (e) {
            console.error("thereErrorBro", e);
        }
    }

    $("#new_btn").on("click", NEWTODO);

    function NEWTODO(){
        let text = prompt("Enter your ToDo");
        if (text !== null && text.trim() !== ""){
            AddToDo(text.trim(), true);
            saveCookie();
        }
    }

    function AddToDo(text, insertAtTop){
        const $todo = $("<div>").text(text);

        $todo.on("click", function(){
            if (confirm("Get rid of this ToDo?")){
                $(this).remove();
                saveCookie();
            }
        });

        if (insertAtTop){
            $list.prepend($todo);
        } else {
            $list.append($todo);
        }
    }

    function saveCookie(){
        let currentList = [];

        $list.children().each(function(){
            currentList.push($(this).text());
        });

        let JSONString = encodeURIComponent(JSON.stringify(currentList));
        document.cookie = "ft_todo_data=" + JSONString + "; max-age=60000; path=/";
    }

    function getCookie(name){
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++){
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0){
                return decodeURIComponent(c.substring(nameEQ.length));
            }
        }
        return null;
    }
});