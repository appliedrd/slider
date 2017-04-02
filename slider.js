/**
 * Created by teddy on 4/2/2017.
 */
function genSlider(minrange, maxrange, increment, hasPips, step, initialVal,resultId) {
    //$("#params").text("min:" + minrange + " max:" + maxrange + " increment:" + increment + " step:" + step);
    $(".slider")
        .slider({
            min: minrange,
            max: maxrange,
            step: increment
        })
        .slider("float")
        .on("slidechange", function (e, ui) {
            $(resultId).val(ui.value);
        });
    if (hasPips) {
        $(".slider")
            .slider("pips", {
                rest: "label",
                step: step
            });
    }
};