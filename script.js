function kidFriendly() {

    // var initialForest = document.getElementById("tangled_sky_1")
    // initialForest.setAttribute('src', "#background_tangled_intro")

    var tangled_scene = document.getElementById('start_page');
    tangled_scene.setAttribute('visible', 'false');

    var tangled_scene2 = document.getElementById('intro_tangled');
    tangled_scene2.setAttribute('visible', 'true');

}


function forGrownups() {
    var robbery_scene = document.getElementById('start_page');
    robbery_scene.setAttribute('visible', 'false');

    var robbery_scene2 = document.getElementById('intro_robbery');
    robbery_scene2.setAttribute('visible', 'true');

}

function tangledScene1Right(){
    var tangled_scene1 = document.getElementById('intro_tangled');
    tangled_scene1.setAttribute('visible', 'true');

    var tangled_scene3 = document.getElementById('scene1_tangled');
    tangled_scene3.setAttribute('visible', 'false');
}