(function() {
    var currentUrl = window.location.href;
    var urlParams = new URLSearchParams(currentUrl.search);
    var characterName = urlParams.get('characterName');
    var namespace = urlParams.get('namespace');
    var realmSlug = urlParams.get('realmSlug');

    if (characterName && namespace && realmSlug) {
        fetch(`https://wowndde.huzy.net/api/character-specializations?characterName=${characterName}&namespace=${namespace}&realmSlug=${realmSlug}`)
            .then((result) => {
                console.log(result);
            })
    }
})();