$(document).ready(function(){
    // Email

    $("#email").inputmask(
        {
            mask:"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy:!1,onBeforePaste:function(m,a){return(m=m.toLowerCase()).replace("mailto:","")},
            definitions:{"*":
                {
                    validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality:1,
                    casing:"lower"
                }
            }
        }
    )
    /*
    ==================
        METHODS
    ==================
    */


    // On Complete
    $("#oncomplete").inputmask("99/99/9999",{ oncomplete: function(){ $('#oncompleteHelp').css('display', 'block'); } });


    // On InComplete
    $("#onincomplete").inputmask("99/99/9999",{ onincomplete: function(){ $('#onincompleteHelp').css('display', 'block'); } });

    
    // On Cleared
    $("#oncleared").inputmask("99/99/9999",{ oncleared: function(){ $('#onclearedHelp').css('display', 'block'); } });


    // Repeater
    $("#repeater").inputmask({ "mask": "2", "repeat": 4});  // ~ mask "9999999999"
    

    // isComplete

    $("#userCardID").inputmask({mask:"9999999999999999"})
    $("#userCardID").inputmask("setvalue", "________________");
    $('#userCardID').on('focus keyup', function(event) {
        event.preventDefault();
        if($(this).inputmask("isComplete")){
            $('#userCardIDNotif').css('display', 'block');
        }
    });
    $('#userCardID').on('keyup', function(event) {
        event.preventDefault();
        if(!$(this).inputmask("isComplete")){
            $('#userCardIDNotif').css('display', 'none');
        }
    });


    // Set Default Value

    $("#setVal").inputmask({
        mask:"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy:!1,onBeforePaste:function(m,a){return(m=m.toLowerCase()).replace("mailto:","")},
        definitions:{"*":
            {
                validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                cardinality:1,
                casing:"lower"
            }
        }
    })
    $('#setVal').on('focus', function(event) {
        $(this).inputmask("setvalue", 'test@mail.com');
    });


});