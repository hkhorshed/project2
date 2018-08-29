function disapear(){$(document).ready(function(){
    $('ul').click(function(){
        $(this).closest('ul').hide();
    });
});
}
var counter = 1;
$(document).ready(function(){

    $('.down0').click(function(){
        $(this).closest('ul').children('ul').toggle();
        $(this).closest('ul').children('span').toggle();
    });
    //////////
    ////////////////////
    //1
    ////////////////////
    //////////
    $('.addOn').click(function(){
        //the pieces of the form
        let but = document.getElementById('log');
        let div = document.createElement('div');
        let formBox = document.createElement('form');
        let labelS = document.createElement('label');
        let inputS = document.createElement('input');
        let labelO = document.createElement('label');
        let inputO = document.createElement('input');
        let labelD = document.createElement('label');
        let inputD = document.createElement('input');
        let Scrap = document.createElement('button');
        let Submit = document.createElement('button');
        inputS.setAttribute('type', 'text');
        inputO.setAttribute('type', 'text');
        inputD.setAttribute('type', 'text');
        //putting the form together
        labelS.textContent = "Subtask:"
        formBox.appendChild(labelS);
        inputS.setAttribute('id', 'subtask');
        formBox.appendChild(inputS);
        labelO.textContent = "Owner:"
        formBox.appendChild(labelO);
        inputO.setAttribute('id', 'owner');
        formBox.appendChild(inputO);
        labelD.textContent = "Description:"
        formBox.appendChild(labelD);
        inputD.setAttribute('id', 'description');
        formBox.appendChild(inputD);
        Scrap.setAttribute('class', 'scrap');
        Scrap.textContent="scrap";
        formBox.appendChild(Scrap);
        Submit.setAttribute('class', 'submit');
        Submit.textContent="submit";
        formBox.appendChild(Submit);
        div.append(formBox);
        $(this).closest('ul').append(div);

        //scrap button 
        $('.scrap').click(function(event){
            event.preventDefault();
            $(this).closest('div').remove();
        });

        //submit button
        $('.submit').click(function(event){
            event.preventDefault();
            //the peices of the new subtask
            let newUL = document.createElement('ul');
            let divUnordered = document.createElement('div');
            let pName = document.createElement('p');
            let pOwner = document.createElement('p');
            let bDown = document.createElement('button');
            let descr = document.createElement('span');
            let add = document.createElement('div');
            //the classes of the new subtask
            divUnordered.setAttribute('class', 'unordered');
            pName.setAttribute('class', 'pName');
            pOwner.setAttribute('class', 'owner');
            bDown.setAttribute('class', 'down'+ counter);
            bDown.setAttribute('id', 'down');

            add.setAttribute('class', 'addOn'+ counter)
            //the content of the new subtask
            pName.textContent= $(this).siblings('#subtask').val();
            pOwner.textContent=$(this).siblings('#owner').val();
            bDown.textContent="V";
            descr.textContent=$(this).siblings('#description').val();
            add.textContent="+ Add Sub-class";
            //putting all the pieces together and plugging them in
            divUnordered.append(pName);
            divUnordered.append(pOwner);
            divUnordered.append(bDown);
            newUL.append(divUnordered);
            newUL.append(descr);
            newUL.append(add);


            $(this).closest('ul').append(newUL);
            //remover form
            $(this).closest('div').remove();
            counter +=1;

        });
        //////////
        ////////////////////
        //2
        ////////////////////
        //////////
        $('body').on('click', 'button.down' + counter, function(){
            $(this).closest('ul').children('ul').toggle();
            $(this).closest('ul').children('span').toggle();
        });
        $('body').on('click', 'div.addOn' + counter, function(){       //the pieces of the form
        let but = document.getElementById('log');
        let div = document.createElement('div');
        let formBox = document.createElement('form');
        let labelS = document.createElement('label');
        let inputS = document.createElement('input');
        let labelO = document.createElement('label');
        let inputO = document.createElement('input');
        let labelD = document.createElement('label');
        let inputD = document.createElement('input');
        let Scrap = document.createElement('button');
        let Submit = document.createElement('button');
        inputS.setAttribute('type', 'text');
        inputO.setAttribute('type', 'text');
        inputD.setAttribute('type', 'text');
        //putting the form together
        labelS.textContent = "Subtask:"
        formBox.appendChild(labelS);
        inputS.setAttribute('id', 'subtask');
        formBox.appendChild(inputS);
        labelO.textContent = "Owner:"
        formBox.appendChild(labelO);
        inputO.setAttribute('id', 'owner');
        formBox.appendChild(inputO);
        labelD.textContent = "Description:"
        formBox.appendChild(labelD);
        inputD.setAttribute('id', 'description');
        formBox.appendChild(inputD);
        Scrap.setAttribute('class', 'scrap');
        Scrap.textContent="scrap";
        formBox.appendChild(Scrap);
        Submit.setAttribute('class', 'submit');
        Submit.textContent="submit";
        formBox.appendChild(Submit);
        div.append(formBox);
        $(this).closest('ul').append(div);

        //scrap button 
        $('.scrap').click(function(event){
            event.preventDefault();
            $(this).closest('div').remove();
        });

        //submit button
        $('.submit').click(function(event){
            event.preventDefault();
            //the peices of the new subtask
            let newUL = document.createElement('ul');
            let divUnordered = document.createElement('div');
            let pName = document.createElement('p');
            let pOwner = document.createElement('p');
            let bDown = document.createElement('button');
            let descr = document.createElement('span');
            let add = document.createElement('div');
            //the classes of the new subtask
            divUnordered.setAttribute('class', 'unordered');
            pName.setAttribute('class', 'pName');
            pOwner.setAttribute('class', 'owner');
            bDown.setAttribute('class', 'down'+ counter);
            bDown.setAttribute('id', 'down');

            add.setAttribute('class', 'addOn' +counter)
            //the content of the new subtask
            pName.textContent= $(this).siblings('#subtask').val();
            pOwner.textContent=$(this).siblings('#owner').val();
            bDown.textContent="V";
            descr.textContent=$(this).siblings('#description').val();
            add.textContent="+ Add Sub-class";
            //putting all the pieces together and plugging them in
            divUnordered.append(pName);
            divUnordered.append(pOwner);
            divUnordered.append(bDown);
            newUL.append(divUnordered);
            newUL.append(descr);
            newUL.append(add);
            console.log(counter)

            $(this).closest('ul').append(newUL);
            //remover form
            $(this).closest('div').remove();
            counter +=1;

        });
        $('body').on('click', 'button.down' + counter, function(){
            $(this).closest('ul').children('ul').toggle();
            $(this).closest('ul').children('span').toggle();
        });
        $('body').on('click', 'div.addOn' + counter, function(){       //the pieces of the form
        let but = document.getElementById('log');
        let div = document.createElement('div');
        let formBox = document.createElement('form');
        let labelS = document.createElement('label');
        let inputS = document.createElement('input');
        let labelO = document.createElement('label');
        let inputO = document.createElement('input');
        let labelD = document.createElement('label');
        let inputD = document.createElement('input');
        let Scrap = document.createElement('button');
        let Submit = document.createElement('button');
        inputS.setAttribute('type', 'text');
        inputO.setAttribute('type', 'text');
        inputD.setAttribute('type', 'text');
        //putting the form together
        labelS.textContent = "Subtask:"
        formBox.appendChild(labelS);
        inputS.setAttribute('id', 'subtask');
        formBox.appendChild(inputS);
        labelO.textContent = "Owner:"
        formBox.appendChild(labelO);
        inputO.setAttribute('id', 'owner');
        formBox.appendChild(inputO);
        labelD.textContent = "Description:"
        formBox.appendChild(labelD);
        inputD.setAttribute('id', 'description');
        formBox.appendChild(inputD);
        Scrap.setAttribute('class', 'scrap');
        Scrap.textContent="scrap";
        formBox.appendChild(Scrap);
        Submit.setAttribute('class', 'submit');
        Submit.textContent="submit";
        formBox.appendChild(Submit);
        div.append(formBox);
        $(this).closest('ul').append(div);

        //scrap button 
        $('.scrap').click(function(event){
            event.preventDefault();
            $(this).closest('div').remove();
        });

        //submit button
        $('.submit').click(function(event){
            event.preventDefault();
            //the peices of the new subtask
            let newUL = document.createElement('ul');
            let divUnordered = document.createElement('div');
            let pName = document.createElement('p');
            let pOwner = document.createElement('p');
            let bDown = document.createElement('button');
            let descr = document.createElement('span');
            let add = document.createElement('div');
            //the classes of the new subtask
            divUnordered.setAttribute('class', 'unordered');
            pName.setAttribute('class', 'pName');
            pOwner.setAttribute('class', 'owner');
            bDown.setAttribute('class', 'down'+ counter);
            bDown.setAttribute('id', 'down');

            add.setAttribute('class', 'addOn' +counter)
            //the content of the new subtask
            pName.textContent= $(this).siblings('#subtask').val();
            pOwner.textContent=$(this).siblings('#owner').val();
            bDown.textContent="V";
            descr.textContent=$(this).siblings('#description').val();
            add.textContent="+ Add Sub-class";
            //putting all the pieces together and plugging them in
            divUnordered.append(pName);
            divUnordered.append(pOwner);
            divUnordered.append(bDown);
            newUL.append(divUnordered);
            newUL.append(descr);
            newUL.append(add);
            console.log(counter)

            $(this).closest('ul').append(newUL);
            //remover form
            $(this).closest('div').remove();
            counter +=1;

        });
        });
    });
    });
});