document.addEventListener('readystatechange', (e) => {
    if (document.readyState === 'complete') {

        document.querySelector("#menu-file").addEventListener('click', () => {
            console.log('click')
            console.log(document.querySelector("#menu-file").classList)
            if (document.querySelector("#menu-file").classList.contains('open')) {
                document.querySelector("#menu-file").classList.remove('open')
            } else {
                document.querySelector("#menu-file").classList.add('open')
            }
        });

        document.querySelector(".step1").addEventListener('click', () => {
            document.getElementById("videoFile").click()
        });
        const videoEle = document.querySelector("#videoFile");
        videoEle.addEventListener('change', function (event) {
            const videoPath = videoEle.files[0].path;
            console.log(videoPath)
            document.querySelector("#file-path").innerHTML = videoPath
        }, false)

        // const videoContainerEle = document.querySelector("#videoContainer");
        // videoContainerEle.addEventListener('loadeddata', () => {
        //     console.log('loaded');
        //     videoContainerEle.play()
        // });

        // console.log(videoEle);
        // videoEle.addEventListener('change', function (event) {
        //     const videoPath = videoEle.files[0].path;
        //     console.log(videoPath)
        //     videoContainerEle.setAttribute('src', videoPath)
        // }, false)
    }
});

document.addEventListener('keypress', (e) => {
    if (e.code === 'KeyT') {
        const controlStyle = document.getElementById('control-style')
        if (controlStyle.innerText !== "") {
            controlStyle.innerText = ""
        } else {
            controlStyle.innerText = `div {border: 1px solid rgba(21, 21, 21, 0.91);}`;
        }
    }
});
