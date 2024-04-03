$(document).ready(function(){
    $('form button').click(function(){
       
    })
    

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('riscado');
    })


    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);

        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    
    
})