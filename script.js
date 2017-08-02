function kidFriendly() {

    var initialForest = document.getElementById("sky_1")
    initialForest.setAttribute('src', "#background_tangled_scene1")

    var scene = document.getElementById('start_page')
    scene.setAttribute('visible', 'false')

    var scene2 = document.getElementById('scene2_tangled')
    scene2.setAttribute('visible', 'true')

}

function optionOneSceneTwo() {
    // var background = document.getElementById("sky_1");
    // background.setAttribute('src', "#newBackground");
    // background.setAttribute('visible', 'false')
}

function optionTwoSceneTwo() {
    // var background_2 = document.getElementById("sky_1");
    // background_2.setAttribute('src', "#newBackground_2");
    // background_2.setAttribute('visible', 'false')
}


function forGrownups() {

    var changetobankscene = document.getElementById('sky')
    changetobankscene.setAttribute('src', '#scene1_bank_image')

    var bankintromessage = document.getElementById('intro-message')
    bankintromessage.setAttribute('value', 'You and 3 friends are wanted felons, you need enough money to leave the country and start a new life. Your job is to get through without getting caught. Good luck!')



}
