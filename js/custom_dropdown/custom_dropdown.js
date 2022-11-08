const $select = ($select) => document.querySelector($select);
const $selectAll = ($selectAll) => document.querySelectorAll($selectAll);
function CustomDropdown(_selectTag) {
    // below working
    let dropdown_select = $select('.custom_nl_dropdown select');
    //dropdown_select
    let dropdown_ul = document.createElement('ul');


    if (_selectTag === 'hide') {
        // alert('hide')
        $select('.dropdown_ul').remove() //
        // dropdown_ul.remove(); // remove dropdown list
        $select('.dropdown_select_action').classList.remove('dropdown_select_action'); // remove class for default
    } else {
        let dropdown_list = _selectTag.querySelectorAll('select option')
        dropdown_ul.classList.add('dropdown_ul')
        //console.log(_selectTag.nextEle)
        //console.log(_selectTag.classList.contains('dropdown_select_action'))
        if (_selectTag.classList.contains('dropdown_select_action') === false) {
            _selectTag.parentNode.appendChild(dropdown_ul)
        }
        _selectTag.classList.add('dropdown_select_action');

        dropdown_list.forEach((v, i) => {
            dropdown_ul.innerHTML += `<li class="${_selectTag.querySelector('select').value === v.value ? 'list_active_hover' : ''}" 
            onmouseover="dropdownItemOver(this)" onclick="dropdownItemFunc('${v.innerHTML}', '${v.value}', this)" data-value="${v.value}"> ${v.innerHTML} </li>`
        })
    }
}

// calling function
$selectAll('.custom_nl_dropdown .select_wrapper').forEach(v => {
    v.onclick = function (j) {
        console.log(v)
        CustomDropdown(v);
        document.addEventListener('mousedown', CustomDropdownClose);
    }
})


function CustomDropdownClose(e) {
    if (Boolean($select('.dropdown_ul'))) {
        if (!$select('.dropdown_ul').contains(e.target)) {
            //box.classList.add('hide')
            // alert('hide')
            CustomDropdown('hide');
        }
    }
}

function dropdownItemFunc(_text, _value, _self) {
    //alert('hi')
    //console.log($select('.dropdown_select_action select'))
    //_selectTag.classList.add('dropdown_action_done');
    _self.parentElement.previousElementSibling.classList.add('dropdown_action_done')

    $select('.dropdown_select_action select').style.fontWeight = 'bold';
    $select('.dropdown_select_action select').value = _value;
    CustomDropdown('hide');
}


function dropdownItemOver(_self) {
    let allList = _self.parentElement.querySelectorAll('li');
    allList.forEach(v => {
        v.classList.remove('list_active_hover');
    })
    _self.classList.add('list_active_hover')
}