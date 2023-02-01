$(document).ready(function() {
    var currentStep = 1;
    $("#step-" + currentStep).show();
    $(".next-step").click(function() {
        currentStep = currentStep +1; // currentStep +=1;
        $(".form-step").hide();
        $("#step-" + currentStep).show();
        $("#step-" + (currentStep-1) + "-indicator i").removeClass("fa-check-circle").addClass("fa-circle");
        $("#step-" + currentStep + "-indicator i").removeClass("fa-circle").addClass("fa-check-circle");
        $("#step-" + (currentStep-1) + "-indicator").removeClass("active");
        $("#step-" + currentStep + "-indicator").addClass("active");
        console.log(currentStep );
        if (currentStep === 1) {
            $("#estep1").addClass("active");
            $("#estep2" ).removeClass("active");
            $("#estep3" ).removeClass("active");
        }
        if (currentStep ===2) {
            $("#estep2").addClass("active");
            $("#estep1" ).removeClass("active");
            $("#estep3" ).removeClass("active");
        }
        if (currentStep ===3) {
            $("#estep3").addClass("active");
            $("#estep1" ).removeClass("active");
            $("#estep2" ).removeClass("active");
        }
        if (currentStep ===4) {
            $("#estep4").addClass("active");
            $("#estep3" ).removeClass("active");
        }
        if (currentStep ===5) {
            $("#estep5").addClass("active");
            $("#estep4" ).removeClass("active");
        }
        if (currentStep ===6) {
            $("#estep6").addClass("active");
            $("#estep5" ).removeClass("active");
        }
        if (currentStep ===7) {
            $("#estep7").addClass("active");
            $("#estep6" ).removeClass("active");
        }
    });

    

    $(".prev-step").click(function() {
        if (currentStep > 1) {
            currentStep = currentStep -1;
            $(".form-step").hide();
            $("#step-" + currentStep).show();
            $("#step-" + (currentStep+1) + "-indicator i").removeClass("fa-check-circle").addClass("fa-circle");
            $("#step-" + currentStep + "-indicator i").removeClass("fa-circle").addClass("fa-check-circle");
            $("#step-" + (currentStep+1) + "-indicator").removeClass("active");
            $("#step-" + currentStep + "-indicator").addClass("active");
            console.log(currentStep );
            if (currentStep === 1) {
                $("#estep1").addClass("active");
                $("#estep2" ).removeClass("active");
                $("#estep3" ).removeClass("active");
            }
            if (currentStep ===2) {
                $("#estep2").addClass("active");
                $("#estep1" ).removeClass("active");
                $("#estep3" ).removeClass("active");
            }
            if (currentStep ===3) {
                $("#estep3").addClass("active"); 
                $("#estep4" ).removeClass("active");
            }
            if (currentStep ===4) {
                $("#estep4").addClass("active");
                $("#estep5" ).removeClass("active");
            }
            if (currentStep ===5) {
                $("#estep5").addClass("active");
                $("#estep6" ).removeClass("active");
            }
            if (currentStep ===6) {
                $("#estep6").addClass("active");
                $("#estep7" ).removeClass("active");
            }
            if (currentStep ===7) {
                $("#estep7").addClass("active");
                $("#estep6" ).removeClass("active");
            }
        }
    });    
    
    
    var dropArea = $("#file-drop-area");
    var fileInput = $("#file-input");

    dropArea.on("drag dragstart dragend dragover dragenter dragleave drop", function(e) {
        e.preventDefault();
        e.stopPropagation();
    })
    .on("dragover dragenter", function() {
        dropArea.addClass("drag-over");
    })
    .on("dragleave dragend drop", function() {
        dropArea.removeClass("drag-over");
    })
    .on("drop", function(e) {
        fileInput.prop("files", e.originalEvent.dataTransfer.files);
    });

    fileInput.on("change", function() {
        var files = fileInput.prop("files");
        console.log(files);
    });
  });


   
