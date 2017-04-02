/**
 * Created by teddy on 4/2/2017.
 */
/**
 * Created by teddy on 3/31/2017.
 */
$(function () {
    var sliderMin = 1;
    var sliderMax = 10;
    var sliderInc = 1;
    var hasSlider = false;
    var hasRange = true;
    var hasPips = true;
    var sliderStep = 1;
    var initialVal = 5;

    if (hasSlider) {
        $('#inputVal').prop('readonly', true);
        genSlider(sliderMin, sliderMax, sliderInc, hasPips, sliderStep, initialVal,"#inputVal");
    } else {
        $("#sliderValue").hide();
        $.validator.addMethod("inBounds", function (value, element, param) {
            var inputVal = parseInt($("#inputVal").val());
            if (inputVal >= sliderMin && inputVal <= sliderMax) return true;
        }, "enter a number between " + sliderMin + " and " +  sliderMax);
        $("#sliderForm").validate({
            debug: true,
            rules: {
                "inputVal": {
                    required: true,
                    digits: true,
                    inBounds: true
                },
            },
            messages: {
                "inputVal": {
                    required : "Please, enter a number",
                    digits: "numbers only"
                }
            }
        });
        $("#inputVal").change(function() {
            $("#inputVal").valid();
        });
    }
});

