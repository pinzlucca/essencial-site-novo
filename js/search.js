function filtrar(){
    var input,
    ul,
    li,
    h,
    i,
    itemName,
    txtValue,
    count = 0

    input = document.getElementById('search');
    ul = document.getElementById('listaVagas');

    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++){
        
        h = li[i].getElementsByTagName("h6")[0];

        txtValue = h.textContent || h.innerText;

        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            count++;
            
            itemName = li[i].querySelector(".item-name")
            if(itemName){
                itemName.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match)=>{
                    return "<strong>" + match + "</strong>";
                })
            }
        }else{
            li[i].style.display="none"
        }
    }
}