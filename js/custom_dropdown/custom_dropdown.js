const $select = ($select) => document.querySelector($select);
const $selectAll = ($selectAll) => document.querySelectorAll($selectAll);
function CustomDropdown(_selectTag) {
    // below working
    let dropdown_select = $select('.custom_nl_dropdown select');
    //dropdown_select
    let dropdown_list = $selectAll('.custom_nl_dropdown select option');
    let dropdown_ul = document.createElement('ul');


    if (_selectTag === 'hide') {
        // alert('hide')
        $select('.dropdown_ul').remove() //
        // dropdown_ul.remove(); // remove dropdown list
        $select('.dropdown_select_action').classList.remove('dropdown_select_action'); // remove class for default
    } else {
        dropdown_ul.classList.add('dropdown_ul')
        //console.log(_selectTag.nextEle)
        //console.log(_selectTag.classList.contains('dropdown_select_action'))
        if (_selectTag.classList.contains('dropdown_select_action') === false) {
            _selectTag.parentNode.appendChild(dropdown_ul)
        }
        _selectTag.classList.add('dropdown_select_action')
        dropdown_list.forEach(v => {
            dropdown_ul.innerHTML += `<li data-value="${v.value}"> ${v.innerHTML} </li>`
        })
    }
}

// calling function
$selectAll('.custom_nl_dropdown .select_wrapper').forEach(v => {
    v.onclick = () => {
        CustomDropdown(v);
        document.addEventListener('mousedown', CustomDropdownClose);
    }
})


function CustomDropdownClose(e) {
    if (!$select('.dropdown_ul').contains(e.target)) {
        //box.classList.add('hide')
        // alert('hide')
        CustomDropdown('hide');
    }
}