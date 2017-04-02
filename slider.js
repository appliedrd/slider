/**
 * Created by teddy on 4/2/2017.
 */
function genSlider(minrange, maxrange, increment, hasPips, step, initialVal) {
    //$("#params").text("min:" + minrange + " max:" + maxrange + " increment:" + increment + " step:" + step);
    $(".slider")
        .slider({
            min: minrange,
            max: maxrange,
            step: increment
        })
        .slider("float")
        .on("slidechange", function (e, ui) {
            $("#sliderValue").text("You selected " + ui.value);
        });
    if (hasPips) {
        $(".slider")
            .slider("pips", {
                rest: "label",
                step: step
            });
    }
};