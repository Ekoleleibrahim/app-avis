(function() {
    var inputs = document.querySelectorAll('input'),
        btnSubmit = document.getElementById('submit'),
        dialogNotification = document.querySelector('.dialog-notification');
    var totalNotes = inputs.length,
        displayTextTotalNotes = document.querySelector('.bg-blue-foncer');

    function selectedNote() {
        
        inputs.forEach(function(btn) {
            btn.addEventListener('change', function() {

                for (var i = 0; i < inputs.length; i++) {

                    if (inputs[i].checked) {
                        inputs[i].parentElement.setAttribute('class', 'active');
                    }
                    else {
                        inputs[i].parentElement.setAttribute('class', 'parent-btn');
                    }
                }
            });
        });
    }

    selectedNote();

    btnSubmit.addEventListener('click', function() {

        for (var i = 0; i < inputs.length; i++) {

            if (inputs[i].checked) {
                displayTextTotalNotes.innerHTML = `You selected ${inputs[i].value} out of ${totalNotes}`;
                dialogNotification.classList ='display-dialog-notification';
            }
        }

    });
    

    document.body.querySelector('#link').addEventListener('click', function(e) {

        dialogNotification.setAttribute('class', 'dialog-notification');
    });

}) ();