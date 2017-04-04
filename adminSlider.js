/**
 * Created by teddy on 3/31/2017.
 */
$(function () {
    // slider configuration elements
    var $sliderMin = $("#sliderMin");
    var $sliderMax = $("#sliderMax");
    var $sliderInc = $("#sliderInc");
    var $sliderStep = $("#sliderStep");
    var $initialVal = $("#initialVal");
    var $sliderValue = "#sliderValue";
    // form control elements
    var $addSteps = $("#addSteps");
    var $hasRange = $('input[type=checkbox][name=hasRange]');
    var $addSliderv = $('input[type=checkbox][name=addSliderv]');
    var $hasPips = $('input[type=checkbox][name=hasPips]');
    // form display elements
    var $sliderForm = $("#sliderForm");
    var $showMinMax = $("#showMinMax");
    var $showSlider = $("#showSlider");
    var $sliderFormErrors = $("#sliderFormErrors");
    var $sliderWidget = $("#sliderWidget");

    $hasRange.change(function() {
        if( $(this).is(":checked") ){
            $showMinMax.show();
        }
        else  {
            $showMinMax.hide();
        }
    });
    $addSliderv.change(function() {
        if( $(this).is(":checked") ){
            $showSlider.show();
        }
        else  {
            $showSlider.hide();
        }
    });
    $hasPips.change(function() {
        if( $(this).is(":checked") ){
            $addSteps.show();
        }
        else  {
            $addSteps.hide();
        }
    });
    //custon validation rule - checks to see if they have that many credits available
    $.validator.addMethod("MaxGreaterThanMin", function (value, element, param) {
        var min = $sliderMin.val();
        var max = $sliderMax.val();
        if (parseInt(max) > parseInt(min)) return true;
    }, "Max must be greater than Min.");

    $.validator.addMethod("checkIncrement", function (value, element, param) {
        var min = $sliderMin.val();
        var max = $sliderMax.val();
        var inc = $sliderInc.val();
        var range = max - min;
        if ((range / inc) >= 2) return true;
    }, "increase range or reduce increment");

    $sliderForm.validate({
        debug: true,
        rules: {
            "sliderMin": {
                required: true,
                digits: true
            },
            "sliderMax": {
                required: true,
                digits: true,
                MaxGreaterThanMin: true
            },
            "sliderInc": {
                required: true,
                digits: true,
                checkIncrement: true
            },
            "sliderStep": {
                digits: true
            },
        },
        messages: {
            "sliderMin": {
                required: "Please, enter the range minimum"
            },
            "sliderMax": {
                required: "Please, enter the range maxium",
                greaterThan: "max must be greater than min"
            },
            "sliderInc": {
                required: "Please, enter the increment for the slider"
            },
        },
    });
    $sliderForm.submit(function (event) {
        if ($sliderForm.valid()) {
            genSlider(parseInt($sliderMin.val()), parseInt($sliderMax.val()), parseInt($sliderInc.val()),
                $hasPips.is(':checked'), parseInt($sliderStep.val()), parseInt($initialVal.val()), $sliderValue)
            $sliderFormErrors.text("");
            $sliderWidget.show();
        } else {
            $sliderFormErrors.text("errors on form");
            $sliderWidget.hide();
        }
        event.preventDefault();
    });
    $sliderMin.change(function() {
        $sliderMin.valid();
    });
    $sliderMax.change(function() {
        $sliderMax.valid();
    });
});
